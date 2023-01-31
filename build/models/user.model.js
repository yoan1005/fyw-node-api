"use strict";

var _require = require('../config/database'),
  mongoose = _require.mongoose;
var Schema = mongoose.Schema;
var schema = new Schema({
  firstname: String,
  lastname: String,
  email: String
}, {
  timestamps: true
});
module.exports = mongoose.model('User', schema);