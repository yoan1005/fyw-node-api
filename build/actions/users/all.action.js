"use strict";

module.exports = {
  name: 'All',
  description: 'Retrieve all users',
  middlewares: false,
  method: 'GET',
  route: 'all',
  fn: function fn(ctx) {
    return function (req, res) {
      return res.send('all');
    };
  }
};