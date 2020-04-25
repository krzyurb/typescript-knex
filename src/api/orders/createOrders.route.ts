import { Response, Request } from 'express';
import Knex from 'knex';

import { createOrder } from '../../db/queries/orders';

export const createOrdersRoute = (db: Knex) => async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const created = await createOrder(db, {
    customerId: '3f9877be-d8de-415a-adc4-0e69126b9224',
    products: [
      {
        id: '9b67bf61-cee1-4e0b-bf19-ee2dc4339622',
        quantity: 123,
      },
    ],
  });

  return res.send(created).status(201);
};
