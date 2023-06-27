exports.up = function (knex) {
  knex.schema.createTableIFExists('notification_token', (tbl) => {
    tbl.increment('id');
    tbl.string('user_id');
    tbl.foreign('user_id').reference('id').inTable('user');
    tbl.string('device_type');
    tbl.string('notification_token');
    tbl.enu('status', ['active', 'inactive']);
  });
};
