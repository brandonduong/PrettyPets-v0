/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Why4 = {
  __typename: "Why4",
  id: string,
  animal: string,
  nickname: string,
  color: string,
  colorHex: string,
  owner: string,
  shiny: boolean,
  traits: Array< Array< string | null > | null >,
  star: number,
  stats?: PetStats | null,
  createdAt: string,
  updatedAt: string,
};

export type PetStats = {
  __typename: "PetStats",
  cool: number,
  cute: number,
  confidence: number,
  control: number,
};

export type CreateUserInput = {
  id?: string | null,
  email: string,
  prettyPoints: number,
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null,
  prettyPoints?: ModelIntInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type User = {
  __typename: "User",
  id: string,
  email: string,
  prettyPoints: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  email?: string | null,
  prettyPoints?: number | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateWhy4Input = {
  id?: string | null,
  animal: string,
  nickname: string,
  color: string,
  colorHex: string,
  owner: string,
  shiny: boolean,
  traits: Array< Array< string | null > | null >,
  star: number,
  stats?: PetStatsInput | null,
};

export type PetStatsInput = {
  cool: number,
  cute: number,
  confidence: number,
  control: number,
};

export type ModelWhy4ConditionInput = {
  animal?: ModelStringInput | null,
  nickname?: ModelStringInput | null,
  color?: ModelStringInput | null,
  colorHex?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  shiny?: ModelBooleanInput | null,
  traits?: ModelStringInput | null,
  star?: ModelIntInput | null,
  and?: Array< ModelWhy4ConditionInput | null > | null,
  or?: Array< ModelWhy4ConditionInput | null > | null,
  not?: ModelWhy4ConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateWhy4Input = {
  id: string,
  animal?: string | null,
  nickname?: string | null,
  color?: string | null,
  colorHex?: string | null,
  owner?: string | null,
  shiny?: boolean | null,
  traits?: Array< Array< string | null > | null > | null,
  star?: number | null,
  stats?: PetStatsInput | null,
};

export type DeleteWhy4Input = {
  id: string,
};

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteTodoInput = {
  id: string,
};

export type CreateTodoIAMInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
};

export type ModelTodoIAMConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoIAMConditionInput | null > | null,
  or?: Array< ModelTodoIAMConditionInput | null > | null,
  not?: ModelTodoIAMConditionInput | null,
};

export type TodoIAM = {
  __typename: "TodoIAM",
  id: string,
  name?: string | null,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTodoIAMInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteTodoIAMInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  prettyPoints?: ModelIntInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User >,
  nextToken?: string | null,
};

export type ModelWhy4FilterInput = {
  id?: ModelIDInput | null,
  animal?: ModelStringInput | null,
  nickname?: ModelStringInput | null,
  color?: ModelStringInput | null,
  colorHex?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  shiny?: ModelBooleanInput | null,
  traits?: ModelStringInput | null,
  star?: ModelIntInput | null,
  and?: Array< ModelWhy4FilterInput | null > | null,
  or?: Array< ModelWhy4FilterInput | null > | null,
  not?: ModelWhy4FilterInput | null,
};

export type ModelWhy4Connection = {
  __typename: "ModelWhy4Connection",
  items:  Array<Why4 >,
  nextToken?: string | null,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo >,
  nextToken?: string | null,
};

export type ModelTodoIAMFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoIAMFilterInput | null > | null,
  or?: Array< ModelTodoIAMFilterInput | null > | null,
  not?: ModelTodoIAMFilterInput | null,
};

export type ModelTodoIAMConnection = {
  __typename: "ModelTodoIAMConnection",
  items:  Array<TodoIAM >,
  nextToken?: string | null,
};

export type RollPetMutationVariables = {
  email?: string | null,
};

