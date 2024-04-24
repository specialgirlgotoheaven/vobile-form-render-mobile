"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _FieldItem = _interopRequireDefault(require("./FieldItem"));
var _FieldList = _interopRequireDefault(require("./FieldList"));
var _sortProperties = _interopRequireDefault(require("form-render/es/models/sortProperties"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
;
;
var renderItem = function renderItem(props) {
  var _a;
  var schema = props.schema,
    key = props.key,
    path = props.path,
    rootPath = props.rootPath;
  // render List
  if (schema.type === 'array' && ((_a = schema.items) === null || _a === void 0 ? void 0 : _a.type) === 'object') {
    return /*#__PURE__*/_react.default.createElement(_FieldList.default, {
      key: key,
      schema: schema,
      path: path,
      rootPath: rootPath,
      renderCore: RenderCore
    });
  }
  // render Object | field
  var child = null;
  // has child schema
  if (schema === null || schema === void 0 ? void 0 : schema.properties) {
    child = RenderCore({
      schema: schema,
      parentPath: path,
      rootPath: rootPath
    });
    path = undefined;
  }
  return /*#__PURE__*/_react.default.createElement(_FieldItem.default, {
    key: key,
    schema: schema,
    path: path,
    rootPath: rootPath,
    children: child,
    renderCore: RenderCore
  });
};
var RenderCore = function RenderCore(props) {
  var schema = props.schema,
    _props$parentPath = props.parentPath,
    parentPath = _props$parentPath === void 0 ? [] : _props$parentPath,
    _props$rootPath = props.rootPath,
    rootPath = _props$rootPath === void 0 ? [] : _props$rootPath;
  if (!schema || Object.keys(schema).length === 0) {
    return null;
  }
  // render List.item
  if (schema === null || schema === void 0 ? void 0 : schema.items) {
    return renderItem({
      schema: schema.items,
      path: parentPath,
      rootPath: rootPath
    });
  }
  // render Objiect | field
  return (0, _sortProperties.default)(Object.entries(schema.properties || {})).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      item = _ref2[1];
    var path = [].concat(_toConsumableArray(parentPath), [key]);
    return renderItem({
      schema: item,
      path: path,
      key: key,
      rootPath: rootPath
    });
  });
};
var _default = exports.default = RenderCore;