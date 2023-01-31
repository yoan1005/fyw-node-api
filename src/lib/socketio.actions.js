(async () => {
  const fs = require('fs')
  const files = fs.readdirSync('./src/websockets/')
  const events = {}
  const { app } = require('../config/server')
  const { findFilesByExtension, listFolders } = require('../helpers/filesAndDirectories.helper')
  const baseDir = './websockets'
  const routes = []
  let i = 0
  const { ctx: { io } } = app

io.on("connection", async (socket) => {
  
  const folders = await listFolders(baseDir)
  for (const folder of folders) {
    const files = await findFilesByExtension(baseDir + '/' + folder, 'ws.js')
    for (const file of files) {
      const { event, name, prefix = false, room = false, fn } = require('../' + baseDir + '/' + folder + '/' + file)
      if (fn) {
        if (prefix) {
          socket.on(`${prefix}:${event}`, async (payload) => {
            if(room) socket.join(`${room}`)
            await fn(app.ctx, socket, payload)
          });  
        } else {
          socket.on(`${event}`, async (payload) => {
            if(room) socket.join(`${room}`)
            await fn(app.ctx, socket, payload)
          });
        }
        i++
      } else {
        throw new Error('Current action WS failed loaded - no fn (function) found. (' + `${prefix}:${name}` + ')')
      }
    }
  }

  console.log(`[✔] Websockets: Running… OK (${i} loaded) [✔]`)
  
});
  
  module.exports = events
  
})()
