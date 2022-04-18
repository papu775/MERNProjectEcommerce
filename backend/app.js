const express = require('express');
const app = express();

app.use(express.json());

//Route Imports
const product = require('./router/productRoute');

app.use('/api/v1/',product);

module.exports = app;