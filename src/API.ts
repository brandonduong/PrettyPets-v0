/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Pet = {
  __typename: "Pet",
  id: string,
  animal: string,
  nickname: string,
  color: string,
  owner: string,
  shiny: boolean,
  traits?: Array< string | null > | null,
  star: number,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  _version?: number | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
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

export type Todo = {
  __typename: "Todo",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  _version?: number | null,
};

export type DeleteTodoInput = {
  id: string,
  _version?: number | null,
};

export type CreatePetInput = {
  id?: string | null,
  animal: string,
  nickname: string,
  color: string,
  owner: string,
  shiny: boolean,
  traits?: Array< string | null > | null,
  star: number,
  _version?: number | null,
};

export type ModelPetConditionInput = {
  animal?: ModelStringInput | null,
  nickname?: ModelStringInput | null,
  color?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  shiny?: ModelBooleanInput | null,
  traits?: ModelStringInput | null,
  star?: ModelIntInput | null,
  and?: Array< ModelPetConditionInput | null > | null,
  or?: Array< ModelPetConditionInput | null > | null,
  not?: ModelPetConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
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

export type UpdatePetInput = {
  id: string,
  animal?: string | null,
  nickname?: string | null,
  color?: string | null,
  owner?: string | null,
  shiny?: boolean | null,
  traits?: Array< string | null > | null,
  star?: number | null,
  _version?: number | null,
};

export type DeletePetInput = {
  id: string,
  _version?: number | null,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
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

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPetFilterInput = {
  id?: ModelIDInput | null,
  animal?: ModelStringInput | null,
  nickname?: ModelStringInput | null,
  color?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  shiny?: ModelBooleanInput | null,
  traits?: ModelStringInput | null,
  star?: ModelIntInput | null,
  and?: Array< ModelPetFilterInput | null > | null,
  or?: Array< ModelPetFilterInput | null > | null,
  not?: ModelPetFilterInput | null,
};

export type ModelPetConnection = {
  __typename: "ModelPetConnection",
  items:  Array<Pet >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type RollPetMutationVariables = {
  email?: string | null,
};

export type RollPetMutation = {
  RollPet?:  {
    __typename: "Pet",
    id: string,
    animal: string,
    nickname: string,
    color: string,
    owner: string,
    shiny: boolean,
    traits?: Array< string | null > | null,
    star: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePetMutationVariables = {
  input: CreatePetInput,
  condition?: ModelPetConditionInput | null,
};

export type CreatePetMutation = {
  createPet?:  {
    __typename: "Pet",
    id: string,
    animal: string,
    nickname: string,
    color: string,
    owner: string,
    shiny: boolean,
    traits?: Array< string | null > | null,
    star: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePetMutationVariables = {
  input: UpdatePetInput,
  condition?: ModelPetConditionInput | null,
};

export type UpdatePetMutation = {
  updatePet?:  {
    __typename: "Pet",
    id: string,
    animal: string,
    nickname: string,
    color: string,
    owner: string,
    shiny: boolean,
    traits?: Array< string | null > | null,
    star: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePetMutationVariables = {
  input: DeletePetInput,
  condition?: ModelPetConditionInput | null,
};

export type DeletePetMutation = {
  deletePet?:  {
    __typename: "Pet",
    id: string,
    animal: string,
    nickname: string,
    color: string,
    owner: string,
    shiny: boolean,
    traits?: Array< string | null > | null,
    star: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTodosQuery = {
  syncTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPetQueryVariables = {
  id: string,
};

export type GetPetQuery = {
  getPet?:  {
    __typename: "Pet",
    id: string,
    animal: string,
    nickname: string,
    color: string,
    owner: string,
    shiny: boolean,
    traits?: Array< string | null > | null,
    star: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPetsQueryVariables = {
  filter?: ModelPetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPetsQuery = {
  listPets?:  {
    __typename: "ModelPetConnection",
    items:  Array< {
      __typename: "Pet",
      id: string,
      animal: string,
      nickname: string,
      color: string,
      owner: string,
      shiny: boolean,
      traits?: Array< string | null > | null,
      star: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPetsQueryVariables = {
  filter?: ModelPetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPetsQuery = {
  syncPets?:  {
    __typename: "ModelPetConnection",
    items:  Array< {
      __typename: "Pet",
      id: string,
      animal: string,
      nickname: string,
      color: string,
      owner: string,
      shiny: boolean,
      traits?: Array< string | null > | null,
      star: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } >,
    nextToken?: string | null,
    startedAt?: number | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePetSubscription = {
  onCreatePet?:  {
    __typename: "Pet",
    id: string,
    animal: string,
    nickname: string,
    color: string,
    owner: string,
    shiny: boolean,
    traits?: Array< string | null > | null,
    star: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePetSubscription = {
  onUpdatePet?:  {
    __typename: "Pet",
    id: string,
    animal: string,
    nickname: string,
    color: string,
    owner: string,
    shiny: boolean,
    traits?: Array< string | null > | null,
    star: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePetSubscription = {
  onDeletePet?:  {
    __typename: "Pet",
    id: string,
    animal: string,
    nickname: string,
    color: string,
    owner: string,
    shiny: boolean,
    traits?: Array< string | null > | null,
    star: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