export type RollPetMutation = {
  rollPet?:  {
    __typename: "Why4",
    id: string,
    animal: string,
    nickname: string,
    color: string,
    colorHex: string,
    owner: string,
    shiny: boolean,
    traits: Array< Array< string | null > | null >,
    star: number,
    stats?:  {
      __typename: "PetStats",
      cool: number,
      cute: number,
      confidence: number,
      control: number,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    email: string,
    prettyPoints: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    prettyPoints: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    prettyPoints: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateWhy4MutationVariables = {
  input: CreateWhy4Input,
  condition?: ModelWhy4ConditionInput | null,
};

export type CreateWhy4Mutation = {
  createWhy4?:  {
    __typename: "Why4",
    id: string,
    animal: string,
    nickname: string,
    color: string,
    colorHex: string,
    owner: string,
    shiny: boolean,
    traits: Array< Array< string | null > | null >,
    star: number,
    stats?:  {
      __typename: "PetStats",
      cool: number,
      cute: number,
      confidence: number,
      control: number,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateWhy4MutationVariables = {
  input: UpdateWhy4Input,
  condition?: ModelWhy4ConditionInput | null,
};

export type UpdateWhy4Mutation = {
  updateWhy4?:  {
    __typename: "Why4",
    id: string,
    animal: string,
    nickname: string,
    color: string,
    colorHex: string,
    owner: string,
    shiny: boolean,
    traits: Array< Array< string | null > | null >,
    star: number,
    stats?:  {
      __typename: "PetStats",
      cool: number,
      cute: number,
      confidence: number,
      control: number,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteWhy4MutationVariables = {
  input: DeleteWhy4Input,
  condition?: ModelWhy4ConditionInput | null,
};

export type DeleteWhy4Mutation = {
  deleteWhy4?:  {
    __typename: "Why4",
    id: string,
    animal: string,
    nickname: string,
    color: string,
    colorHex: string,
    owner: string,
    shiny: boolean,
    traits: Array< Array< string | null > | null >,
    star: number,
    stats?:  {
      __typename: "PetStats",
      cool: number,
      cute: number,
      confidence: number,
      control: number,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTodoIAMMutationVariables = {
  input: CreateTodoIAMInput,
  condition?: ModelTodoIAMConditionInput | null,
};

export type CreateTodoIAMMutation = {
  createTodoIAM?:  {
    __typename: "TodoIAM",
    id: string,
    name?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoIAMMutationVariables = {
  input: UpdateTodoIAMInput,
  condition?: ModelTodoIAMConditionInput | null,
};

export type UpdateTodoIAMMutation = {
  updateTodoIAM?:  {
    __typename: "TodoIAM",
    id: string,
    name?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoIAMMutationVariables = {
  input: DeleteTodoIAMInput,
  condition?: ModelTodoIAMConditionInput | null,
};

export type DeleteTodoIAMMutation = {
  deleteTodoIAM?:  {
    __typename: "TodoIAM",
    id: string,
    name?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    email: string,
    prettyPoints: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      email: string,
      prettyPoints: number,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetWhy4QueryVariables = {
  id: string,
};

export type GetWhy4Query = {
  getWhy4?:  {
    __typename: "Why4",
    id: string,
    animal: string,
    nickname: string,
    color: string,
    colorHex: string,
    owner: string,
    shiny: boolean,
    traits: Array< Array< string | null > | null >,
    star: number,
    stats?:  {
      __typename: "PetStats",
      cool: number,
      cute: number,
      confidence: number,
      control: number,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListWhy4sQueryVariables = {
  filter?: ModelWhy4FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWhy4sQuery = {
  listWhy4s?:  {
    __typename: "ModelWhy4Connection",
    items:  Array< {
      __typename: "Why4",
      id: string,
      animal: string,
      nickname: string,
      color: string,
      colorHex: string,
      owner: string,
      shiny: boolean,
      traits: Array< Array< string | null > | null >,
      star: number,
      stats?:  {
        __typename: "PetStats",
        cool: number,
        cute: number,
        confidence: number,
        control: number,
      } | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetTodoIAMQueryVariables = {
  id: string,
};

export type GetTodoIAMQuery = {
  getTodoIAM?:  {
    __typename: "TodoIAM",
    id: string,
    name?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodoIAMQueryVariables = {
  filter?: ModelTodoIAMFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodoIAMQuery = {
  listTodoIAM?:  {
    __typename: "ModelTodoIAMConnection",
    items:  Array< {
      __typename: "TodoIAM",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    prettyPoints: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    prettyPoints: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    prettyPoints: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateWhy4Subscription = {
  onCreateWhy4?:  {
    __typename: "Why4",
    id: string,
    animal: string,
    nickname: string,
    color: string,
    colorHex: string,
    owner: string,
    shiny: boolean,
    traits: Array< Array< string | null > | null >,
    star: number,
    stats?:  {
      __typename: "PetStats",
      cool: number,
      cute: number,
      confidence: number,
      control: number,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateWhy4Subscription = {
  onUpdateWhy4?:  {
    __typename: "Why4",
    id: string,
    animal: string,
    nickname: string,
    color: string,
    colorHex: string,
    owner: string,
    shiny: boolean,
    traits: Array< Array< string | null > | null >,
    star: number,
    stats?:  {
      __typename: "PetStats",
      cool: number,
      cute: number,
      confidence: number,
      control: number,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteWhy4Subscription = {
  onDeleteWhy4?:  {
    __typename: "Why4",
    id: string,
    animal: string,
    nickname: string,
    color: string,
    colorHex: string,
    owner: string,
    shiny: boolean,
    traits: Array< Array< string | null > | null >,
    star: number,
    stats?:  {
      __typename: "PetStats",
      cool: number,
      cute: number,
      confidence: number,
      control: number,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTodoIAMSubscription = {
  onCreateTodoIAM?:  {
    __typename: "TodoIAM",
    id: string,
    name?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoIAMSubscription = {
  onUpdateTodoIAM?:  {
    __typename: "TodoIAM",
    id: string,
    name?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoIAMSubscription = {
  onDeleteTodoIAM?:  {
    __typename: "TodoIAM",
    id: string,
    name?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
