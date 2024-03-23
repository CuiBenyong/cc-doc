const express = require('express');
const app = express();
const serverless  = require('serverless-http');

const fs = require('fs');


async function ls(){
  try {
  fs.opendir('./netlify/functions/null', async (err,dir)=>{
    console.log('6666',err)
    for await (const dirent of dir)
    console.log('dddd',dirent.name);
  });

  } catch (err) {
    console.error(err);
  }

}

ls()
// Umi static files (including SSG pages)
app.use(express.static( '/dist'));
app.use(express.static( '/server'));

// Logger middleware
app.use(async (req, res, next) => {
  console.info(`${req.method} ${req.url}`);
  next();
});

// Umi SSR middleware
app.use(require('./server/umi.server').default);


console.log('------dir', __dirname)


// // Start server
// app.listen(80, () => {
//   console.log(`Server is now running at http://127.0.0.1:${port}/`);
// });
// app.listen(443, () => {
//   console.log(`Server is now running at http://127.0.0.1:${port}/`);
// });
module.exports.handler = serverless(app);
