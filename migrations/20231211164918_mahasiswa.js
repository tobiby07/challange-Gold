/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("siswa", (table) => {
    table.increments("id").primary();
    table.string("nama");
    table.string("tempatlahir");
    table.date("tanggallahir");
    table.string("jeniskelamin");
    table.string("alamat");
    table.string("alamatdomisili");
    table.integer("kontakhp");
    table.string("email");
    table.string("namaayah");
    table.string("namaibu");
    table.string("namawali");
    table.integer("kontakhporangtua");
    table.string("asalsekolah");
    table.integer("tahunlulus");
    table.string("jurusan");
    table.string("fakultas");
    table.string("kelas");
    table.integer("nim");
    table.string("pekerjaanorangtua");
    table.string('photo')
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("mahasiswa");
};
