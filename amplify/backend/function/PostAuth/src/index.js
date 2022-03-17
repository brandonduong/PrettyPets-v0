/* Amplify Params - DO NOT EDIT
	API_PRETTYPETS_GRAPHQLAPIENDPOINTOUTPUT
	API_PRETTYPETS_GRAPHQLAPIIDOUTPUT
	API_PRETTYPETS_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const axios = require('axios');
const aws4  = require('aws4')
const graphql = require('graphql');
const {print} = graphql;
const gql = require('graphql-tag');

const url = process.env.API_PRETTYPETS_GRAPHQLAPIENDPOINTOUTPUT
const key = process.env.API_PRETTYPETS_GRAPHQLAPIKEYOUTPUT

const createUser = gql`
    mutation CreateUser(
        $input: CreateUserInput!
        $condition: ModelUserConditionInput
    ) {
        createUser(input: $input, condition: $condition) {
            id
            email
            prettyPoints
            createdAt
            updatedAt
        }
    }
`
exports.handler = async (event, context, callback) => {

    // Send post authentication data to Cloudwatch logs
    console.log("Sign up successful");
    console.log("Event =", event);

    try {
        const userInfo = {
            email: event.userName,
            prettyPoints: 0,
        }

        await axios(aws4.sign({
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
        })).then((err) => {
            console.log(err)
            if (err.data.errors) {
                console.log(err.data.errors)
            }
        });
    } catch (err) {
        console.log('error creating user: ', err);
    }

    // Return to Amazon Cognito
    callback(null, event);
};

