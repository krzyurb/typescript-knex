import Knex, { SchemaBuilder } from 'knex';
import { Tables } from '../tables';

export const up = (knex: Knex): SchemaBuilder =>
  knex.schema.createTable(Tables.CUSTOMERS, t => {
    t.uuid('id').primary();
    t.string('first_name', 100);
    t.string('last_name', 100);
    t.string('email', 100);
    t.timestamps();
  });

export const down = (knex: Knex): SchemaBuilder =>
  knex.schema.dropTable(Tables.CUSTOMERS);
