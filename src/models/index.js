// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Contacto } = initSchema(schema);

export {
  Contacto
};