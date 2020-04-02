import { Router } from 'express';
import Knex from 'knex';

import { getProductRoute } from './getProduct.route';
import { createProductRoute } from './createProduct.route';
import { listProductsRoute } from './listProducts.route';
import { updateProductRoute } from './updateProduct.route';
import { deleteProductRoute } from './deleteProduct.route';

export const buildProductsRouter = (db: Knex): Router =>
  Router()
    .get('/', listProductsRoute(db))
    .get('/:id', getProductRoute(db))
    .post('/', createProductRoute(db))
    .delete('/:id', deleteProductRoute(db))
    .patch('/:id', updateProductRoute(db));
