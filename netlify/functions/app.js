const express = require('express');
import cors from "cors"
import bodyParser from "body-parser"
const serverless  = require('serverless-http');

const fs = require('fs');

const app = express();
async function ls(){
  try {
    console.log('6666')
  fs.opendir('/opt', async (err,dir)=>{
    console.log('111',err)
    for await (const dirent of dir)
    console.log('opt',dirent.name);
  });
  fs.opendir('/var', async (err,dir)=>{
    console.log('222',err)
    for await (const dirent of dir)
    console.log('var',dirent.name);
  });
  fs.opendir('/etc/opt', async (err,dir)=>{
    console.log('333',err)
    for await (const dirent of dir)
    console.log('etc',dirent.name);
  });

  } catch (err) {
    console.error(err);
  }

}

ls()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
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
