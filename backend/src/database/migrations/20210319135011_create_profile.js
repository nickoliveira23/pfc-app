
exports.up = function(knex) {
    return knex.schema.createTable('profile', function (table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.integer('gender').notNullable();
        table.string('city').notNullable();
        table.string('uf').notNullable();
        table.string('goal').notNullable();
        table.string('biography').notNullable();
        
        table.integer('id_user').references('user.id').notNullable().onDelete('CASCADE');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('profile');
  };
  