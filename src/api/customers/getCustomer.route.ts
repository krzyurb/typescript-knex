import { Response, Request } from 'express';
import Knex from 'knex';

import { getCustomerById } from '../../db/queries/customers';

export const getCustomerRoute = (db: Knex) => async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const result = await getCustomerById(db, req.params.id);
  return res.send(result).status(200);
};
