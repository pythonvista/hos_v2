'use strict';
const dotenv = require('dotenv');
dotenv.config()
var env = process.env.NODE_ENV || 'development';
// Load server configuration
var config = require(`${__dirname}/env/${env}`);

module.exports = config;
