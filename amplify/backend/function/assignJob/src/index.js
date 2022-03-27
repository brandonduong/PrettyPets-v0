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

const createJob = gql`
    mutation CreateJob(
        $input: CreateJobInput!
        $condition: ModelJobConditionInput
    ) {
        createJob(input: $input, condition: $condition) {
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

function lengthIsValid(length) {
    return length >= 1 && length <= 24
}

function calculatePayout(length) {
    return length * 100
}

exports.handler = async (event) => {
    if (!event.arguments.email || !lengthIsValid(event.arguments.length)) {
        return
    }

    // Create job in GraphQL API
    try {
        const jobInfo = {
            owner: event.arguments.email,
            pets: event.arguments.petIds,
            length: event.arguments.length,
            jobType: event.arguments.jobType,
            complete: false,
            payout: calculatePayout(event.arguments.length)
        }
        console.log(jobInfo)

        const jobData = await axios({
            url: url,
            method: 'post',
            headers: {
                'x-api-key': key
            },
            data: {
                query: print(createJob),
                variables: {
                    input: jobInfo
                }
            }
        })
        return jobData.data.data.createJob
    } catch (err) {
        console.log('error creating job: ', err);
    }
};
