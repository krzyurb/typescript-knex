import Knex, { SchemaBuilder } from 'knex';
import { Tables } from '../tables';

export const up = (knex: Knex): Promise<SchemaBuilder | void> =>
  knex.schema
    .createTable(Tables.ORDERS, t => {
      t.uuid('id').primary();
      t.uuid('customer_id')
        .references('id')
        .inTable('customers')
        .notNullable();
      t.timestamps();
    })
    .createTable(Tables.PRODUCT_ORDERS, t => {
      t.uuid('id').primary();
      t.uuid('product_id')
        .references('id')
        .inTable('products')
        .notNullable();
      t.uuid('order_id')
        .references('id')
        .inTable('orders')
        .notNullable();
      t.integer('quantity');
      t.timestamps();
    });

export const down = (knex: Knex): SchemaBuilder =>
  knex.schema.dropTable(Tables.PRODUCT_ORDERS).dropTable(Tables.ORDERS);
