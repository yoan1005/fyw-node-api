(async () => {
  const { findFilesByExtension, listFolders } = require('../helpers/filesAndDirectories.helper')
  const { app } = require('../config/server')
  require('../config/env')
  const apiV1 = process.env.API_VERSION || 'v1'

  let i = 0
  const baseDir = './actions'
  const routes = []

  const folders = await listFolders(baseDir)
  for (const folder of folders) {
    const files = await findFilesByExtension(baseDir + '/' + folder, 'action.js')
    for (const file of files) {
      const { name,
              description,
              middlewares = false,
              method,
              route,
              fn
            } = require('../' + baseDir + '/' + folder + '/' + file)

      // ROUTES :: GET

        if (name && route && fn) {
          i++
          routes.push({ name, description, 'loaded': true })
          if (middlewares) {
            const arrayFnMiddlewares = middlewares.map(x => app.ctx?.middlewares[x])
            if (arrayFnMiddlewares) {
              app[`${method.toLowerCase()}`](`/api/${apiV1}/${folder}/${route}`, arrayFnMiddlewares, fn.call(null, app.ctx))
            } else {
              throw new Error('Middleware ' + middleware + ' not ready or not found for current route. (' + `/api/${apiV1}/${folder}/${route}` + ')')
            }
          } else {
            app[`${method.toLowerCase()}`](`/api/${apiV1}/${folder}/${route}`, fn.call(null, app.ctx))

          }
        } else {
          routes.push({ name, description, 'loaded': false })
          throw new Error('Current Route failed loaded. (' + `/api/${apiV1}/${folder}/${route}` + ')')
        }

    }
  }
  console.log(`[✔] Routes: Running… OK (${i} loaded) [✔]`)
})()
