import { Response, Request } from 'express';
import Knex from 'knex';

import { getProductById } from '../../db/queries/products';

export const getProductRoute = (db: Knex) => async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const result = await getProductById(db, req.params.id);
  return res.send(result).status(200);
};
