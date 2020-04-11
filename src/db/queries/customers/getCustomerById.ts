import knex from 'knex';

import { Tables } from '../../tables';
import { ICustomer } from '.';

export const getCustomerById = (
  db: knex,
  id: string,
): Promise<ICustomer | undefined> =>
  db<ICustomer>(Tables.CUSTOMERS)
    .where({ id })
    .first();
