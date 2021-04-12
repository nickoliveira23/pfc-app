
exports.up = function(knex) {
  return knex.schema.createTable('user', function (table) {
      table.increments('id').primary();
      table.string('email').notNullable();
      table.string('fone').notNullable();
      table.string('birth').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user');
};
