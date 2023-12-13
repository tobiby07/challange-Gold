// Update with your config settings.

const connection = {
  client: 'pg',
  connection: {
      host: '127.0.0.1',
      port: '5432',
      database: 'umikom-university',
      user: 'postgres',
      password: '123',
  // },
  // migrations: {
  //   tableName: 'mahasiswa',
  //   directory: './migrations'
  // },
  // seeds: {
  //   directory: './seeds'
  }
}

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: connection,
  staging: connection,
  production: connection,
  connection
};