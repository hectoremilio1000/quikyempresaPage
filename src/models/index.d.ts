import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ContactoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Contacto {
  readonly id: string;
  readonly nombre?: string | null;
  readonly email?: string | null;
  readonly whatsapp?: string | null;
  readonly mensaje?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Contacto, ContactoMetaData>);
  static copyOf(source: Contacto, mutator: (draft: MutableModel<Contacto, ContactoMetaData>) => MutableModel<Contacto, ContactoMetaData> | void): Contacto;
}