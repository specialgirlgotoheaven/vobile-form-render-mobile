"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("antd/es/form/style");
var _form = _interopRequireDefault(require("antd/es/form"));
require("antd/es/col/style");
var _col = _interopRequireDefault(require("antd/es/col"));
var _tslib = require("tslib");
var _react = _interopRequireWildcard(require("react"));
var _zustand = require("zustand");
var _context = require("../../models/context");
var _expression = require("../../models/expression");
var _modules = require("./modules");
var _field = _interopRequireDefault(require("./field"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
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
var UpperContext = /*#__PURE__*/(0, _react.createContext)(function () {});
var _default = exports.default = function _default(props) {
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    _ = _useState2[0],
    setListData = _useState2[1];
  var configContext = props.configContext;
  var store = (0, _react.useContext)(_context.FRContext);
  var formCtx = (0, _zustand.useStore)(store, function (state) {
    return state.context;
  });
  var upperCtx = (0, _react.useContext)(UpperContext);
  var form = configContext.form,
    widgets = configContext.widgets,
    methods = configContext.methods,
    globalConfig = configContext.globalConfig;
  var displayType = formCtx.displayType;
  var isDisplayColumn = displayType === 'column';
  var _schema = props.schema;
  var formData = form.getFieldsValue(true);
  var _store$getState = store.getState(),
    formSchema = _store$getState.schema;
  var items = _schema.items,
    className = _schema.className,
    otherSchema = (0, _tslib.__rest)(_schema, ["items", "className"]);
  var schema = (globalConfig === null || globalConfig === void 0 ? void 0 : globalConfig.mustacheDisabled) ? _schema : Object.assign({
    items: items
  }, (0, _expression.parseAllExpression)(otherSchema, formData, props.rootPath, formSchema));
  var widget = schema.widget;
  var widgetName = widget || 'list1';
  var getValueFromKey = (0, _modules.getParamValue)(formCtx, upperCtx, schema);
  var label = (0, _modules.getLabel)(schema, displayType, widgets);
  var tooltip = (0, _modules.getTooltip)(schema, displayType);
  var _getFormListLayout = (0, _modules.getFormListLayout)(getValueFromKey, displayType),
    labelCol = _getFormListLayout.labelCol,
    fieldCol = _getFormListLayout.fieldCol;
  var isInline = schema.display === 'inline';
  var preRootPath = _toConsumableArray(props.rootPath || []).splice(0, props.rootPath.length - 1);
  var listData = form.getFieldValue([].concat(_toConsumableArray(preRootPath), _toConsumableArray(props.path)));
  if (!(listData === null || listData === void 0 ? void 0 : listData.length) && widgetName !== 'drawerList') {
    isInline = true;
  }
  if (schema.hidden) {
    return null;
  }
  return /*#__PURE__*/_react.default.createElement(_col.default, {
    span: 24,
    className: className
  }, !isInline && !isDisplayColumn && label && ( /*#__PURE__*/_react.default.createElement(_form.default.Item, {
    className: 'ant-form-item-optional-hide',
    label: label,
    labelAlign: 'left',
    colon: false,
    tooltip: tooltip,
    style: {
      marginBottom: 0
    },
    labelCol: {
      span: 24
    }
  })), /*#__PURE__*/_react.default.createElement(_form.default.Item, {
    label: label,
    labelCol: isDisplayColumn ? {
      span: 24
    } : labelCol,
    wrapperCol: fieldCol,
    noStyle: !isInline && !isDisplayColumn,
    tooltip: tooltip
  }, /*#__PURE__*/_react.default.createElement(_field.default, Object.assign({}, props, {
    form: form,
    methods: methods,
    formCtx: formCtx,
    upperCtx: upperCtx,
    widgets: widgets,
    configContext: configContext,
    setListData: setListData
  }))));
};