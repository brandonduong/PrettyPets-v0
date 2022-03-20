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
export const getWhy4 = /* GraphQL */ `
  query GetWhy4($id: ID!) {
    getWhy4(id: $id) {
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
      createdAt
      updatedAt
    }
  }
`;
export const listWhy4s = /* GraphQL */ `
  query ListWhy4s(
    $filter: ModelWhy4FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWhy4s(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTodoIAM = /* GraphQL */ `
  query GetTodoIAM($id: ID!) {
    getTodoIAM(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodoIAM = /* GraphQL */ `
  query ListTodoIAM(
    $filter: ModelTodoIAMFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodoIAM(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
