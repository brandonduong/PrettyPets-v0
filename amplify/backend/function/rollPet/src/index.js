/* Amplify Params - DO NOT EDIT
	API_PRETTYPETS_GRAPHQLAPIENDPOINTOUTPUT
	API_PRETTYPETS_GRAPHQLAPIIDOUTPUT
	API_PRETTYPETS_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const axios = require('axios');
const gql = require('graphql-tag');
const graphql = require('graphql');
const fs = require('fs');
const {print} = graphql;
const ntc = require('ntc');

const url = process.env.API_PRETTYPETS_GRAPHQLAPIENDPOINTOUTPUT
const key = process.env.API_PRETTYPETS_GRAPHQLAPIKEYOUTPUT

const MIN_TRAITS = 1;
const MAX_TRAITS = 3;
const STAR_PERCENTS = [35, 25, 25, 10, 5];
const GOOD_TRAITS_PERCENTS = [15, 30, 45, 60, 75];
const STAR_MAX_STATS = [6, 7, 8, 9, 10];
const STAR_MIN_STATS = [0, 1, 2, 3, 4];
const GOOD_STAT_BONUS = 3; // I.e get +3 to a stat if it is guaranteed 'good'
const STAR_GOOD_STAT_GUARANTEE = [0, 0, 0, 1, 2]; // I.e 5 stars have guaranteed 2 'good' roll on a stat
const SHINY_PERCENT = 1;
const ROLL_PRICE = 100;
const NUMBER_OF_VARIANTS = 5;

const createPet = gql`
    mutation CreatePrettyPet(
        $input: CreatePrettyPetInput!
        $condition: ModelPrettyPetConditionInput
    ) {
        createPrettyPet(input: $input, condition: $condition) {
            id
            animal
            nickname
            color
            colorHex
            owner {
                id
                email
                prettyPoints
                createdAt
                updatedAt
                userFashionTeamId
            }
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
            jobPetsId
            fashionTeamPetsId
            prettyPetOriginalOwnerId
        }
    }
`

const getUser = gql`
    query GetUser($id: ID!) {
        getUser(id: $id) {
            id
            email
            prettyPoints
            fashionFame
            createdAt
            updatedAt
            userFashionTeamId
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
            email
            prettyPoints
            createdAt
            updatedAt
        }
    }
`

function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateStar() {
  let rng = getRandomInt(99);
  console.log(rng, STAR_PERCENTS);
  let star = 1;

  let counter = 0;
  let percentage = STAR_PERCENTS[counter];
  while (rng >= percentage) {
    rng -= percentage;
    counter += 1;
    percentage = STAR_PERCENTS[counter];
  }
  star = counter + 1;

  return star;
}

function generateTraits(stars) {
  const goodTraitChance = GOOD_TRAITS_PERCENTS[stars - 1];
  const traits = [[], []];

  let goodTraits = fs.readFileSync('./goodtraits.txt')
  goodTraits = goodTraits.toString().replace(/\r\n/g, '\n').split('\n');
  goodTraits.pop() // Get rid of empty line at end of txt file

  let badTraits = fs.readFileSync('./badtraits.txt')
  badTraits = badTraits.toString().replace(/\r\n/g, '\n').split('\n');
  badTraits.pop() // Get rid of empty line at end of txt file

  for (let i = 0; i < getRandomInt(MAX_TRAITS, MIN_TRAITS); i++) {
    const traitRng = getRandomInt(100);
    console.log(traitRng)
    if (traitRng < goodTraitChance) {
      // Get good trait
      const rng = getRandomInt(goodTraits.length - 1);
      const chosenTrait = goodTraits[rng];

      traits[0].push(chosenTrait);
      goodTraits.splice(goodTraits.indexOf(chosenTrait), 1)
    } else {
      // Get bad trait
      const rng = getRandomInt(badTraits.length - 1);
      const chosenTrait = badTraits[rng];

      traits[1].push(chosenTrait);
      badTraits.splice(badTraits.indexOf(chosenTrait), 1)
    }
  }
  return traits;
}

function generateShiny() {
  return getRandomInt(100) < SHINY_PERCENT;
}

function generateDefaultNickname(shiny, color, animal) {
  if (shiny) {
    return `Shiny ${color} ${animal}`
  } else {
    return `${color} ${animal}`
  }
}

function generateRandomStringFromText(filename) {
  let animals = []
  let animal = ''
  const ani = fs.readFileSync(`./${filename}`)
  animals = ani.toString().replace(/\r\n/g, '\n').split('\n');
  animals.pop(); // Get rid of empty line at end of txt file

  const rng = getRandomInt(animals.length - 1);
  animal = animals[rng];
  return animal;
}

function generateRandomColor() {
  const colorHex = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return [colorHex, ntc.name(colorHex)[1]];
}

function generateVariant() {
  return getRandomInt(NUMBER_OF_VARIANTS);
}

function generateStats(stars) {
  const stats = {
    cool: getRandomInt(STAR_MAX_STATS[stars - 1], STAR_MIN_STATS[stars - 1]),
    cute: getRandomInt(STAR_MAX_STATS[stars - 1], STAR_MIN_STATS[stars - 1]),
    confidence: getRandomInt(STAR_MAX_STATS[stars - 1], STAR_MIN_STATS[stars - 1]),
    control: getRandomInt(STAR_MAX_STATS[stars - 1], STAR_MIN_STATS[stars - 1])
  }

  // Good stat guarantees
  if (stars >= 4) {
    const statsKeys = Object.keys(stats);
    for (let i = 0; i < STAR_GOOD_STAT_GUARANTEE[stars - 1]; i++) {
      const rng = getRandomInt(statsKeys.length - 1)
      stats[statsKeys[rng]] += GOOD_STAT_BONUS
      statsKeys.splice(rng, 1)
    }
  }

  return stats
}

exports.handler = async (event) => {
  if (!event.arguments.userId) {
    return
  }
  const userId = event.arguments.userId;
  let pp = 0;
  let id = '';

  // Check if user has enough money
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
      pp = userData.prettyPoints
      id = userData.id
      console.log(pp)
    }
    console.log('following user is rolling:', userData)
  } catch (e) {
    console.log('error getting money', e);
  }

  if (pp < ROLL_PRICE) {
    console.log('user no money')
    return
  } else {
    // Subtract pp
    try {
      const input = {
        id,
        prettyPoints: pp - ROLL_PRICE
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
      console.log('error subtracting money', e);
    }
  }

  // Create pretty pet in GraphQL API
  console.log(event)
  try {
    const animal = generateRandomStringFromText('animals.txt')
    const color = generateRandomColor()
    const stars = generateStar()
    const shiny = generateShiny()
    const stats = generateStats(stars)
    const variant = generateVariant()

    const petInfo = {
      animal: animal,
      shiny: shiny,
      color: color[1],
      colorHex: color[0],
      nickname: generateDefaultNickname(shiny, color[1], animal),
      traits: generateTraits(stars),
      star: stars,
      stats: stats,
      variant,
      status: 'free',
      userPetsId: id,
      prettyPetOriginalOwnerId: id
    }
    console.log(petInfo)

    const pet = await axios({
      url: url,
      method: 'post',
      headers: {
        'x-api-key': key
      },
      data: {
        query: print(createPet),
        variables: {
          input: petInfo
        }
      }
    })
    console.log(pet.data.errors)
    return pet.data.data.createPrettyPet
  } catch (err) {
    console.log('error creating todo: ', err);
  }
};
