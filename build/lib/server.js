"use strict";

var _require = require('../config/server'),
  app = _require.app,
  port = _require.port,
  $config = _require.$config;
app.listen(port, function () {
  console.log("[\u2714] [HTTP] Server: Running\u2026 OK (127.0.0.1:".concat(port, ") [\u2714]"));
});
module.exports = {
  app: app,
  $config: $config
};