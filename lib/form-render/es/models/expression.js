"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRealDataPath = getRealDataPath;
exports.getValueByPath = getValueByPath;
exports.parseExpression = exports.parseAllExpression = exports.isHasExpression = exports.isExpression = void 0;
var _lodashEs = require("lodash-es");
var _index = require("../utils/index");
var _formDataSkeleton = require("./formDataSkeleton");
var isExpression = exports.isExpression = function isExpression(str) {
  if (typeof str !== 'string') {
    return false;
  }
  var pattern = /^\{\s*\{([\s\S]+)\}\s*\}$/;
  var reg1 = /^{\s*{function\(.+}\s*}$/;
  return str.match(pattern) && !str.match(reg1);
};
var isHasExpression = exports.isHasExpression = function isHasExpression(schema) {
  var result = Object.keys(schema).some(function (key) {
    var item = schema[key];
    // 子协议不做递归确认
    if (key === 'properties') {
      return false;
    }
    var recursionArray = function recursionArray(list) {
      var result = list.some(function (ite) {
        if ((0, _index.isArray)(ite)) {
          return recursionArray(ite);
        }
        if ((0, _index.isObject)(ite)) {
          return isHasExpression(ite);
        }
        return isExpression(ite);
      });
      return result;
    };
    if ((0, _index.isArray)(item)) {
      return recursionArray(item);
    }
    if ((0, _index.isObject)(item)) {
      return isHasExpression(item);
    }
    return isExpression(item);
  });
  return result;
};
var parseExpression = exports.parseExpression = function parseExpression(func) {
  var formData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var parentPath = arguments.length > 2 ? arguments[2] : undefined;
  var parentData = (0, _lodashEs.get)(formData, parentPath) || {};
  if (typeof func === 'string') {
    var funcBody = func.replace(/^{\s*{/g, '').replace(/}\s*}$/g, '').trim();
    var funcStr = "\n      return ".concat(funcBody.replace(/formData/g, JSON.stringify(formData)).replace(/rootValue/g, JSON.stringify(parentData)), "\n    ");
    try {
      var result = Function(funcStr)();
      return result;
    } catch (error) {
      console.log(error, funcStr, parentPath);
      return null; // 如果计算有错误，return null 最合适
    }
  }
  return func;
};
function getRealDataPath(path) {
  if (typeof path !== 'string') {
    throw Error("id ".concat(path, " is not a string!!! Something wrong here"));
  }
  if (path.match(/[$]void_[^.]+$/)) {
    return undefined;
  }
  return path.replace(/[$]void_[^.]+./g, '');
}
function getValueByPath(formData, path) {
  if (path === '#' || !path) {
    return formData || {};
  } else if (typeof path === 'string') {
    var realPath = getRealDataPath(path);
    return realPath && (0, _lodashEs.get)(formData, realPath);
  } else {
    console.error('path has to be a string');
  }
}
var parseAllExpression = exports.parseAllExpression = function parseAllExpression(_schema, _formData, dataPath, formSchema) {
  var schema = (0, _index._cloneDeep)(_schema);
  var formData = _formData;
  if (formSchema) {
    formData = (0, _formDataSkeleton.createDataSkeleton)(formSchema, formData);
  }
  var recursionArray = function recursionArray(list) {
    var result = list.map(function (item) {
      if ((0, _index.isArray)(item)) {
        return recursionArray(item);
      }
      if ((0, _index.isObject)(item)) {
        return parseAllExpression(item, formData, dataPath);
      }
      if (isExpression(item)) {
        return parseExpression(item, formData, dataPath);
      }
      return item;
    });
    return result;
  };
  Object.keys(schema).forEach(function (key) {
    var _a;
    var value = schema[key];
    if ((0, _index.isArray)(value)) {
      schema[key] = recursionArray(value);
    }
    if ((0, _index.isObject)(value) && ((_a = value.mustacheParse) !== null && _a !== void 0 ? _a : true)) {
      schema[key] = parseAllExpression(value, formData, dataPath);
    } else if (isExpression(value)) {
      schema[key] = parseExpression(value, formData, dataPath);
    }
  });
  return schema;
};