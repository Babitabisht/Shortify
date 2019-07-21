'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

app.get('/', function(req, res) {
  res.send('hello !');
});

const PORT = 3000;
app.listen(PORT, () => {
  // console.log('running on ort 3000');
});
