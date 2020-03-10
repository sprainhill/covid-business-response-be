// require('dotenv').config();
const server = require("./server.js");

const port = process.env.PORT || 5001;
server.listen(port, () => console.log(`\n*** server running on port ${port}***\n`));

