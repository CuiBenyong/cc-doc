const express = require('express');
const app = express();
const serverless  = require('serverless-http');

const path = require('path');
const port = 3000;

// Umi static files (including SSG pages)
app.use(express.static(path.join(__dirname, '/../../dist')));
app.use(express.static(path.join(__dirname, '/../../server')));

// Logger middleware
app.use(async (req, res, next) => {
  console.info(`${req.method} ${req.url}`);
  next();
});

// Umi SSR middleware
app.use(require(__dirname + '/../../server/umi.server').default);





// Start server
// app.listen(port, () => {
//   console.log(`Server is now running at http://127.0.0.1:${port}/`);
// });
module.exports.handler = serverless(app);