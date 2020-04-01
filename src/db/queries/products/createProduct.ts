/* eslint-disable @typescript-eslint/camelcase */

import knex from 'knex';
import { v4 } from 'uuid';

import { Tables } from '../../tables';
import { IProduct } from '.';

export type CreateProductData = Pick<IProduct, 'name' | 'description' | 'price'>;

export const createProduct = async (db: knex, data: CreateProductData): Promise<IProduct> => {
  const result = await db<IProduct>(Tables.PRODUCTS)
    .insert({
      id: v4(),
      createdAt: new Date(),
      updatedAt: new Date(),
      ...data,
    })
    .returning('*');

  return result[0];
};
