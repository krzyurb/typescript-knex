import { curry, pipe, andThen, head } from 'ramda';
import knex from 'knex';

import { Tables } from '../../tables';
import { IProduct } from '.';

export type UpdateProductData = Partial<
  Pick<IProduct, 'name' | 'description' | 'price'>
>;

const prepareInput = (data: UpdateProductData): Partial<IProduct> => ({
  updatedAt: new Date(),
  ...data,
});

const storeInDb = (
  db: knex,
  id: string,
  data: Partial<IProduct>,
): Promise<IProduct[]> =>
  db<IProduct>(Tables.PRODUCTS)
    .update(data)
    .where({ id })
    .returning('*');

const curriedStoreInDb = curry(storeInDb);

export const updateProduct = async (
  db: knex,
  id: string,
  data: UpdateProductData,
): Promise<IProduct | undefined> =>
  pipe(prepareInput, curriedStoreInDb(db, id), andThen(head))(data);
