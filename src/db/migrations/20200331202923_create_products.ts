import Knex, { SchemaBuilder } from 'knex';
import { Tables } from '../tables';

export const up = (knex: Knex): SchemaBuilder =>
  knex.schema.createTable(Tables.PRODUCTS, t => {
    t.uuid('id').primary();
    t.string('name', 100);
    t.text('description');
    t.integer('price');
    t.timestamps();
  });

export const down = (knex: Knex): SchemaBuilder =>
  knex.schema.dropTable(Tables.PRODUCTS);
