import { set, get, cloneDeep, has, merge, isUndefined, omitBy, mergeWith, some } from 'lodash-es';
export var _set = set;
export var _get = get;
export var _cloneDeep = cloneDeep;
export var _has = has;
export var _merge = merge;
export var _isUndefined = isUndefined;
export var _omitBy = omitBy;
export var _mergeWith = mergeWith;
// 首字母转大写
var strToUpperCase = function strToUpperCase(str) {
  if (!str) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};
// 首字母转小写
var strToLowerCase = function strToLowerCase(str) {
  if (!str) {
    return '';
  }
  return str.charAt(0).toLowerCase() + str.slice(1);
};
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
  return (schema === null || schema === void 0 ? void 0 : schema.type) === 'object' && schema.properties;
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
export var valueRemoveUndefined = function valueRemoveUndefined(values, notFilter) {
  var recursionArray = function recursionArray(list) {
    var result = list.map(function (item) {
      if (isObject(item)) {
        return recursionObj(item);
      }
      if (isArray(item)) {
        return recursionArray(item);
      }
      return item;
    });
    // 数组会变成对象，感觉 underfined 不能剔除，会影响顺序
    // result = omitBy(result, isUndefined);
    if (Object.keys(result).length === 0) {
      return undefined;
    }
    return result;
  };
  var recursionObj = function recursionObj(_data) {
    var data = omitBy(_data, isUndefined);
    Object.keys(data).forEach(function (key) {
      var item = data[key];
      if (isObject(item)) {
        data[key] = recursionObj(item);
      }
      if (isArray(item)) {
        var result = recursionArray(item) || [];
        data[key] = notFilter ? result : result.filter(function (item) {
          return item !== undefined;
        });
      }
    });
    data = omitBy(data, isUndefined);
    if (Object.keys(data).length === 0) {
      return undefined;
    }
    return data;
  };
  return recursionObj(values) || {};
};
export var translation = function translation(configCtx) {
  return function (key) {
    var locale = configCtx === null || configCtx === void 0 ? void 0 : configCtx.locale.FormRender;
    return locale[key];
  };
};
export var warn = function warn(str) {
  if (process.env.NODE_ENV === 'development') {
    var _console;
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    (_console = console).error.apply(_console, ['[form-render-mobile]:', str].concat(args));
  }
};
export var getWidget = function getWidget(widgets, widgetName, schema, readOnly) {
  var widget = widgets[strToLowerCase(widgetName)];
  if (!widget) {
    widget = widgets[strToUpperCase(widgetName)];
  }
  if (!widget) {
    widget = widgets['Html'] || widgets['html'];
    if (!readOnly) {
      warn("Can not find widget component named ".concat(widgetName, ", please check the schema and widgets"), schema);
    }
  }
  return widget || null;
};
export var hasFuncProperty = function hasFuncProperty(obj) {
  return some(obj, function (value) {
    if (isFunction(value)) {
      return true;
    }
    if (isObject(value)) {
      return hasFuncProperty(value);
    }
    return false;
  });
};