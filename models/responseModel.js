const db = require("../data/db-config.js");

module.exports = {
    getResponses
}

function getResponses() {
    return db('responses');
}

function getResponseById() {
    return db('responses').where({ id })
}