"use strict";

try {
  var _require = require('./lib/server'),
    app = _require.app,
    $config = _require.$config;
  // init the ctx
  Object.assign(app, {
    ctx: {
      $config: $config
    }
  });
  var db = require('./lib/database');
  // add DB connection in ctx
  Object.assign(app.ctx, {
    db: db
  });
  var helpers = require('./lib/helpers');
  // add helpers in ctx
  Object.assign(app.ctx, {
    helpers: helpers
  });
  var models = require('./lib/models');
  // add models in ctx
  Object.assign(app.ctx, {
    models: models
  });
  var errors = require('./lib/errors');
  // add errors server in ctx
  Object.assign(app.ctx, {
    errors: errors
  });
  var middlewares = require('./lib/middlewares');
  // add middlewares in ctx
  Object.assign(app.ctx, {
    middlewares: middlewares
  });
  var io = require('./lib/socketio');
  // add socketIO server in ctx
  Object.assign(app.ctx, {
    io: io
  });
  var routes = require('./lib/routes');
  var websockets = require('./lib/socketio.actions');
} catch (e) {
  console.error("[\u2717] Error during initialisation\u2026  [\u2717]");
  throw new Error(e);
}