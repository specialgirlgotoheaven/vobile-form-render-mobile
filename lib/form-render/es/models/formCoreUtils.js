"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.immediateWatch = exports.getSessionItem = exports.getSchemaFullPath = void 0;
exports.msToTime = msToTime;
exports.valuesWatch = exports.transformFieldsData = exports.setSessionItem = void 0;
exports.yymmdd = yymmdd;
var _utils = require("../utils");
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
var executeCallBack = function executeCallBack(watchItem, value, path, index) {
  if ((0, _utils.isFunction)(watchItem)) {
    try {
      watchItem(value, index);
    } catch (error) {
      console.log("".concat(path, "\u5BF9\u5E94\u7684watch\u51FD\u6570\u6267\u884C\u62A5\u9519\uFF1A"), error);
    }
  }
  if ((0, _utils.isFunction)(watchItem === null || watchItem === void 0 ? void 0 : watchItem.handler)) {
    try {
      watchItem.handler(value, index);
    } catch (error) {
      console.log("".concat(path, "\u5BF9\u5E94\u7684watch\u51FD\u6570\u6267\u884C\u62A5\u9519\uFF1A"), error);
    }
  }
};
var traverseValues = function traverseValues(_ref) {
  var changedValues = _ref.changedValues,
    allValues = _ref.allValues,
    flatValues = _ref.flatValues;
  var traverseArray = function traverseArray(list, fullList, path, index) {
    if (!list.length) {
      return;
    }
    var _path = path += '[]';
    var filterLength = list.filter(function (item) {
      return item || item === undefined;
    }).length;
    var flag = filterLength !== fullList.length || list.length === 1;
    var isRemove = false;
    if (filterLength > 1 && filterLength < fullList.length) {
      flag = false;
      isRemove = true;
    }
    list.forEach(function (item, idx) {
      if (!isRemove) {
        flatValues[_path] = {
          value: fullList[idx],
          index: index
        };
      }
      if ((0, _utils.isObject)(item)) {
        traverseObj(item, fullList[idx], _path, [].concat(_toConsumableArray(index), [idx]), !flag);
      }
      if ((0, _utils.isArray)(item)) {
        traverseArray(item, fullList[idx], _path, [].concat(_toConsumableArray(index), [idx]));
      }
    });
  };
  var traverseObj = function traverseObj(obj, fullObj, path, index, flag) {
    Object.keys(obj).forEach(function (key) {
      var item = obj[key];
      var fullItem = fullObj === null || fullObj === void 0 ? void 0 : fullObj[key];
      var value = item;
      var _path = path ? path + '.' + key : key;
      var last = true;
      if ((0, _utils.isArray)(item)) {
        value = fullItem ? _toConsumableArray(fullItem) : fullItem;
        last = false;
        traverseArray(item, fullItem, _path, index);
      }
      if ((0, _utils.isObject)(item)) {
        last = false;
        traverseObj(item, fullItem, _path, index, flag);
      }
      if (!last || !flag) {
        flatValues[_path] = {
          value: value,
          index: index
        };
      }
    });
  };
  traverseObj(changedValues, allValues, null, []);
};
var valuesWatch = exports.valuesWatch = function valuesWatch(changedValues, allValues, watch) {
  var _a;
  if (((_a = Object.keys(watch || {})) === null || _a === void 0 ? void 0 : _a.length) === 0) {
    return;
  }
  var flatValues = {
    '#': {
      value: allValues,
      index: changedValues
    }
  };
  traverseValues({
    changedValues: changedValues,
    allValues: allValues,
    flatValues: flatValues
  });
  Object.keys(watch).forEach(function (path) {
    if (!(0, _utils._has)(flatValues, path)) {
      return;
    }
    var _get2 = (0, _utils._get)(flatValues, path),
      value = _get2.value,
      index = _get2.index;
    var item = watch[path];
    executeCallBack(item, value, path, index);
  });
};
var transformFieldsData = exports.transformFieldsData = function transformFieldsData(_fieldsError, getFieldName) {
  var fieldsError = _fieldsError;
  if ((0, _utils.isObject)(fieldsError)) {
    fieldsError = [fieldsError];
  }
  if (!((0, _utils.isArray)(fieldsError) && fieldsError.length > 0)) {
    return;
  }
  return fieldsError.map(function (field) {
    return Object.assign(Object.assign({
      errors: field.error
    }, field), {
      name: getFieldName(field.name)
    });
  });
};
var immediateWatch = exports.immediateWatch = function immediateWatch(watch, values) {
  var _a;
  if (((_a = Object.keys(watch || {})) === null || _a === void 0 ? void 0 : _a.length) === 0) {
    return;
  }
  var watchObj = {};
  Object.keys(watch).forEach(function (key) {
    var watchItem = watch[key];
    if ((watchItem === null || watchItem === void 0 ? void 0 : watchItem.immediate) && (0, _utils.isFunction)(watchItem === null || watchItem === void 0 ? void 0 : watchItem.handler)) {
      watchObj[key] = watchItem;
    }
  });
  valuesWatch(values, values, watchObj);
};
var getSchemaFullPath = exports.getSchemaFullPath = function getSchemaFullPath(path, schema) {
  if (!path || !path.includes('.')) {
    return 'properties.' + path;
  }
  // 补全 list 类型 path 路径
  while (path.includes('[]')) {
    var index = path.indexOf('[]');
    path = path.substring(0, index) + '.items' + path.substring(index + 2);
  }
  // 补全 object 类型 path 路径
  var result = 'properties';
  var pathList = path.split('.');
  pathList.forEach(function (item, index) {
    var key = result + '.' + item;
    var itemSchema = (0, _utils._get)(schema, key, {});
    if ((0, _utils.isObjType)(itemSchema) && index !== pathList.length - 1) {
      result = key + '.properties';
      return;
    }
    result = key;
  });
  return result;
};
function yymmdd(timeStamp) {
  var date_ob = new Date(Number(timeStamp));
  var adjustZero = function adjustZero(num) {
    return ('0' + num).slice(-2);
  };
  var day = adjustZero(date_ob.getDate());
  var month = adjustZero(date_ob.getMonth());
  var year = date_ob.getFullYear();
  var hours = adjustZero(date_ob.getHours());
  var minutes = adjustZero(date_ob.getMinutes());
  var seconds = adjustZero(date_ob.getSeconds());
  return "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hours, ":").concat(minutes, ":").concat(seconds);
}
function msToTime(duration) {
  var seconds = Math.floor(duration / 1000 % 60);
  var minutes = Math.floor(duration / (1000 * 60) % 60);
  var hours = Math.floor(duration / (1000 * 60 * 60) % 24);
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  return hours + ':' + minutes + ':' + seconds;
}
var getSessionItem = exports.getSessionItem = function getSessionItem(key) {
  return Number(sessionStorage.getItem(key) || 0);
};
var setSessionItem = exports.setSessionItem = function setSessionItem(key, data) {
  sessionStorage.setItem(key, data + '');
};