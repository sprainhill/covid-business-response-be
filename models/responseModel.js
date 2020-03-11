const db = require("../data/db-config.js");

module.exports = {
    getResponses,
    getResponseById,
    postResponse,
    editResponse,
    deleteResponse
}

// get all responses
function getResponses() {
    return db('responses');
}

// get response by id
function getResponseById() {
    return db('responses').where({ id })
}

// post a new response

function postResponse(response) {
    return db('responses')
    .insert(response, 'id')
    .then(ids => {
        const [id] = ids;
        return getResponseById(id);
    })
}

// edit a response by id
function editResponse(id, response) {
    return db('responses')
    .where({ id })
    .update(response)
    .then(updateId => getResponseById(updateId));
}

// delete a response by id
function deleteResponse(id) {
    return db('responses')
    .where('id', id)
    .del();
}