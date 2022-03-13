// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Pet, Todo } = initSchema(schema);

export {
  Pet,
  Todo
};