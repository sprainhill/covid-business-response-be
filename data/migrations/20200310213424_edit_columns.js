
exports.up = function(knex) {
    return knex.schema.table('responses', tbl => {

        tbl
        .boolean('announced_plan').defaultTo(null);
        tbl
        .boolean('partial_remote_policy').defaultTo(null);
        tbl
        .boolean('full_remote_policy').defaultTo(null);
        tbl
        .boolean('restrict_employee_travel_partial').defaultTo(null);
        tbl
        .boolean('restrict_employee_travel_full').defaultTo(null);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('responses')
};
