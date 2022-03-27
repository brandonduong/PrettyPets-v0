/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const rollPet = /* GraphQL */ `
  mutation RollPet($email: String) {
    rollPet(email: $email) {
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
export const assignJob = /* GraphQL */ `
  mutation AssignJob(
    $email: String
    $petIds: [ID]
    $length: Int
    $jobType: String
  ) {
    assignJob(
      email: $email
      petIds: $petIds
      length: $length
      jobType: $jobType
    ) {
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
export const finishJob = /* GraphQL */ `
  mutation FinishJob($id: ID!) {
    finishJob(id: $id) {
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
export const createUser = /* GraphQL */ `
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
`;
export const updateUser = /* GraphQL */ `
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
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      prettyPoints
      createdAt
      updatedAt
    }
  }
`;
export const createPrettyPet = /* GraphQL */ `
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
export const updatePrettyPet = /* GraphQL */ `
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
      createdAt
      updatedAt
    }
  }
`;
export const deletePrettyPet = /* GraphQL */ `
  mutation DeletePrettyPet(
    $input: DeletePrettyPetInput!
    $condition: ModelPrettyPetConditionInput
  ) {
    deletePrettyPet(input: $input, condition: $condition) {
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
export const createJob = /* GraphQL */ `
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
`;
export const updateJob = /* GraphQL */ `
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
`;
export const deleteJob = /* GraphQL */ `
  mutation DeleteJob(
    $input: DeleteJobInput!
    $condition: ModelJobConditionInput
  ) {
    deleteJob(input: $input, condition: $condition) {
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
