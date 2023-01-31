"use strict";

module.exports = {
  name: 'Logger',
  description: 'Logger',
  scope: 'error',
  order: 9,
  fn: function fn(ctx) {
    return function (error, req, res, next) {
      console.error('\x1b[31m', '-- Error Handling - Path: ' + req.path + ' --');
      if (error.message) {
        console.error('\x1b[31m', "[".concat(error.statusCode, "] ").concat(error.message));
      }
      console.error('\x1b[31m', '-- --');
      return error.handler(error, req, res, next);
    };
  }
};