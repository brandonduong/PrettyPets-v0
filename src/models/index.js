// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Todo, Pet, SimplePet } = initSchema(schema);

export {
  Todo,
  Pet,
  SimplePet
};