var express = require('express');
var path = require('path');
var router = require('./router');

var app = express();
var static = express.static(path.join(__dirname, 'static'));

app.use(static);
app.use(router);

app.listen(3000);
