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

const url = process.env.API_PRETTYPETS_GRAPHQLAPIENDPOINTOUTPUT
const key = process.env.API_PRETTYPETS_GRAPHQLAPIKEYOUTPUT

const MIN_TRAITS = 1;
const MAX_TRAITS = 3;
const STAR_PERCENTS = [35, 25, 25, 10, 5];
const GOOD_TRAITS_PERCENTS = [15, 30, 45, 60, 75];
const SHINY_PERCENT = 1;

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
            traits
            star
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
  const traits = [];

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

      traits.push(chosenTrait);
      goodTraits.splice(goodTraits.indexOf(chosenTrait), 1)
    } else {
      // Get bad trait
      const rng = getRandomInt(badTraits.length - 1);
      const chosenTrait = badTraits[rng];

      traits.push(chosenTrait);
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

exports.handler = async (event) => {
  console.log(event.arguments)
  // Create pretty pet in GraphQL API
  try {
    const animal = generateRandomStringFromText('animals.txt')
    const color = generateRandomStringFromText('colors.txt')
    const stars = generateStar()
    const shiny = generateShiny()

    const petInfo = {
      animal: animal,
      shiny: shiny,
      color: color,
      owner: event.arguments.email,
      nickname: generateDefaultNickname(shiny, color, animal),
      traits: generateTraits(stars),
      star: stars
    }

    console.log(petInfo)

    await axios({
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
    }).then(() => {
      console.log('created pet')
    });
    return petInfo;
  } catch (err) {
    console.log('error creating todo: ', err);
  }
};
