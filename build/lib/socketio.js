"use strict";

var _require = require('../config/server'),
  httpServer = _require.httpServer;
var _require2 = require('socket.io'),
  Server = _require2.Server;
require('../config/env');
var wsPort = process.env.WS_PORT || 3001;
var io = new Server(httpServer, {
  cors: {
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000', 'http://127.0.0.1:4000', 'http://localhost:4000']
  },
  pingTimeout: 25000,
  pingInterval: 20000
});
io.listen(wsPort);
console.log("[\u2714] [WebSocket] Server: Running\u2026 OK (127.0.0.1:".concat(wsPort, ") [\u2714]"));
module.exports = io;