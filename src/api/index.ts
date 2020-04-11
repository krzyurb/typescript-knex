import { Router } from 'express';
import Knex from 'knex';

import { buildProductsRouter } from './products';
import { buildCustomersRouter } from './customers';

export const buildApi = (db: Knex): Router =>
  Router()
    .use('/products', buildProductsRouter(db))
    .use('/customers', buildCustomersRouter(db));
