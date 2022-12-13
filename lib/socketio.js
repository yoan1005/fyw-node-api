const { httpServer } = require('../config/server')
const { Server } = require('socket.io')

const io = new Server(httpServer, {
    cors: {
      origin: ['http://localhost:3000', 'http://127.0.0.1:3000']
    },
    pingTimeout: 25000,
    pingInterval: 20000
  })
  console.log(`[✔] SocketIO: Running… OK [✔]`)

io.on("connection", (socket) => {
  // ...
});

module.exports = io
