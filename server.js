require('dotenv').config();
const http = require('http');

http.createServer().listen(process.env.port, () => {
  console.log(`Server is listening on ${process.env.port}`);
});
