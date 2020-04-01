import knex from 'knex';
import { Tables } from '../../tables';
import { IProduct } from '.';

export const getProductById = (db: knex, id: string): Promise<IProduct | undefined> =>
  db<IProduct>(Tables.PRODUCTS)
    .where({ id })
    .first();
