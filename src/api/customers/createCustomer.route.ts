import { Response, Request } from 'express';
import Knex from 'knex';

import { createCustomer } from '../../db/queries/customers';

export const createCustomerRoute = (db: Knex) => async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const created = await createCustomer(db, {
    firstName: 'Adam',
    lastName: 'Sandler',
    email: 'a@b.com',
  });

  return res.send(created).status(201);
};
