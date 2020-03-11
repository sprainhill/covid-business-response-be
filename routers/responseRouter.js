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

// get response by id
router.get('/:id', (req, res) => {
    const { id } = req.params;

    responses.getResponseById(id)
    .then(response => {
        if (response) {
            res.status(200).json(response);
        } else {
            res.status(404).json({ message: 'cannot find response with given id'});
        }
    })
    .catch(err => {
        res.status(500).json({message: 'error retrieving response'})
    })


})

// post new response

// edit response

// delete response

module.exports = router;