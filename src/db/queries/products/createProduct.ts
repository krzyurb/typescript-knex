import { curry, pipe, andThen, head } from 'ramda';
import { v4 } from 'uuid';
import knex from 'knex';

import { Tables } from '../../tables';
import { IProduct } from '.';

export type CreateProductData = Pick<
  IProduct,
  'name' | 'description' | 'price'
>;

const prepareInput = (data: CreateProductData): IProduct => ({
  id: v4(),
  createdAt: new Date(),
  updatedAt: new Date(),
  ...data,
});

const storeInDb = (db: knex, data: IProduct): Promise<IProduct[]> =>
  db<IProduct>(Tables.PRODUCTS)
    .insert(data)
    .returning('*');

const curriedStoreInDb = curry(storeInDb);

export const createProduct = async (
  db: knex,
  data: CreateProductData,
): Promise<IProduct | undefined> =>
  pipe(prepareInput, curriedStoreInDb(db), andThen(head))(data);
