import knex from 'knex';
import { knexSnakeCaseMappers } from './knexSnakeCaseMappers';

export const buildDb = (): knex =>
  knex({
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: parseInt(process.env.DB_PORT || '5432', 10),
      database: process.env.DB_NAME,
    },
    searchPath: ['knex', 'public'],
    ...knexSnakeCaseMappers(),
  });
