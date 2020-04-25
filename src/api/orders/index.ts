import { Router } from 'express';
import Knex from 'knex';

import { createOrdersRoute } from './createOrders.route';

export const buildOrdersRouter = (db: Knex): Router =>
  Router().post('/', createOrdersRoute(db));
