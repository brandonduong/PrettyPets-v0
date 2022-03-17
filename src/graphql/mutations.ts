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
export const createWhy4 = /* GraphQL */ `
  mutation CreateWhy4(
    $input: CreateWhy4Input!
    $condition: ModelWhy4ConditionInput
  ) {
    createWhy4(input: $input, condition: $condition) {
      id
      animal
      nickname
      color
      colorHex
      owner
      shiny
      traits
      star
      createdAt
      updatedAt
    }
  }
`;
export const updateWhy4 = /* GraphQL */ `
  mutation UpdateWhy4(
    $input: UpdateWhy4Input!
    $condition: ModelWhy4ConditionInput
  ) {
    updateWhy4(input: $input, condition: $condition) {
      id
      animal
      nickname
      color
      colorHex
      owner
      shiny
      traits
      star
      createdAt
      updatedAt
    }
  }
`;
export const deleteWhy4 = /* GraphQL */ `
  mutation DeleteWhy4(
    $input: DeleteWhy4Input!
    $condition: ModelWhy4ConditionInput
  ) {
    deleteWhy4(input: $input, condition: $condition) {
      id
      animal
      nickname
      color
      colorHex
      owner
      shiny
      traits
      star
      createdAt
      updatedAt
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createTodoIAM = /* GraphQL */ `
  mutation CreateTodoIAM(
    $input: CreateTodoIAMInput!
    $condition: ModelTodoIAMConditionInput
  ) {
    createTodoIAM(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodoIAM = /* GraphQL */ `
  mutation UpdateTodoIAM(
    $input: UpdateTodoIAMInput!
    $condition: ModelTodoIAMConditionInput
  ) {
    updateTodoIAM(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodoIAM = /* GraphQL */ `
  mutation DeleteTodoIAM(
    $input: DeleteTodoIAMInput!
    $condition: ModelTodoIAMConditionInput
  ) {
    deleteTodoIAM(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
