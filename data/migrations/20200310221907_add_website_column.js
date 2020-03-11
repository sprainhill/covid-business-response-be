
exports.up = function(knex) {
    return knex.schema.table('responses', tbl => {

        tbl
        .string('website', 255);

    })
  
};

exports.down = function(knex) {
  
};
