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
const {print} = graphql;

const url = process.env.API_PRETTYPETS_GRAPHQLAPIENDPOINTOUTPUT
const key = process.env.API_PRETTYPETS_GRAPHQLAPIKEYOUTPUT

const createPet = gql`
    mutation CreatePet(
        $input: CreatePetInput!
        $condition: ModelPetConditionInput
    ) {
        createPet(input: $input, condition: $condition) {
            id
            animal
            nickname
            color
            owner
            shiny
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
        }
    }
`

exports.handler = async (event) => {
  // Create pretty pet in GraphQL API
  try {
    await axios({
      url: url,
      method: 'post',
      headers: {
        'x-api-key': key
      },
      data: {
        query: print(createPet),
        variables: {
          input: {
            animal: 'Penguin',
            shiny: true,
            color: 'Grey',
            owner: event.arguments.email,
            nickname: 'Shiny Grey Penguin',
          }
        }
      }
    });
    return {
      animal: 'Penguin',
      shiny: true,
      color: 'Grey',
      owner: event.arguments.email,
      nickname: 'Shiny Grey Penguin',
      id: 'idk'
    };
  } catch (err) {
    console.log('error creating todo: ', err);
  }
};
