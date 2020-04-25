import { Router } from 'express';
import Knex from 'knex';

import { buildProductsRouter } from './products';
import { buildCustomersRouter } from './customers';
import { buildOrdersRouter } from './orders';

export const buildApi = (db: Knex): Router =>
  Router()
    .use('/products', buildProductsRouter(db))
    .use('/customers', buildCustomersRouter(db))
    .use('/orders', buildOrdersRouter(db));
