const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const responseRouter = require('./routers/responseRouter')

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());


// routes
server.use('/api', responseRouter)

server.get('/', (req, res) => {
    res.status(200).json({server: "running"});
});

module.exports = server;