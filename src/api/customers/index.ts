import { Router } from 'express';
import Knex from 'knex';

import { getCustomerRoute } from './getCustomer.route';

export const buildCustomersRouter = (db: Knex): Router =>
  Router().get('/:id', getCustomerRoute(db));
