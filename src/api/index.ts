import { Router } from 'express';
import Knex from 'knex';

import { buildProductsRouter } from './products';

export const buildApi = (db: Knex): Router =>
  Router().use('/products', buildProductsRouter(db));
