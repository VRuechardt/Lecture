'use strict';

var express = require('express');
var path = require('path');

module.exports = function(app) {

    app.use('/', require('./api'));

    // serve static content
    /*
    app.use('/', express.static(path.normalize(path.join(__dirname, '../../frontend/dest'))));
    app.use('/embed', express.static(path.normalize(path.join(__dirname, '../../frontend/dest/embed.html'))));
    app.use('/favicon.ico', express.static(path.normalize(path.join(__dirname, '../../frontend/dest/img/favicon.ico'))));

    // otherwise serve index file (important for angular HTML5 mode)
    app.all("/*", function(req, res, next) {
        res.sendFile('index.html', {
            root: path.normalize(path.join(__dirname, '../../frontend/dest/'))
        });
    });
    */

};