const router = require("express").Router();

const responses = require("../models/responseModel.js");


// get all responses
router.get('/', (req, res) => {
    console.log("GET responses")
    responses
    .getResponses()
    .then(responses => {
        res.status(200).json(responses);
    })
    .catch(err => {
        res.status(500).json({ message: 'error retrieving responses'});
    });
})

module.exports = router;