
exports.up = function(knex) {
    return knex.schema
    .createTable('responses', tbl => {
        tbl.increments();
        tbl
        .string('business_name', 255)
        .nutNullable()
        .unique();
        tbl
        .string('response', 500);
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('responses')
};
