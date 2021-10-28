
exports.up = function(knex) {
    return knex.schema.createTable('picture', function (table) {
        table.increments('id').primary();
        table.string('fieldname').notNullable();
        table.string('originalname').notNullable();
        table.string('encoding').notNullable();
        table.string('mimetype').notNullable();
        table.string('destination').notNullable();
        table.string('filename').notNullable();
        table.string('path').notNullable();
        table.integer('size').notNullable();      

        table.integer('id_profile').references('profile.id').notNullable().onDelete('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('picture');
};
