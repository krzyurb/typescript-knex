require('ts-node/register');

module.exports = {
  client: 'pg',
  version: '7.2',
  connection: {
    host: 'db',
    user: 'admin',
    password: 'pass',
    port: 5432,
    database: 'ddbb',
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: 'src/db/migrations/',
  },
};
