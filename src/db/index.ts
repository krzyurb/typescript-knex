import knex from 'knex';
import Knex from 'knex';

export const buildDb = (): Knex =>
  knex({
    client: 'pg',
    version: '7.2',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: parseInt(process.env.DB_PORT || '5432', 10),
      database: process.env.DB_NAME,
    },
  });
