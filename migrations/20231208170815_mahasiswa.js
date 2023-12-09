/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('mahasiswa', (table) => {
    table.increments('id').primary();
    table.string('nim').notNullable();
    table.string('nama').notNullable()
    table.string('kelas').notNullable()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('mahasiswa')
};
