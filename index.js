const http = require('http');
const config = require('./config');
const app = require('./src/app');


const server = http.createServer(app);

server.listen(config.get('port'), () => {
  console.log(`Server is running on port ${config.get('port')}`);
});

module.exports = server;
