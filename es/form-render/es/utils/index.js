import { isMatch, some, set, get, cloneDeep, has, merge, mergeWith, isUndefined, omitBy } from 'lodash-es';
export var _set = set;
export var _get = get;
export var _cloneDeep = cloneDeep;
export var _has = has;
export var _merge = merge;
export var _mergeWith = mergeWith;
export var _isUndefined = isUndefined;
export var _omitBy = omitBy;
export var _some = some;
export var _isMatch = isMatch;
export var isObject = function isObject(data) {
  var str = Object.prototype.toString.call(data);
  return str.indexOf('Object') > -1;
};
export var isArray = function isArray(data) {
  var str = Object.prototype.toString.call(data);
  return str.indexOf('Array') > -1;
};
export var isFunction = function isFunction(data) {
  return typeof data === 'function';
};
export function isUrl(string) {
  var protocolRE = /^(?:\w+:)?\/\/(\S+)$/;
  // const domainRE = /^[^\s\.]+\.\S{2,}$/;
  if (typeof string !== 'string') return false;
  return protocolRE.test(string);
}
export var isNumber = function isNumber(str) {
  return !isNaN(Number(str));
};
export var getArray = function getArray(arr) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (Array.isArray(arr)) return arr;
  return defaultValue;
};
export function getFormat(format) {
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
export function isObjType(schema) {
  //return schema?.type === 'object' && schema.properties && !schema.widget;
  return (schema === null || schema === void 0 ? void 0 : schema.type) === 'object' && (schema === null || schema === void 0 ? void 0 : schema.properties) && (schema === null || schema === void 0 ? void 0 : schema.widgetType) !== 'field';
}
;
export function isListType(schema) {
  return (schema === null || schema === void 0 ? void 0 : schema.type) === 'array' && isObjType(schema === null || schema === void 0 ? void 0 : schema.items) && (schema === null || schema === void 0 ? void 0 : schema.enum) === undefined;
}
;
export function isCheckBoxType(schema, readOnly) {
  if (readOnly) return false;
  if (schema.widget === 'checkbox') return true;
  if (schema && schema.type === 'boolean') {
    if (schema.enum) return false;
    if (schema.widget === undefined) return true;
    return false;
  }
}
export var translation = function translation(configCtx) {
  return function (key) {
    var locale = configCtx === null || configCtx === void 0 ? void 0 : configCtx.locale.FormRender;
    return locale[key];
  };
};
export var hasFuncProperty = function hasFuncProperty(obj) {
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