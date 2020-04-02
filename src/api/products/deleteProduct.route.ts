import { Response, Request } from 'express';
import Knex from 'knex';

import { deleteProduct } from '../../db/queries/products';

export const deleteProductRoute = (db: Knex) => async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const result = await deleteProduct(db, req.params.id);
  console.log(result);

  return res.send(result).status(200);
};
