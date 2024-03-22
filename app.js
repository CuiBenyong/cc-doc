const express = require('express');
const app = express();
const fs = require('fs');
const config = require('./server/build-manifest.json');
const assets = config.assets;
const umicss = fs.readFileSync('./dist/umi.css');
const ads = fs.readFileSync('./dist/ads.txt');
const robots = fs.readFileSync('./dist/robots.txt');

const render = require(`./server/umi.server`)
const path = require('path');
const port = 3000;

// Umi static files (including SSG pages)
app.use(express.static(path.join(__dirname, './dist')));
app.use(express.static(path.join(__dirname, './server')));

// Logger middleware
app.use(async (req, res, next) => {
  console.info(`${req.method} ${req.url}`);
  next();
});

// Umi SSR middleware
app.use(require(__dirname + '/server' + assets['umi.js']).default);





// Start server
app.listen(port, () => {
  console.log(`Server is now running at http://127.0.0.1:${port}/`);
});
