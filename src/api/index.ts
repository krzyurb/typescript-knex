import { Router } from 'express';
import { getProductRoute } from './getProduct.route';

export const buildApi = (): Router => Router().get('/products/:id', getProductRoute);
