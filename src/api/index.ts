import { Router } from 'express';
import Knex from 'knex';

import { getProductRoute } from './getProduct.route';
import { createProductRoute } from './createProduct.route';
import { listProductsRoute } from './listProducts.route';

export const buildApi = (db: Knex): Router =>
  Router()
    .get('/products', listProductsRoute(db))
    .get('/products/:id', getProductRoute(db))
    .post('/products', createProductRoute(db));
