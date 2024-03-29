"use strict";

var express = require('express');
var _require = require('http'),
  createServer = _require.createServer;
require('./env');
var app = express();
var port = process.env.PORT;
var httpServer = createServer(app);
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
var $config = process.env;
module.exports = {
  app: app,
  port: port,
  httpServer: httpServer,
  $config: $config
};