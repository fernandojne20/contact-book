import { IdType } from '../enums/id-type.enum';

export interface Contact {
  idType: IdType;
  identification: string;
  age: number;
  phone: number;
  name: string;
  lastName: string;
  _id?: string;
}
