export * from './getProductById';
export * from './listProducts';
export * from './createProduct';

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}
