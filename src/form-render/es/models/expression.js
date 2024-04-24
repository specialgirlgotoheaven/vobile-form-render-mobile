import { get } from 'lodash-es';
import { isObject, _cloneDeep, isArray } from '../utils/index';
import { createDataSkeleton } from './formDataSkeleton';
export var isExpression = function isExpression(str) {
  if (typeof str !== 'string') {
    return false;
  }
  var pattern = /^\{\s*\{([\s\S]+)\}\s*\}$/;
  var reg1 = /^{\s*{function\(.+}\s*}$/;
  return str.match(pattern) && !str.match(reg1);
};
export var isHasExpression = function isHasExpression(schema) {
  var result = Object.keys(schema).some(function (key) {
    var item = schema[key];
    // 子协议不做递归确认
    if (key === 'properties') {
      return false;
    }
    var recursionArray = function recursionArray(list) {
      var result = list.some(function (ite) {
        if (isArray(ite)) {
          return recursionArray(ite);
        }
        if (isObject(ite)) {
          return isHasExpression(ite);
        }
        return isExpression(ite);
      });
      return result;
    };
    if (isArray(item)) {
      return recursionArray(item);
    }
    if (isObject(item)) {
      return isHasExpression(item);
    }
    return isExpression(item);
  });
  return result;
};
export var parseExpression = function parseExpression(func) {
  var formData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var parentPath = arguments.length > 2 ? arguments[2] : undefined;
  var parentData = get(formData, parentPath) || {};
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
export function getRealDataPath(path) {
  if (typeof path !== 'string') {
    throw Error("id ".concat(path, " is not a string!!! Something wrong here"));
  }
  if (path.match(/[$]void_[^.]+$/)) {
    return undefined;
  }
  return path.replace(/[$]void_[^.]+./g, '');
}
export function getValueByPath(formData, path) {
  if (path === '#' || !path) {
    return formData || {};
  } else if (typeof path === 'string') {
    var realPath = getRealDataPath(path);
    return realPath && get(formData, realPath);
  } else {
    console.error('path has to be a string');
  }
}
export var parseAllExpression = function parseAllExpression(_schema, _formData, dataPath, formSchema) {
  var schema = _cloneDeep(_schema);
  var formData = _formData;
  if (formSchema) {
    formData = createDataSkeleton(formSchema, formData);
  }
  var recursionArray = function recursionArray(list) {
    var result = list.map(function (item) {
      if (isArray(item)) {
        return recursionArray(item);
      }
      if (isObject(item)) {
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
    if (isArray(value)) {
      schema[key] = recursionArray(value);
    }
    if (isObject(value) && ((_a = value.mustacheParse) !== null && _a !== void 0 ? _a : true)) {
      schema[key] = parseAllExpression(value, formData, dataPath);
    } else if (isExpression(value)) {
      schema[key] = parseExpression(value, formData, dataPath);
    }
  });
  return schema;
};