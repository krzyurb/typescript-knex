import knex from 'knex';
import { Tables } from '../../tables';
import { IProduct } from '.';

export const listProducts = (db: knex): Promise<IProduct[]> => db<IProduct>(Tables.PRODUCTS);
