/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type PrettyPet = {
  __typename: "PrettyPet",
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
  variant: number,
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

export type Job = {
  __typename: "Job",
  id: string,
  pets?: Array< string | null > | null,
  length: number,
  jobType: string,
  owner: string,
  complete?: boolean | null,
  payout?: number | null,
  createdAt: string,
  updatedAt: string,
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

export type CreatePrettyPetInput = {
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
  variant: number,
};

export type PetStatsInput = {
  cool: number,
  cute: number,
  confidence: number,
  control: number,
};

export type ModelPrettyPetConditionInput = {
  animal?: ModelStringInput | null,
  nickname?: ModelStringInput | null,
  color?: ModelStringInput | null,
  colorHex?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  shiny?: ModelBooleanInput | null,
  traits?: ModelStringInput | null,
  star?: ModelIntInput | null,
  variant?: ModelIntInput | null,
  and?: Array< ModelPrettyPetConditionInput | null > | null,
  or?: Array< ModelPrettyPetConditionInput | null > | null,
  not?: ModelPrettyPetConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdatePrettyPetInput = {
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
  variant?: number | null,
};

export type DeletePrettyPetInput = {
  id: string,
};

export type CreateJobInput = {
  id?: string | null,
  pets?: Array< string | null > | null,
  length: number,
  jobType: string,
  owner: string,
  complete?: boolean | null,
  payout?: number | null,
};

export type ModelJobConditionInput = {
  pets?: ModelIDInput | null,
  length?: ModelIntInput | null,
  jobType?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  complete?: ModelBooleanInput | null,
  payout?: ModelIntInput | null,
  and?: Array< ModelJobConditionInput | null > | null,
  or?: Array< ModelJobConditionInput | null > | null,
  not?: ModelJobConditionInput | null,
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

export type UpdateJobInput = {
  id: string,
  pets?: Array< string | null > | null,
  length?: number | null,
  jobType?: string | null,
  owner?: string | null,
  complete?: boolean | null,
  payout?: number | null,
};

export type DeleteJobInput = {
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

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User >,
  nextToken?: string | null,
};

export type ModelPrettyPetFilterInput = {
  id?: ModelIDInput | null,
  animal?: ModelStringInput | null,
  nickname?: ModelStringInput | null,
  color?: ModelStringInput | null,
  colorHex?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  shiny?: ModelBooleanInput | null,
  traits?: ModelStringInput | null,
  star?: ModelIntInput | null,
  variant?: ModelIntInput | null,
  and?: Array< ModelPrettyPetFilterInput | null > | null,
  or?: Array< ModelPrettyPetFilterInput | null > | null,
  not?: ModelPrettyPetFilterInput | null,
};

export type ModelPrettyPetConnection = {
  __typename: "ModelPrettyPetConnection",
  items:  Array<PrettyPet >,
  nextToken?: string | null,
};

export type ModelJobFilterInput = {
  id?: ModelIDInput | null,
  pets?: ModelIDInput | null,
  length?: ModelIntInput | null,
  jobType?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  complete?: ModelBooleanInput | null,
  payout?: ModelIntInput | null,
  and?: Array< ModelJobFilterInput | null > | null,
  or?: Array< ModelJobFilterInput | null > | null,
  not?: ModelJobFilterInput | null,
};

export type ModelJobConnection = {
  __typename: "ModelJobConnection",
  items:  Array<Job >,
  nextToken?: string | null,
};

export type RollPetMutationVariables = {
  email?: string | null,
};

export type RollPetMutation = {
  rollPet?:  {
    __typename: "PrettyPet",
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
    variant: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type AssignJobMutationVariables = {
  email?: string | null,
  petIds?: Array< string | null > | null,
  length?: number | null,
  jobType?: string | null,
};

export type AssignJobMutation = {
  assignJob?:  {
    __typename: "Job",
    id: string,
    pets?: Array< string | null > | null,
    length: number,
    jobType: string,
    owner: string,
    complete?: boolean | null,
    payout?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type FinishJobMutationVariables = {
  id: string,
};

export type FinishJobMutation = {
  finishJob?:  {
    __typename: "Job",
    id: string,
    pets?: Array< string | null > | null,
    length: number,
    jobType: string,
    owner: string,
    complete?: boolean | null,
    payout?: number | null,
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

export type CreatePrettyPetMutationVariables = {
  input: CreatePrettyPetInput,
  condition?: ModelPrettyPetConditionInput | null,
};

export type CreatePrettyPetMutation = {
  createPrettyPet?:  {
    __typename: "PrettyPet",
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
    variant: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePrettyPetMutationVariables = {
  input: UpdatePrettyPetInput,
  condition?: ModelPrettyPetConditionInput | null,
};

export type UpdatePrettyPetMutation = {
  updatePrettyPet?:  {
    __typename: "PrettyPet",
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
    variant: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePrettyPetMutationVariables = {
  input: DeletePrettyPetInput,
  condition?: ModelPrettyPetConditionInput | null,
};

export type DeletePrettyPetMutation = {
  deletePrettyPet?:  {
    __typename: "PrettyPet",
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
    variant: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateJobMutationVariables = {
  input: CreateJobInput,
  condition?: ModelJobConditionInput | null,
};

export type CreateJobMutation = {
  createJob?:  {
    __typename: "Job",
    id: string,
    pets?: Array< string | null > | null,
    length: number,
    jobType: string,
    owner: string,
    complete?: boolean | null,
    payout?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateJobMutationVariables = {
  input: UpdateJobInput,
  condition?: ModelJobConditionInput | null,
};

export type UpdateJobMutation = {
  updateJob?:  {
    __typename: "Job",
    id: string,
    pets?: Array< string | null > | null,
    length: number,
    jobType: string,
    owner: string,
    complete?: boolean | null,
    payout?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteJobMutationVariables = {
  input: DeleteJobInput,
  condition?: ModelJobConditionInput | null,
};

export type DeleteJobMutation = {
  deleteJob?:  {
    __typename: "Job",
    id: string,
    pets?: Array< string | null > | null,
    length: number,
    jobType: string,
    owner: string,
    complete?: boolean | null,
    payout?: number | null,
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

export type GetPrettyPetQueryVariables = {
  id: string,
};

export type GetPrettyPetQuery = {
  getPrettyPet?:  {
    __typename: "PrettyPet",
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
    variant: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPrettyPetsQueryVariables = {
  filter?: ModelPrettyPetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPrettyPetsQuery = {
  listPrettyPets?:  {
    __typename: "ModelPrettyPetConnection",
    items:  Array< {
      __typename: "PrettyPet",
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
      variant: number,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type GetJobQueryVariables = {
  id: string,
};

export type GetJobQuery = {
  getJob?:  {
    __typename: "Job",
    id: string,
    pets?: Array< string | null > | null,
    length: number,
    jobType: string,
    owner: string,
    complete?: boolean | null,
    payout?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListJobsQueryVariables = {
  filter?: ModelJobFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListJobsQuery = {
  listJobs?:  {
    __typename: "ModelJobConnection",
    items:  Array< {
      __typename: "Job",
      id: string,
      pets?: Array< string | null > | null,
      length: number,
      jobType: string,
      owner: string,
      complete?: boolean | null,
      payout?: number | null,
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

export type OnCreatePrettyPetSubscription = {
  onCreatePrettyPet?:  {
    __typename: "PrettyPet",
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
    variant: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePrettyPetSubscription = {
  onUpdatePrettyPet?:  {
    __typename: "PrettyPet",
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
    variant: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePrettyPetSubscription = {
  onDeletePrettyPet?:  {
    __typename: "PrettyPet",
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
    variant: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateJobSubscription = {
  onCreateJob?:  {
    __typename: "Job",
    id: string,
    pets?: Array< string | null > | null,
    length: number,
    jobType: string,
    owner: string,
    complete?: boolean | null,
    payout?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateJobSubscription = {
  onUpdateJob?:  {
    __typename: "Job",
    id: string,
    pets?: Array< string | null > | null,
    length: number,
    jobType: string,
    owner: string,
    complete?: boolean | null,
    payout?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteJobSubscription = {
  onDeleteJob?:  {
    __typename: "Job",
    id: string,
    pets?: Array< string | null > | null,
    length: number,
    jobType: string,
    owner: string,
    complete?: boolean | null,
    payout?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
