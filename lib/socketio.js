const { httpServer } = require('../config/server')
const { Server } = require('socket.io')
require('../config/env')

const wsPort = process.env.WS_PORT || 3001
const io = new Server(httpServer, {
  cors: {
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000', 'http://127.0.0.1:4000', 'http://localhost:4000']
  },
  pingTimeout: 25000,
  pingInterval: 20000
})
io.listen(wsPort)

console.log(`[✔] [WebSocket] Server: Running… OK (127.0.0.1:${wsPort}) [✔]`)


module.exports = io
