const { default: knex } = require('knex');

exports.up = function (knex) {
  return knex.schema.createIFNotExists('notification', (tbl) => {
    tbl.increments('id');
    tbl.string('title');
    tbl.string('body');
    tbl.date('created_at').defaultTo(knex.fn.now());
    tbl.string('notification_token_id').unsigned().notNullable();
    tbl
      .foreign('notification_token_id')
      .references('id')
      .inTable('notification_token');
    tbl.enu('status', ['active', 'inactive']).defaultTo('inactive');
  });
};

exports.down = function (knex) {
  knex.schema.dropTableIFExists('notification');
};
