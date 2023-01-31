"use strict";

var _require = require('../config/database'),
  run = _require.run;
run().then(function () {
  console.log("[\u2714] Database: Running\u2026 OK [\u2714]");
})["catch"](function (err) {
  console.log("[\u2717] Database: Error\u2026  [\u2717]");
  throw new Error("".concat(err));
});