const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

module.exports = app;
