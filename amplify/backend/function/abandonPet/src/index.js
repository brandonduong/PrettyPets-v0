/* Amplify Params - DO NOT EDIT
	API_PRETTYPETS_GRAPHQLAPIENDPOINTOUTPUT
	API_PRETTYPETS_GRAPHQLAPIIDOUTPUT
	API_PRETTYPETS_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const axios = require('axios');
const graphql = require('graphql');
const gql = require('graphql-tag');
const {print} = graphql;
const url = process.env.API_PRETTYPETS_GRAPHQLAPIENDPOINTOUTPUT
const key = process.env.API_PRETTYPETS_GRAPHQLAPIKEYOUTPUT

const DEFAULT_STARDUST = {
  uglyStarDust: 0,
  poorStarDust: 0,
  fineStarDust: 0,
  cuteStarDust: 0,
  prettyStarDust: 0
}
const RAINBOW_DYE_PAYOUT = [5, 10, 25, 50, 100]


const updatePrettyPet = gql`
    mutation UpdatePrettyPet(
        $input: UpdatePrettyPetInput!
        $condition: ModelPrettyPetConditionInput
    ) {
        updatePrettyPet(input: $input, condition: $condition) {
            id
            animal
            nickname
            shiny
            traits
            star
            stats {
                cool
                cute
                confidence
                control
            }
            variant
            status
            createdAt
            updatedAt
            userPetsId
        }
    }
`

const getUser = gql`
    query GetUser($id: ID!) {
        getUser(id: $id) {
            id
            rainbowDye
            starDust {
                uglyStarDust
                poorStarDust
                fineStarDust
                cuteStarDust
                prettyStarDust
            }
        }
    }
`

const updateUser = gql`
    mutation UpdateUser(
        $input: UpdateUserInput!
        $condition: ModelUserConditionInput
    ) {
        updateUser(input: $input, condition: $condition) {
            id
            rainbowDye
            starDust {
                uglyStarDust
                poorStarDust
                fineStarDust
                cuteStarDust
                prettyStarDust
            }
        }
    }
`

const getPrettyPet = gql`
    query GetPrettyPet($id: ID!) {
        getPrettyPet(id: $id) {
            id
            userPetsId
        }
    }
`

async function updatePetOwner(petIds) {
  const pets = []
  console.log(petIds)
  for (const petId of petIds) {
    // Update pet's owner to none
    try {
      const petInfo = {
        id: petId,
        userPetsId: null
      }

      const petData = await axios({
        url: url,
        method: 'post',
        headers: {
          'x-api-key': key
        },
        data: {
          query: print(updatePrettyPet),
          variables: {
            input: petInfo
          }
        }
      })
      pets.push(petData.data.data.updatePrettyPet)
    } catch (err) {
      console.log('error updating pet: ', err);
    }
  }
  return pets
}

async function getUserId(petId) {
  try {
    const petData = await axios({
      url: url,
      method: 'post',
      headers: {
        'x-api-key': key
      },
      data: {
        query: print(getPrettyPet),
        variables: {
          id: petId
        }
      }
    })
    return petData.data.data.getPrettyPet.userPetsId
  } catch (err) {
    console.log('error updating pet: ', err);
  }
}

async function applyPayout(userId, payout) {
  let id = '';
  let currentStardust = DEFAULT_STARDUST
  let currentRainbowDye = 0

  // Get user
  try {
    const graphqlData = await axios({
      url: url,
      method: 'post',
      headers: {
        'x-api-key': key
      },
      data: {
        query: print(getUser),
        variables: {id: userId}
      }
    });
    const userData = graphqlData.data.data.getUser
    if (userData) {
      currentStardust = userData.starDust
      id = userData.id
      currentRainbowDye = userData.rainbowDye
    }
    console.log('following user is completing job:', userData)
  } catch (e) {
    console.log('error getting money', e);
  }
  // Add payout
  try {
    const input = {
      id,
      starDust: {
        uglyStarDust: currentStardust.uglyStarDust + payout.uglyStarDust,
        poorStarDust: currentStardust.poorStarDust + payout.poorStarDust,
        fineStarDust: currentStardust.fineStarDust + payout.fineStarDust,
        cuteStarDust: currentStardust.cuteStarDust + payout.cuteStarDust,
        prettyStarDust: currentStardust.prettyStarDust + payout.prettyStarDust
      },
      rainbowDye: currentRainbowDye + payout.rainbowDye
    }

    await axios({
      url: url,
      method: 'post',
      headers: {
        'x-api-key': key
      },
      data: {
        query: print(updateUser),
        variables: {input}
      }
    });
  } catch (e) {
    console.log('error adding stardust/rainbow dye', e);
  }
}

async function calculatePayout(pets) {
  let payout = {...DEFAULT_STARDUST, rainbowDye: 0}
  for (const pet of pets) {
    const stats = pet.stats
    const statTotal = stats.cool + stats.cute + stats.confidence + stats.control

    // Rainbow dye payout
    payout = {...payout, rainbowDye: payout.rainbowDye + RAINBOW_DYE_PAYOUT[pet.star - 1]}

    // Stardust payout
    switch (pet.star) {
      case 1:
        payout = {...payout, uglyStarDust: payout.uglyStarDust + statTotal}
        break
      case 2:
        payout = {...payout, poorStarDust: payout.poorStarDust + statTotal}
        break
      case 3:
        payout = {...payout, fineStarDust: payout.fineStarDust + statTotal}
        break
      case 4:
        payout = {...payout, cuteStarDust: payout.cuteStarDust + statTotal}
        break
      case 5:
        payout = {...payout, prettyStarDust: payout.prettyStarDust + statTotal}
        break
      default:
        break
    }
  }
  return payout
}

exports.handler = async (event) => {
  try {
    // Get user id
    const userId = await getUserId(event.arguments.petIds[0])

    // Update pets to have no owner
    const pets = await updatePetOwner(event.arguments.petIds)
    console.log(pets)

    const payout = await calculatePayout(pets)
    console.log(payout)

    // Give payout
    await applyPayout(userId, payout)

    return pets
  } catch (e) {
    console.log('error abandoning pet: ', e);
  }
};
