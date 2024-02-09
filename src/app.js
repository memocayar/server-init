const dotenv = require('dotenv');
const Server = require('./server');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const server = new Server();

server.listen();

module.exports = Server;
