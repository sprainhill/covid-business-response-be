exports.seed = function(knex) {
    // deletes existing entries
    return knex("responses")
    .then(function() {
        // insert seed entries
        return knex('responses').insert([
            {
                business_name: "Acme Co.",
                announced_plan: true,
                partial_remote_policy: true,
                full_remote_policy: false,
                restrict_employee_travel_partial: true,
                restrict_employee_travel_full: false,
                response: "a good one, really"
            }
        ]);
    });
};