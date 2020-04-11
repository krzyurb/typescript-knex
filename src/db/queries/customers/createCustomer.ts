import { curry, pipe, andThen, head } from 'ramda';
import { v4 } from 'uuid';
import knex from 'knex';

import { Tables } from '../../tables';
import { ICustomer } from '.';

export type CreateCustomerData = Pick<
  ICustomer,
  'firstName' | 'lastName' | 'email'
>;

const prepareInput = (data: CreateCustomerData): ICustomer => ({
  id: v4(),
  createdAt: new Date(),
  updatedAt: new Date(),
  ...data,
});

const storeInDb = (db: knex, data: ICustomer): Promise<ICustomer[]> =>
  db<ICustomer>(Tables.CUSTOMERS)
    .insert(data)
    .returning('*');

const curriedStoreInDb = curry(storeInDb);

export const createCustomer = async (
  db: knex,
  data: CreateCustomerData,
): Promise<ICustomer | undefined> =>
  pipe(prepareInput, curriedStoreInDb(db), andThen(head))(data);
