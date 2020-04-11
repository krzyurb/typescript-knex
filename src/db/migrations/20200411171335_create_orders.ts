import Knex, { SchemaBuilder } from 'knex';

export const up = (knex: Knex): Promise<SchemaBuilder | void> =>
  knex.schema
    .createTable('orders', t => {
      t.uuid('id').primary();
      t.uuid('customer_id')
        .references('id')
        .inTable('customers')
        .notNullable();
      t.timestamps();
    })
    .createTable('product_orders', t => {
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
  knex.schema.dropTable('product_orders').dropTable('orders');
