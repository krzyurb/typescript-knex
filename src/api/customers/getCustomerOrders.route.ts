import { Response, Request } from 'express';
import Knex from 'knex';

import { getOrdersForCustomer } from '../../db/queries/orders';

export const createGetCustomerOrdersRoute = (db: Knex) => async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const orders = await getOrdersForCustomer(db, req.params.id);
  return res.send(orders).status(201);
};
