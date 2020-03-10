exports.seed = function(knex) {
    // deletes existing entries
    return knex("responses")
    .then(function() {
        // insert seed entries
        return knex('responses').insert([
            {
                business_name: "Acme Co.",
                response: "a good one, really"
            }
        ]);
    });
};