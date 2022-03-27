/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      prettyPoints
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
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
`;
export const getPrettyPet = /* GraphQL */ `
  query GetPrettyPet($id: ID!) {
    getPrettyPet(id: $id) {
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
      createdAt
      updatedAt
    }
  }
`;
export const listPrettyPets = /* GraphQL */ `
  query ListPrettyPets(
    $filter: ModelPrettyPetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrettyPets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getJob = /* GraphQL */ `
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
`;
export const listJobs = /* GraphQL */ `
  query ListJobs(
    $filter: ModelJobFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
