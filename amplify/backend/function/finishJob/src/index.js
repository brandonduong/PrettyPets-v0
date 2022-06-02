/* Amplify Params - DO NOT EDIT
	API_PRETTYPETS_GRAPHQLAPIENDPOINTOUTPUT
	API_PRETTYPETS_GRAPHQLAPIIDOUTPUT
	API_PRETTYPETS_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const axios = require("axios");
const graphql = require('graphql');
const gql = require('graphql-tag');
const {print} = graphql;
const url = process.env.API_PRETTYPETS_GRAPHQLAPIENDPOINTOUTPUT
const key = process.env.API_PRETTYPETS_GRAPHQLAPIKEYOUTPUT

const deleteJob = gql`
    mutation DeleteJob(
        $input: DeleteJobInput!
        $condition: ModelJobConditionInput
    ) {
        deleteJob(input: $input, condition: $condition) {
            id
        }
    }
`

const getJob = gql`
    query GetJob($id: ID!) {
        getJob(id: $id) {
            id
            pets
            owner {
                id
                email
            }
            length
            jobType
            payout
            createdAt
            updatedAt
            userJobsId
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

const updatePrettyPet = gql`
    mutation UpdatePrettyPet(
        $input: UpdatePrettyPetInput!
        $condition: ModelPrettyPetConditionInput
    ) {
        updatePrettyPet(input: $input, condition: $condition) {
            id
            status
        }
    }
`

async function applyPayout(userId, payout) {
  let id = '';
  let pp = 0;

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
      pp = userData.prettyPoints
      id = userData.id
      console.log(pp)
    }
    console.log('following user is completing job:', userData)
  } catch (e) {
    console.log('error getting money', e);
  }
  // Add pp
  try {
    const input = {
      id,
      prettyPoints: pp + payout
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
    console.log('error adding money', e);
  }
}

async function updatePetStatus(pets) {
  console.log(pets)
  for (const id of pets) {
    // Update pet's status to working
    console.log('setting pet to free:', id)
    try {
      const petInfo = {
        id,
        status: 'free',
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

      console.log('set free:', petData.data)
    } catch (err) {
      console.log('error updating pet: ', err);
    }
  }
}

exports.handler = async (event) => {
  // Check job isn't already completed
  let payout = 0
  let userId = ''
  let jobData = {}
  try {
    const graphqlData = await axios({
      url: url,
      method: 'post',
      headers: {
        'x-api-key': key
      },
      data: {
        query: print(getJob),
        variables: {
          id: event.arguments.id,
        }
      }
    })
    console.log('Job info',graphqlData.data.data)
    jobData = graphqlData.data.data.getJob
    payout = jobData.payout
    userId = jobData.owner.id
  } catch (err) {
    console.log('error getting job: ', err);
  }

  // Update job in GraphQL API
  console.log(event)
  try {
    const jobInfo = {
      id: event.arguments.id,
    }

    await axios({
      url: url,
      method: 'post',
      headers: {
        'x-api-key': key
      },
      data: {
        query: print(deleteJob),
        variables: {
          input: jobInfo
        }
      }
    })

    await applyPayout(userId, payout)
    await updatePetStatus(jobData.pets)
    return jobData;
  } catch (err) {
    console.log('error completing job: ', err);
  }
};
