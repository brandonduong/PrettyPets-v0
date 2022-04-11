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

const STAT_PAYOUT_FRACTION = 5

const JobTypes = {
    THERAPY: "Therapy",
    EMOTIONAL: "Emotional Support",
    FISHING: "Fishing",
    FORAGING: "Foraging"
}

const createJob = gql`
    mutation CreateJob(
        $input: CreateJobInput!
        $condition: ModelJobConditionInput
    ) {
        createJob(input: $input, condition: $condition) {
            id
            length
            jobType
            complete
            payout
            createdAt
            updatedAt
            userJobsId
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
            jobPetsId
        }
    }
`

function lengthIsValid(length) {
    return length >= 1 && length <= 24
}

function calculatePayout(length, pets, jobType) {
    let starPayout = 0
    let statPayout = 0
    pets.forEach((pet) => {
        // Calculate money based on star
        if (!(pet.star <= pet.traits[1].length)) {
            starPayout += pet.star - pet.traits[1].length
        } else {
            // Minimum +1 from star
            starPayout += 1
        }

        // Calculate money based on stat
        const statPayoutFactor = (STAT_PAYOUT_FRACTION + pet.traits[1].length)
        switch (jobType) {
            case JobTypes.THERAPY:
                statPayout += pet.stats.cool / statPayoutFactor;
                break;
            case JobTypes.EMOTIONAL:
                statPayout += pet.stats.cute / statPayoutFactor;
                break;
            case JobTypes.FISHING:
                statPayout += pet.stats.control / statPayoutFactor;
                break;
            case JobTypes.FORAGING:
                statPayout += pet.stats.confidence / statPayoutFactor;
                break;
            default:
                break;
        }
    })

    let fullPayout = 0
    for(let i = 1; i <= length; i++) {
        fullPayout += (starPayout + statPayout) * (1/Math.sqrt(i))
    }
    return Math.floor(fullPayout)
}

async function updatePetStatus(petIds, jobType) {
    const pets = []
    for (const petId of petIds) {
        // Update pet's status to working
        try {
            const petInfo = {
                id: petId,
                status: jobType
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

async function updatePetJobId(petIds, jobId) {
    console.log(petIds, jobId)
    for (const petId of petIds) {
        // Update pet's status to working
        try {
            const petInfo = {
                id: petId,
                jobPetsId: jobId
            }

            const updatedPet = await axios({
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
    if (!event.arguments.userId || !lengthIsValid(event.arguments.length)) {
        return
    }
    const pets = await updatePetStatus(event.arguments.petIds, event.arguments.jobType)

    // Create job in GraphQL API
    try {
        const jobInfo = {
            length: event.arguments.length,
            jobType: event.arguments.jobType,
            complete: false,
            userJobsId: event.arguments.userId,
            payout: calculatePayout(event.arguments.length, pets, event.arguments.jobType)
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
        console.log(jobData.data.data.createJob)
        await updatePetJobId(event.arguments.petIds, jobData.data.data.createJob.id)
        return jobData.data.data.createJob
    } catch (err) {
        console.log('error creating job: ', err);
    }
};
