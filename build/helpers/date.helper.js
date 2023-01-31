"use strict";

var moment = require('../config/moment');
module.exports = {
  strToDate: function strToDate(str) {
    return moment(str).isValid() ? moment(str) : null;
  },
  getNow: function getNow() {
    return moment().now();
  }
};