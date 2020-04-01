require('ts-node/register');

module.exports = {
  client: 'pg',
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
