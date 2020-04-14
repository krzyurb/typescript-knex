import { Router } from 'express';
import Knex from 'knex';

import { getCustomerRoute } from './getCustomer.route';
import { createCustomerRoute } from './createCustomer.route';
import { createGetCustomerOrdersRoute } from './getCustomerOrders.route';

export const buildCustomersRouter = (db: Knex): Router =>
  Router()
    .get('/:id', getCustomerRoute(db))
    .post('/', createCustomerRoute(db))
    .get('/:id/orders', createGetCustomerOrdersRoute(db));
