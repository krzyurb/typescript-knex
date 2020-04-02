export * from './getProductById';
export * from './listProducts';
export * from './createProduct';
export * from './updateProduct';
export * from './deleteProduct';

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}
