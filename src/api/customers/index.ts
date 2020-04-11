import { Router } from 'express';
import Knex from 'knex';

import { getCustomerRoute } from './getCustomer.route';
import { createCustomerRoute } from './createCustomer.route';

export const buildCustomersRouter = (db: Knex): Router =>
  Router()
    .get('/:id', getCustomerRoute(db))
    .post('/', createCustomerRoute(db));
