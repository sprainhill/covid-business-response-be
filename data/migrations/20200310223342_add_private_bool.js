
exports.up = function(knex) {
    return knex.schema.table('responses', tbl => {
        tbl
        .boolean('private');
    })
  
};

exports.down = function(knex) {
  
};
