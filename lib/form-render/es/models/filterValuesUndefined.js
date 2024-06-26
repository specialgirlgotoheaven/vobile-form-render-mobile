"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lodashEs = require("lodash-es");
var _utils = require("../utils");
var _default = exports.default = function _default(values, notFilter) {
  var recursiveArray = function recursiveArray(list) {
    var result = list.map(function (item) {
      if ((0, _utils.isObject)(item)) {
        return recursiveObj(item, false);
      }
      if ((0, _utils.isArray)(item)) {
        return recursiveArray(item);
      }
      return item;
    });
    if (Object.keys(result).length === 0) {
      return undefined;
    }
    return result;
  };
  var recursiveObj = function recursiveObj(_obj) {
    var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (_obj._isAMomentObject) {
      return _obj;
    }
    var obj = (0, _lodashEs.omitBy)(_obj, _lodashEs.isUndefined);
    Object.keys(obj).forEach(function (key) {
      var item = obj[key];
      if ((0, _utils.isObject)(item)) {
        obj[key] = recursiveObj(item);
      }
      if ((0, _utils.isArray)(item)) {
        var data = recursiveArray(item);
        obj[key] = data;
        if (!notFilter && data) {
          obj[key] = data.filter(function (item) {
            return item !== undefined;
          });
        }
      }
    });
    obj = (0, _lodashEs.omitBy)(obj, _lodashEs.isUndefined);
    if (Object.keys(obj).length === 0 && filter) {
      return undefined;
    }
    return obj;
  };
  return recursiveObj(values) || {};
};