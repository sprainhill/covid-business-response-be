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
router.post('/', (req, res) => {
    const response = req.body;
    console.log(req.body)
    responses.postResponse(response)
    .then(response => {
        res.status(201).json(response);
    })
    .catch(err => {
        res.status(500).json({message: 'error posting response'})
    })
})

// edit response
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const updatedResponse = req.body;
    console.log(updatedResponse)

    responses.editResponse(id, updatedResponse)
    .then(response => {
        if (response) {
            res.status(200).json(response);
        } else {
            res.status(404).json({message: 'no response with given id exists'})
        }
    })
    .catch(err => {
        res
        .status(500)
        .json({ message: 'error modifying response' });
    })
})

// delete response
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    responses
    .deleteResponse(id)
    .then(response => {
        if (response) {
            res.status(200).json(response);
          } else {
            res
              .status(404)
              .json({ message: 'response with specified ID does not exist' });
          }
    })
    .catch(err => {
        res.status(500).json({message: 'error deleting post' })
    })
})

module.exports = router;