"use strict";

module.exports = {
  name: 'Find by ID',
  description: 'Retrieve one user',
  middlewares: ['Auth'],
  method: 'GET',
  route: 'find/:id',
  fn: function fn(ctx) {
    return function (req, res) {
      var UnauthorizedError = ctx.errors.UnauthorizedError;
      throw new UnauthorizedError();
      return res.send('find ' + req.params.id);
    };
  }
};