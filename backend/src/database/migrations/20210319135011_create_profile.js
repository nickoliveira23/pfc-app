
exports.up = function(knex) {
    return knex.schema.createTable('profile', function (table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('whatsapp').notNullable();
        table.integer('age').notNullable();
        table.string('gender').notNullable();
        table.string('city');
        table.string('uf');
        table.string('goal').notNullable();
        table.string('biography');
                
        table.integer('id_user').references('user.id').notNullable().onDelete('CASCADE');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('profile');
  };
  