/**
 *
 * @param {import ('knex').Knex} knex
 * @returns  {Promise<void>}
 */

exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('user', (tbl) => {
    tbl.string('email');
    tbl.string('username');
    tbl.string('status');
    tbl.increments('id');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users');
};
