"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArray = exports._some = exports._set = exports._omitBy = exports._mergeWith = exports._merge = exports._isUndefined = exports._isMatch = exports._has = exports._get = exports._cloneDeep = void 0;
exports.getFormat = getFormat;
exports.isArray = exports.hasFuncProperty = void 0;
exports.isCheckBoxType = isCheckBoxType;
exports.isFunction = void 0;
exports.isListType = isListType;
exports.isNumber = void 0;
exports.isObjType = isObjType;
exports.isObject = void 0;
exports.isUrl = isUrl;
exports.translation = void 0;
var _lodashEs = require("lodash-es");
var _set = exports._set = _lodashEs.set;
var _get = exports._get = _lodashEs.get;
var _cloneDeep = exports._cloneDeep = _lodashEs.cloneDeep;
var _has = exports._has = _lodashEs.has;
var _merge = exports._merge = _lodashEs.merge;
var _mergeWith = exports._mergeWith = _lodashEs.mergeWith;
var _isUndefined = exports._isUndefined = _lodashEs.isUndefined;
var _omitBy = exports._omitBy = _lodashEs.omitBy;
var _some = exports._some = _lodashEs.some;
var _isMatch = exports._isMatch = _lodashEs.isMatch;
var isObject = exports.isObject = function isObject(data) {
  var str = Object.prototype.toString.call(data);
  return str.indexOf('Object') > -1;
};
var isArray = exports.isArray = function isArray(data) {
  var str = Object.prototype.toString.call(data);
  return str.indexOf('Array') > -1;
};
var isFunction = exports.isFunction = function isFunction(data) {
  return typeof data === 'function';
};
function isUrl(string) {
  var protocolRE = /^(?:\w+:)?\/\/(\S+)$/;
  // const domainRE = /^[^\s\.]+\.\S{2,}$/;
  if (typeof string !== 'string') return false;
  return protocolRE.test(string);
}
var isNumber = exports.isNumber = function isNumber(str) {
  return !isNaN(Number(str));
};
var getArray = exports.getArray = function getArray(arr) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (Array.isArray(arr)) return arr;
  return defaultValue;
};
function getFormat(format) {
  var dateFormat;
  switch (format) {
    case 'date':
      dateFormat = 'YYYY-MM-DD';
      break;
    case 'time':
      dateFormat = 'HH:mm:ss';
      break;
    case 'dateTime':
      dateFormat = 'YYYY-MM-DD HH:mm:ss';
      break;
    case 'week':
      dateFormat = 'YYYY-w';
      break;
    case 'year':
      dateFormat = 'YYYY';
      break;
    case 'quarter':
      dateFormat = 'YYYY-Q';
      break;
    case 'month':
      dateFormat = 'YYYY-MM';
      break;
    default:
      // dateTime
      if (typeof format === 'string') {
        dateFormat = format;
      } else {
        dateFormat = 'YYYY-MM-DD';
      }
  }
  return dateFormat;
}
// TODO: to support case that item is not an object
function isObjType(schema) {
  //return schema?.type === 'object' && schema.properties && !schema.widget;
  return (schema === null || schema === void 0 ? void 0 : schema.type) === 'object' && (schema === null || schema === void 0 ? void 0 : schema.properties) && (schema === null || schema === void 0 ? void 0 : schema.widgetType) !== 'field';
}
;
function isListType(schema) {
  return (schema === null || schema === void 0 ? void 0 : schema.type) === 'array' && isObjType(schema === null || schema === void 0 ? void 0 : schema.items) && (schema === null || schema === void 0 ? void 0 : schema.enum) === undefined;
}
;
function isCheckBoxType(schema, readOnly) {
  if (readOnly) return false;
  if (schema.widget === 'checkbox') return true;
  if (schema && schema.type === 'boolean') {
    if (schema.enum) return false;
    if (schema.widget === undefined) return true;
    return false;
  }
}
var translation = exports.translation = function translation(configCtx) {
  return function (key) {
    var locale = configCtx === null || configCtx === void 0 ? void 0 : configCtx.locale.FormRender;
    return locale[key];
  };
};
var hasFuncProperty = exports.hasFuncProperty = function hasFuncProperty(obj) {
  return _some(obj, function (value) {
    if (isFunction(value)) {
      return true;
    }
    if (isObject(value)) {
      return hasFuncProperty(value);
    }
    return false;
  });
};