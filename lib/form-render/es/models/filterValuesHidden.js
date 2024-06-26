"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = require("../utils");
var transformHidden = function transformHidden(str) {
  var formData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var parentData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  if (typeof str !== 'string') {
    return !!str;
  }
  var funcBody = str.replace(/^{\s*{/g, '').replace(/}\s*}$/g, '').trim();
  var funcStr = "\n    return ".concat(funcBody.replace(/formData/g, JSON.stringify(formData)).replace(/rootValue/g, JSON.stringify(parentData)), "\n  ");
  try {
    var result = Function(funcStr)();
    return result;
  } catch (error) {
    return false;
  }
};
/**
 * 过滤 field.schema.hidden = true，的值
 */
var _default = exports.default = function _default(_values, flattenSchema) {
  var recursiveArray = function recursiveArray(list, _path) {
    return list.map(function (item) {
      if ((0, _utils.isObject)(item)) {
        return recursiveObj(item, _path, item);
      }
      return item;
    });
  };
  var recursiveObj = function recursiveObj(obj, prePath, parentData) {
    var _a, _b;
    for (var _i = 0, _Object$keys = Object.keys(obj); _i < _Object$keys.length; _i++) {
      var key = _Object$keys[_i];
      var item = obj[key];
      var path = prePath ? "".concat(prePath, ".").concat(key) : key;
      var schema = (_a = flattenSchema[path]) === null || _a === void 0 ? void 0 : _a.schema;
      if ((0, _utils.isArray)(item) && !schema) {
        path = prePath ? "".concat(prePath, ".").concat(key, "[]") : "".concat(key, "[]");
        schema = (_b = flattenSchema[path]) === null || _b === void 0 ? void 0 : _b.schema;
      }
      // 剔除隐藏数据
      if (schema === null || schema === void 0 ? void 0 : schema.hidden) {
        var hidden = transformHidden(schema.hidden, _values, parentData);
        if (hidden) {
          obj[key] = undefined;
          continue;
        }
      }
      if ((0, _utils.isObject)(item)) {
        obj[key] = recursiveObj(item, path, parentData);
        continue;
      }
      if ((0, _utils.isArray)(item) && (schema === null || schema === void 0 ? void 0 : schema.items)) {
        obj[key] = recursiveArray(item, path) || [];
        continue;
      }
      obj[key] = item;
    }
    return obj;
  };
  return recursiveObj(_values) || {};
};