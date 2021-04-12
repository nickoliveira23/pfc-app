
exports.up = function(knex) {
    return knex.schema.createTable('profile', function (table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('gender').notNullable();
        table.string('interest').notNullable();
        table.string('goal').notNullable();
        table.string('biography').notNullable();
        table.string('height').notNullable();
        table.string('job').notNullable();
        table.string('photos').notNullable();
        table.string('main_photo').notNullable();

        table.integer('id_user').references('user.id').notNullable().onDelete('CASCADE');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('profile');
  };
  