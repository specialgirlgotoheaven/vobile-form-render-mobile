"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _form = _interopRequireDefault(require("antd-mobile/es/components/form"));
var _grid = _interopRequireDefault(require("antd-mobile/es/components/grid"));
var _tslib = require("tslib");
var _react = _interopRequireWildcard(require("react"));
var _antdMobileIcons = require("antd-mobile-icons");
var _zustand = require("zustand");
var _context = require("../../models/context");
var _expression = require("../../form-render/es/models/expression");
var _utils = require("../../utils");
require("./index.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var UpperContext = /*#__PURE__*/(0, _react.createContext)(function () {});
var getParamValue = function getParamValue(formCtx, upperCtx, schema) {
  return function (valueKey) {
    var _a, _b;
    return (_b = (_a = schema[valueKey]) !== null && _a !== void 0 ? _a : upperCtx[valueKey]) !== null && _b !== void 0 ? _b : formCtx[valueKey];
  };
};
var _default = exports.default = function _default(props) {
  var _a;
  var _schema = props.schema,
    path = props.path,
    renderCore = props.renderCore,
    _rootPath = props.rootPath;
  var store = (0, _react.useContext)(_context.FRContext);
  var formCtx = (0, _zustand.useStore)(store, function (state) {
    return state.context;
  });
  var upperCtx = (0, _react.useContext)(UpperContext);
  var _useContext = (0, _react.useContext)(_context.ConfigContext),
    form = _useContext.form,
    methods = _useContext.methods;
  var formData = form.getFieldsValue(true);
  var _store$getState = store.getState(),
    formSchema = _store$getState.schema;
  var items = _schema.items,
    otherSchema = (0, _tslib.__rest)(_schema, ["items"]);
  var schema = Object.assign({
    items: items
  }, (0, _expression.parseAllExpression)(otherSchema, formData, _rootPath, formSchema));
  var defaultValue = (_a = schema.default) !== null && _a !== void 0 ? _a : schema.defaultValue || [{}];
  var _ref = schema.props || {},
    onAdd = _ref.onAdd,
    onRemove = _ref.onRemove;
  var handleAdd = function handleAdd(add, data) {
    var addFunc = onAdd;
    if (typeof onAdd === 'string') {
      addFunc = methods[onAdd];
    }
    if ((0, _utils.isFunction)(addFunc)) {
      addFunc(function (funData) {
        return add(funData || data);
      }, {
        schema: schema,
        data: data
      });
      return;
    }
    add(data);
  };
  var handleRemove = function handleRemove(remove, index) {
    var removeFunc = onRemove;
    if (typeof onRemove === 'string') {
      removeFunc = methods[onRemove];
    }
    if ((0, _utils.isFunction)(removeFunc)) {
      removeFunc(function () {
        return remove(index);
      }, {
        schema: schema,
        index: index
      });
      return;
    }
    remove(index);
  };
  var getValueFromKey = getParamValue(formCtx, upperCtx, schema);
  var readOnly = getValueFromKey('readOnly');
  if (schema.hidden) {
    return null;
  }
  var preRootPath = _toConsumableArray(_rootPath || []).splice(0, _rootPath.length - 1);
  var rootPath = [].concat(_toConsumableArray(preRootPath), _toConsumableArray(path));
  return /*#__PURE__*/_react.default.createElement(_grid.default.Item, {
    className: "frm-list"
  }, /*#__PURE__*/_react.default.createElement(_form.default.Array, {
    name: path,
    initialValue: defaultValue,
    renderAdd: !readOnly ? function () {
      return /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_antdMobileIcons.AddCircleOutline, null), " \u6DFB\u52A0");
    } : undefined,
    onAdd: function onAdd(_ref2) {
      var add = _ref2.add;
      return handleAdd(add);
    },
    renderHeader: function renderHeader(_ref3, _ref4) {
      var index = _ref3.index;
      var remove = _ref4.remove;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, schema.title && ( /*#__PURE__*/_react.default.createElement("span", null, schema.title, " ", index + 1)), !readOnly && ( /*#__PURE__*/_react.default.createElement("a", {
        onClick: function onClick() {
          return handleRemove(remove, index);
        },
        style: {
          float: 'right'
        }
      }, "\u5220\u9664")));
    }
  }, function (fields) {
    return fields.map(function (_ref5) {
      var index = _ref5.index;
      return renderCore({
        schema: schema,
        parentPath: [index],
        rootPath: [].concat(_toConsumableArray(rootPath), [index])
      });
    });
  }));
};