import { Response, Request } from 'express';
import Knex from 'knex';

import { updateProduct } from '../../db/queries/products';

export const updateProductRoute = (db: Knex) => async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const result = await updateProduct(db, req.params.id, {
    name: 'edited name',
  });

  return res.send(result).status(200);
};
