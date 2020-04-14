import knex from 'knex';

import { Tables, tableColumn } from '../../tables';
import { IOrder } from '.';

export const getOrdersForCustomer = (
  db: knex,
  customerId: string,
): Promise<IOrder[]> =>
  db<IOrder>(Tables.ORDERS)
    .where({ customerId })
    .leftJoin(
      Tables.PRODUCT_ORDERS,
      tableColumn(Tables.ORDERS, 'id'),
      tableColumn(Tables.PRODUCT_ORDERS, 'order_id'),
    );
