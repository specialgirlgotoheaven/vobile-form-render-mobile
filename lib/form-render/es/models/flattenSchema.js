"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flattenSchema = flattenSchema;
exports.getKeyFromPath = void 0;
exports.getSchemaFromFlatten = getSchemaFromFlatten;
var _index = require("../utils/index");
var _sortProperties = _interopRequireDefault(require("./sortProperties"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
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
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
var getKeyFromPath = exports.getKeyFromPath = function getKeyFromPath() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#';
  try {
    var arr = path.split('.');
    var last = arr.slice(-1)[0];
    var result = last.replace('[]', '');
    return result;
  } catch (error) {
    console.error(error, 'getKeyFromPath');
    return '';
  }
};
function getSchemaFromFlatten(flatten) {
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#';
  var schema = {};
  var item = (0, _index._cloneDeep)(flatten[path]);
  if (!item) {
    return schema;
  }
  schema = item.schema;
  // schema.$id && delete schema.$id;
  if (item.children.length > 0) {
    item.children.forEach(function (child) {
      if (!flatten[child]) return;
      var key = getKeyFromPath(child);
      if ((0, _index.isObjType)(schema)) {
        schema.properties[key] = getSchemaFromFlatten(flatten, child);
      }
      if ((0, _index.isListType)(schema)) {
        schema.items.properties[key] = getSchemaFromFlatten(flatten, child);
      }
    });
  }
  return schema;
}
// TODO: more tests to make sure weird & wrong schema won't crush
function flattenSchema() {
  var _schema = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var name = arguments.length > 1 ? arguments[1] : undefined;
  var parent = arguments.length > 2 ? arguments[2] : undefined;
  var _result = arguments.length > 3 ? arguments[3] : undefined;
  // 排序
  // _schema = orderBy(_schema, item => item.order, ['asc']);
  var result = _result || {};
  var schema = (0, _index._cloneDeep)(_schema) || {};
  var _name = name || '#';
  if (!schema.$id) {
    schema.$id = _name; // path as $id, for easy access to path in schema
  }
  var children = [];
  if ((0, _index.isObjType)(schema)) {
    (0, _sortProperties.default)(Object.entries(schema.properties)).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];
      var _key = (0, _index.isListType)(value) ? key + '[]' : key;
      var uniqueName = _name === '#' ? _key : _name + '.' + _key;
      children.push(uniqueName);
      flattenSchema(value, uniqueName, _name, result);
    });
    schema.properties = {};
  }
  if ((0, _index.isListType)(schema)) {
    (0, _sortProperties.default)(Object.entries(schema.items.properties)).forEach(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        value = _ref4[1];
      var _key = (0, _index.isListType)(value) ? key + '[]' : key;
      var uniqueName = _name === '#' ? _key : _name + '.' + _key;
      children.push(uniqueName);
      flattenSchema(value, uniqueName, _name, result);
    });
    schema.items.properties = {};
  }
  if (schema.type) {
    result[_name] = {
      parent: parent,
      schema: schema,
      children: children
    };
  }
  return result;
}