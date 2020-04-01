import { Response, Request } from 'express';
import Knex from 'knex';

import { createProduct } from '../db/queries/products';

export const createProductRoute = (db: Knex) => async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const created = await createProduct(db, {
    name: 'Product name',
    description: 'Product description',
    price: 10000,
  });

  return res.send(created).status(201);
};
