export * from './getCustomerById';
export * from './createCustomer';

export interface ICustomer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}
