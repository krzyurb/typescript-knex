export * from './getOrdersForCustomer';
export * from './createOrder';

export interface IOrder {
  id: string;
  customerId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IProductOrder {
  id: string;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}
