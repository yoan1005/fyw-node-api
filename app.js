try {

  const { app, $config} = require('./lib/server')
  // init the ctx
  Object.assign(app, { ctx: { $config } })

  const db = require('./lib/database')
  // add DB connection in ctx
  Object.assign(app.ctx, { db })

  const helpers = require('./lib/helpers')
  // add helpers in ctx
  Object.assign(app.ctx, { helpers })

  const models = require('./lib/models')
  // add models in ctx
  Object.assign(app.ctx, { models })

  const errors = require('./lib/errors')
  // add errors server in ctx
  Object.assign(app.ctx, { errors })

  const middlewares = require('./lib/middlewares')
  // add middlewares in ctx
  Object.assign(app.ctx, { middlewares })

  const io = require('./lib/socketio')
  // add socketIO server in ctx
  Object.assign(app.ctx, { io })

  const routes = require('./lib/routes')



} catch (e) {

  console.error(`[✗] Error during initialisation…  [✗]`)
  throw new Error(e)
}
