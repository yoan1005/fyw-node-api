"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Validator = require('validator');
var validate = function validate(request, rules) {
  var messages = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var errors = {
    hasError: false,
    errors: [],
    messages: []
  };
  for (var _i = 0, _Object$entries = Object.entries(rules); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      key = _Object$entries$_i[0],
      rulesSpe = _Object$entries$_i[1];
    errors['errors'][key] = {};
    if (Object.hasOwnProperty.call(request, key)) {
      for (var _i2 = 0, _Object$entries2 = Object.entries(rulesSpe); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
          keyRule = _Object$entries2$_i[0],
          value = _Object$entries2$_i[1];
        if (keyRule !== 'required') {
          var check = Validator[keyRule](request[key], value);
          errors['errors'][key][keyRule] = check;
          if (!check) {
            var _messages$key, _messages$key2;
            errors.hasError = true;
            if (messages !== null && messages !== void 0 && (_messages$key = messages[key]) !== null && _messages$key !== void 0 && _messages$key[keyRule]) errors.messages.push(messages === null || messages === void 0 ? void 0 : (_messages$key2 = messages[key]) === null || _messages$key2 === void 0 ? void 0 : _messages$key2[keyRule]);
          }
        }
      }
    } else {
      // check if required rule && not present in request
      if (Object.keys(rulesSpe).includes('required') && rulesSpe.required) {
        errors.hasError = true;
        errors['errors'][key]['required'] = false;
      }
    }
  }
  return errors;
};
module.exports = {
  validate: validate
};