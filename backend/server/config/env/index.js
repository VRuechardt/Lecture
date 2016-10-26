/*jslint node: true */
'use strict';

var path = require('path');
var _ = require('lodash');


if(!process.env.NODE_ENV){
    process.env.NODE_ENV = 'development';
}

// All configurations will extend these options
// ============================================
var all = {
    env: process.env.NODE_ENV,

    // Root path of server
    root: path.normalize(__dirname + '/../../..'),

    // Url of the server
    url: 'http://localhost',

    // Server port
    port: process.env.PORT || 80
};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(
    all,
    require('./' + process.env.NODE_ENV + '.js') || {});
