/**
 * Created by Valentin on 26/10/2016.
 */
'use strict';

var express = require('express');
var router  = express.Router();
var controller = require('./api.controller.js');

router.get('/', controller.sendHandshake);

module.exports = router;