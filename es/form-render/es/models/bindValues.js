function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _toArray(arr) {
  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
import { get, set, unset } from 'lodash-es';
import { _cloneDeep, isArray, isObject } from '../utils/index';
var isMultiBind = function isMultiBind(array) {
  return isArray(array) && array.every(function (item) {
    return typeof item === 'string';
  });
};
// Need to consider list nested controls
var transformPath = function transformPath(path) {
  var result = [];
  var recursion = function recursion(str) {
    var index = str.indexOf('[]');
    if (index === -1) {
      result.push(str);
      return;
    }
    result.push(str.substring(0, index));
    recursion(str.substring(index + 3));
  };
  recursion(path);
  if (result.length === 1) {
    return result[0];
  }
  return result;
};
var transformValueToBind = function transformValueToBind(data, path, bind) {
  if (bind === false) {
    unset(data, path);
    return;
  }
  if (typeof bind === 'string') {
    var value = get(data, path);
    var preValue = get(data, bind);
    if (isObject(preValue)) {
      value = Object.assign(Object.assign({}, preValue), value);
    }
    set(data, bind, value);
    unset(data, path);
    return;
  }
  // The array is converted to multiple fields.
  if (isMultiBind(bind)) {
    var _value = get(data, path);
    unset(data, path);
    if (Array.isArray(_value)) {
      _value.forEach(function (item, index) {
        var bindPath = bind[index];
        bindPath && set(data, bindPath, item);
      });
    }
  }
};
var transformBindToValue = function transformBindToValue(data, path, bind) {
  if (typeof bind === 'string') {
    var value = get(data, bind);
    var preValue = get(data, path);
    if (isObject(preValue)) {
      value = Object.assign(Object.assign({}, preValue), value);
    }
    set(data, path, value);
    unset(data, bind);
    return;
  }
  // The array is converted to multiple fields.
  if (isMultiBind(bind)) {
    var _value2 = [];
    bind.forEach(function (key) {
      var bindValue = get(data, key);
      // if (bindValue != undefined) {
      //   value.push(bindValue);
      // }
      _value2.push(bindValue);
      unset(data, key);
    });
    if (_value2.length > 0) {
      set(data, path, _value2);
    }
  }
};
export var parseValuesToBind = function parseValuesToBind(values, flatten) {
  // No bind field exists, no processing
  if (!JSON.stringify(flatten).includes('bind')) {
    return values;
  }
  var data = _cloneDeep(values);
  var dealFieldList = function dealFieldList(obj, _ref, bind) {
    var _ref2 = _toArray(_ref),
      path = _ref2[0],
      rest = _ref2.slice(1);
    if (rest.length === 1) {
      var list = get(obj, path, []);
      list.forEach(function (item, index) {
        var value = get(item, rest[0]);
        if (bind === 'root') {
          list[index] = value;
          return;
        }
        transformValueToBind(item, rest[0], bind);
      });
    }
    if (isArray(obj)) {
      obj.forEach(function (item) {
        return dealFieldList(item, [path].concat(_toConsumableArray(rest)), bind);
      });
    } else if (isObject(obj)) {
      var value = get(obj, path);
      dealFieldList(value, rest, bind);
    }
  };
  Object.keys(flatten).forEach(function (key) {
    var _a, _b;
    var bind = (_b = (_a = flatten[key]) === null || _a === void 0 ? void 0 : _a.schema) === null || _b === void 0 ? void 0 : _b.bind;
    if (bind === undefined) {
      return;
    }
    var path = transformPath(key);
    isArray(path) ? dealFieldList(data, path, bind) : transformValueToBind(data, path, bind);
  });
  return data;
};
export var parseBindToValues = function parseBindToValues(values, flatten) {
  if (!JSON.stringify(flatten).includes('bind')) {
    return values;
  }
  var data = _cloneDeep(values);
  var dealFieldList = function dealFieldList(obj, _ref3, bind) {
    var _ref4 = _toArray(_ref3),
      path = _ref4[0],
      rest = _ref4.slice(1);
    if (rest.length === 1) {
      var list = get(obj, path, []);
      list.forEach(function (item, index) {
        if (bind === 'root') {
          list[index] = _defineProperty({}, rest[0], item);
          return;
        }
        transformBindToValue(item, rest[0], bind);
      });
    }
    if (isArray(obj)) {
      obj.forEach(function (item) {
        return dealFieldList(item, [path].concat(_toConsumableArray(rest)), bind);
      });
    } else if (isObject(obj)) {
      var value = get(obj, path);
      dealFieldList(value, rest, bind);
    }
  };
  Object.keys(flatten).forEach(function (key) {
    var _a, _b;
    var bind = (_b = (_a = flatten[key]) === null || _a === void 0 ? void 0 : _a.schema) === null || _b === void 0 ? void 0 : _b.bind;
    if (bind === undefined) {
      return;
    }
    var path = transformPath(key);
    isArray(path) ? dealFieldList(data, path, bind) : transformBindToValue(data, path, bind);
  });
  return data;
};