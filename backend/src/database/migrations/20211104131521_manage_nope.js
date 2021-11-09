
exports.up = function(knex) {
    return knex.schema.createTable('nope', function (table) {
        table.increments('id').primary();

        table.integer('logged').references('profile.id').notNullable().onDelete('CASCADE');
        table.integer('target').references('profile.id').notNullable().onDelete('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('nope');
};
