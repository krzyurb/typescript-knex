import { Response, Request } from 'express';
import Knex from 'knex';

import { listProducts } from '../db/queries/products';

export const listProductsRoute = (db: Knex) => async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const result = await listProducts(db);
  return res.send(result).status(200);
};
