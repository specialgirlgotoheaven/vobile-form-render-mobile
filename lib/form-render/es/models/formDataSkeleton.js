"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDataSkeleton = void 0;
var _index = require("../utils/index");
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
var createDataSkeleton = exports.createDataSkeleton = function createDataSkeleton(schema, formData) {
  var _formData = (0, _index._cloneDeep)(formData);
  var result = _formData;
  if ((0, _index.isObjType)(schema)) {
    if (_formData === undefined || _typeof(_formData) !== 'object') {
      _formData = {};
      result = {};
    }
    Object.keys(schema.properties).forEach(function (key) {
      var childSchema = schema.properties[key];
      var childData = _formData[key];
      var childResult = createDataSkeleton(childSchema, childData);
      result[key] = childResult;
    });
  } else if (_formData !== undefined) {
    // result = _formData;
  } else if (schema.default !== undefined) {
    result = (0, _index._cloneDeep)(schema.default);
  } else if ((0, _index.isListType)(schema)) {
    result = [createDataSkeleton(schema.items)];
  } else if (schema.type === 'boolean' && !schema.widget) {
    // result = false;
    result = undefined;
  } else {
    result = undefined;
  }
  return result;
};