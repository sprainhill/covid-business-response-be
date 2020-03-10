exports.seed = function(knex) {
    // deletes existing entries
    return knex("responses")
    .then(function() {
        // insert seed entries
        return knex('responses').insert([
            {
                business_name: "Acme Co.",
                date: "12/31/2019",
                response: "a good one, really"
            }
        ])
    })
}