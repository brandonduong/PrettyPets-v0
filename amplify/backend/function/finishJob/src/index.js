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

const updateJob = gql`
    mutation UpdateJob(
        $input: UpdateJobInput!
        $condition: ModelJobConditionInput
    ) {
        updateJob(input: $input, condition: $condition) {
            id
            pets
            length
            jobType
            owner
            complete
            payout
            createdAt
            updatedAt
        }
    }
`

const getJob = gql`
    query GetJob($id: ID!) {
        getJob(id: $id) {
            id
            pets
            length
            jobType
            owner
            complete
            payout
            createdAt
            updatedAt
        }
    }
`

const listUsers = gql`
    query ListUsers(
        $filter: ModelUserFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                email
                prettyPoints
                createdAt
                updatedAt
            }
            nextToken
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
            animal
            nickname
            color
            colorHex
            owner
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
        }
    }
`

async function applyPayout(email, payout) {
  let id = '';
  let pp = 0;

  // Get user
  try {
    const filter = {
      email: {
        eq: email
      }
    }

    const graphqlData = await axios({
      url: url,
      method: 'post',
      headers: {
        'x-api-key': key
      },
      data: {
        query: print(listUsers),
        variables: {filter: filter}
      }
    });
    console.log('users', graphqlData.data.data.listUsers)
    console.log('email', email)
    const userData = graphqlData.data.data.listUsers.items[0]
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

async function updatePetStatus(petIds) {
  for (const petId of petIds) {
    // Update pet's status to working
    try {
      const petInfo = {
        id: petId,
        status: 'free'
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
    } catch (err) {
      console.log('error updating pet: ', err);
    }
  }
}

exports.handler = async (event) => {
  // Check job isn't already completed
  let payout = 0
  let email = ''
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
    if (jobData.complete) {
      return jobData;
    } else {
      payout = jobData.payout
      email = jobData.owner
    }
  } catch (err) {
    console.log('error getting job: ', err);
  }

  // Update job in GraphQL API
  console.log(event)
  try {
    const jobInfo = {
      id: event.arguments.id,
      complete: true
    }

    await axios({
      url: url,
      method: 'post',
      headers: {
        'x-api-key': key
      },
      data: {
        query: print(updateJob),
        variables: {
          input: jobInfo
        }
      }
    })
  } catch (err) {
    console.log('error completing job: ', err);
  }

  await applyPayout(email, payout)
  await updatePetStatus(jobData.pets)

  return jobData;
};
