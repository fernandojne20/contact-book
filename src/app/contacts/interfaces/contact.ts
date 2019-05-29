import { IdType } from '../enums/id-type.enum';

export interface Contact {
  idType: IdType;
  identification: string;
  expeditionDate: Date;
  phone: number;
  name: string;
  lastName: string;
}
