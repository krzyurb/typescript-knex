import { curry, pipe, andThen, head } from 'ramda';
import { v4 } from 'uuid';
import knex from 'knex';

import { Tables } from '../../tables';
import { IProductOrder } from '.';

export interface ICreateOrderData {
  customerId: string;
  products: Pick<IProductOrder, 'id' | 'quantity'>[];
}

const prepareInput = (data: ICreateOrderData): any => ({
  id: v4(),
  createdAt: new Date(),
  updatedAt: new Date(),
  ...data,
});

const storeInDb = (db: knex, data: any): Promise<any[]> =>
  db<any>(Tables.ORDERS)
    .insert({
      id: v4(),
      createdAt: new Date(),
      updatedAt: new Date(),
      customerId: data.customerId,
    })
    .returning('*');

const curriedStoreInDb = curry(storeInDb);

export const createOrder = async (
  db: knex,
  data: ICreateOrderData,
): Promise<any | undefined> =>
  pipe(prepareInput, curriedStoreInDb(db), andThen(head))(data);
