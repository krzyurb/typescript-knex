import Knex, { SchemaBuilder } from 'knex';

export const up = (knex: Knex): SchemaBuilder =>
  knex.schema.createTable('customers', t => {
    t.uuid('id').primary();
    t.string('first_name', 100);
    t.string('last_name', 100);
    t.string('email', 100);
    t.timestamps();
  });

export const down = (knex: Knex): SchemaBuilder =>
  knex.schema.dropTable('customers');
