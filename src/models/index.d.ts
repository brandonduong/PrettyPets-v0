import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class SimplePet {
  readonly animal: string;
  readonly nickname: string;
  readonly color: string;
  readonly owner: string;
  readonly shiny: boolean;
  readonly traits: (string | null)[];
  readonly star: number;
  constructor(init: ModelInit<SimplePet>);
}

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PetMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Todo {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Todo, TodoMetaData>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}

export declare class Pet {
  readonly id: string;
  readonly animal: string;
  readonly nickname: string;
  readonly color: string;
  readonly owner: string;
  readonly shiny: boolean;
  readonly traits: (string | null)[];
  readonly star: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Pet, PetMetaData>);
  static copyOf(source: Pet, mutator: (draft: MutableModel<Pet, PetMetaData>) => MutableModel<Pet, PetMetaData> | void): Pet;
}