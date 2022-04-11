/* Amplify Params - DO NOT EDIT
	API_PRETTYPETS_GRAPHQLAPIENDPOINTOUTPUT
	API_PRETTYPETS_GRAPHQLAPIIDOUTPUT
	API_PRETTYPETS_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const axios = require('axios');
const graphql = require('graphql');
const {print} = graphql;
const gql = require('graphql-tag');

const url = process.env.API_PRETTYPETS_GRAPHQLAPIENDPOINTOUTPUT
const key = process.env.API_PRETTYPETS_GRAPHQLAPIKEYOUTPUT

const createFashionTeam = gql`
    mutation CreateFashionTeam(
        $input: CreateFashionTeamInput!
        $condition: ModelFashionTeamConditionInput
    ) {
        createFashionTeam(input: $input, condition: $condition) {
            id
            owner {
                id
                email
                prettyPoints
                fashionTeam {
                    id
                    createdAt
                    updatedAt
                    fashionTeamOwnerId
                }
                pets {
                    nextToken
                }
                createdAt
                updatedAt
                userFashionTeamId
            }
            pets {
                items {
                    id
                    animal
                    nickname
                    color
                    colorHex
                    shiny
                    traits
                    star
                    variant
                    status
                    createdAt
                    updatedAt
                    userPetsId
                    jobPetsId
                    fashionTeamPetsId
                }
                nextToken
            }
            createdAt
            updatedAt
            fashionTeamOwnerId
        }
    }
`

const createUser = gql`
    mutation CreateUser(
        $input: CreateUserInput!
        $condition: ModelUserConditionInput
    ) {
        createUser(input: $input, condition: $condition) {
            id
            email
            prettyPoints
            fashionFame
            fashionTeam {
                id
                owner {
                    id
                    email
                    prettyPoints
                    createdAt
                    updatedAt
                    userFashionTeamId
                }
                pets {
                    nextToken
                }
                createdAt
                updatedAt
                fashionTeamOwnerId
            }
            pets {
                items {
                    id
                    animal
                    nickname
                    color
                    colorHex
                    shiny
                    traits
                    star
                    variant
                    status
                    createdAt
                    updatedAt
                    userPetsId
                    jobPetsId
                    fashionTeamPetsId
                }
                nextToken
            }
            createdAt
            updatedAt
            userFashionTeamId
        }
    }
`

const updateUser = gql`mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
) {
    updateUser(input: $input, condition: $condition) {
        id
        email
        prettyPoints
        fashionTeam {
            id
            owner {
                id
                email
                prettyPoints
                createdAt
                updatedAt
                userFashionTeamId
            }
            pets {
                nextToken
            }
            createdAt
            updatedAt
            fashionTeamOwnerId
        }
        pets {
            items {
                id
                animal
                nickname
                color
                colorHex
                shiny
                traits
                star
                variant
                status
                createdAt
                updatedAt
                userPetsId
                jobPetsId
                fashionTeamPetsId
            }
            nextToken
        }
        createdAt
        updatedAt
        userFashionTeamId
    }
}
`
exports.handler = async (event, context, callback) => {

    // Send post authentication data to Cloudwatch logs
    console.log("Sign up successful");
    console.log("Event =", event);

    try {
        const userInfo = {
            id: event.request.userAttributes.sub,
            email: event.userName,
            prettyPoints: 500,
            fashionFame: 100,
        }

        const userData = await axios({
            url: url,
            method: 'post',
            headers: {
                'x-api-key': key
            },
            data: {
                query: print(createUser),
                variables: {
                    input: userInfo
                }
            }
        })
        console.log(userData.data.data.createUser)

        const teamData = await axios({
            url: url,
            method: 'post',
            headers: {
                'x-api-key': key
            },
            data: {
                query: print(createFashionTeam),
                variables: {
                    input: {fashionTeamOwnerId: userData.data.data.createUser.id}
                }
            }
        })

        console.log(teamData.data.data.createFashionTeam)

        const updatedUserData = await axios({
            url: url,
            method: 'post',
            headers: {
                'x-api-key': key
            },
            data: {
                query: print(updateUser),
                variables: {
                    input: {id: userData.data.data.createUser.id, userFashionTeamId: teamData.data.data.createFashionTeam.id}
                }
            }
        })
      console.log(updatedUserData.data.data.updateUser)
    } catch (err) {
        console.log('error creating user: ', err);
    }

    // Return to Amazon Cognito
    callback(null, event);
};

