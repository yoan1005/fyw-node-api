const fs = require('fs')
const files = fs.readdirSync('./middlewares/')
const middlewares = {}
const tmpMiddlewares = {}
const { app } = require('../config/server')

for (var file of files) {
  const className = file.split('.middleware')
  const mdlw = require('../middlewares/' + file)
  tmpMiddlewares[mdlw.order] = mdlw
}

for (const { name, scope = 'route', order, fn = false } of Object.values(tmpMiddlewares)) {
  if (fn) {
    if (scope === 'app') {
      app.use(fn.call(null, app.ctx))
    }
    middlewares[name] = fn.call(null, app.ctx)
  } else {
    throw new Error('Current middleware failed loaded - no fn (function) found. (' + className[0] + ')')
  }
}

console.log(`[✔] Middlewares: Running… OK (${Object.keys(middlewares).length} loaded) [✔]`)

module.exports = middlewares
