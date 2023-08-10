const express = require('express');
const path = require('path');
const router = require('./routes');


const app = express();

app.use('/public', express.static('public'));
app.set('view engine', 'ejs');

app.use('/', router);
app.listen(3000);