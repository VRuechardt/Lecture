'use strict';

var express = require('express');
var logger = require('winston');
var cors = require('cors');
var compression = require('compression');
var bodyParser = require('body-parser');
// Setup server
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(compression(function shouldCompress(req, res) {
    if (req.headers['x-no-compression']) {
        return false;
    }
    return compression.filter(req, res);
}));
app.use(cors());

require('./routes')(app);

var server = require('http').createServer(app);

server.listen(80, function() {
    logger.log('info', 'Server listening on port 80');
});
server.on('error', onError);

function onError(error) {
    logger.log('info','Server Error', error);
}

// Expose app
module.exports = app;
