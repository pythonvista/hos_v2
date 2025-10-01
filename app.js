"use strict";

var app       = require('./server/api'),
    path = require('path'),
    express  = require('express');

global.__rootdir = __dirname;
global._ = require('lodash');

// app.use('/.well-known', express.static(path.join(__dirname, '.well-known')));

module.exports = app;
