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
var _zustand = require("zustand");
var _classnames = _interopRequireDefault(require("classnames"));
var _utils = require("../../utils");
var _context = require("../../models/context");
var _validates = _interopRequireDefault(require("form-render/es/models/validates"));
var _field = _interopRequireDefault(require("./field"));
var _module = require("./module");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var UpperContext = /*#__PURE__*/(0, _react.createContext)(function () {});
var valuePropNameMap = {
  checkbox: 'checked',
  switch: 'checked',
  Checkbox: 'checked',
  Switch: 'checked'
};
var _default = exports.default = function _default(props) {
  var _a;
  var store = props.store,
    schema = props.schema,
    path = props.path,
    children = props.children,
    dependValues = props.dependValues,
    rootPath = props.rootPath,
    renderCore = props.renderCore;
  if (schema === null || schema === void 0 ? void 0 : schema.hidden) {
    return null;
  }
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    needOnClick = _useState2[0],
    setNeedOnClick = _useState2[1];
  var fieldRef = (0, _react.useRef)();
  var formCtx = (0, _zustand.useStore)(store, function (state) {
    return state.context;
  });
  var upperCtx = (0, _react.useContext)(UpperContext);
  var configCtx = (0, _react.useContext)(_context.ConfigContext);
  var form = configCtx.form,
    widgets = configCtx.widgets,
    methods = configCtx.methods,
    globalProps = configCtx.globalProps;
  var hidden = schema.hidden,
    properties = schema.properties,
    dependencies = schema.dependencies,
    _inlineMode = schema.inlineMode,
    remove = schema.remove,
    removeText = schema.removeText,
    _schema$visible = schema.visible,
    visible = _schema$visible === void 0 ? true : _schema$visible,
    layout = schema.layout,
    otherSchema = (0, _tslib.__rest)(schema, ["hidden", "properties", "dependencies", "inlineMode", "remove", "removeText", "visible", "layout"]);
  var getValueFromKey = (0, _module.getParamValue)(formCtx, upperCtx, schema);
  (0, _react.useEffect)(function () {
    form.setFieldRef(fieldProps.addons.dataPath, fieldRef);
  }, []);
  (0, _react.useEffect)(function () {
    var _a;
    if ((_a = fieldRef === null || fieldRef === void 0 ? void 0 : fieldRef.current) === null || _a === void 0 ? void 0 : _a.open) {
      setNeedOnClick(true);
    }
  }, [fieldRef.current]);
  var Widget = (0, _utils.getWidget)(widgets, schema.widget, schema);
  var fieldProps = (0, _module.getFieldProps)(schema, {
    widgets: widgets,
    methods: methods,
    form: form,
    dependValues: dependValues,
    globalProps: globalProps,
    path: (0, _module.getPath)(path),
    rootPath: rootPath,
    fieldRef: fieldRef
  });
  var displayType = getValueFromKey('displayType');
  var labelWidth = getValueFromKey('labelWidth');
  if (['collapse'].includes(schema.widget)) {
    return /*#__PURE__*/_react.default.createElement(Widget, Object.assign({}, fieldProps, {
      renderCore: renderCore
    }));
  }
  if (children) {
    fieldProps.children = /*#__PURE__*/_react.default.createElement(_grid.default, {
      columns: 1
    }, children);
    return /*#__PURE__*/_react.default.createElement(UpperContext.Provider, {
      value: {
        column: schema.column,
        labelCol: schema.labelCol,
        fieldCol: schema.fieldCol,
        displayType: schema.displayType,
        labelWidth: schema.labelWidth,
        noStyle: schema.noStyle,
        exist: true
      }
    }, /*#__PURE__*/_react.default.createElement(Widget, Object.assign({
      labelWidth: labelWidth,
      displayType: schema.displayType
    }, fieldProps, otherSchema)));
  }
  // Render field components
  var label = (0, _module.getLabel)(schema, displayType, widgets, fieldProps.addons);
  var noStyle = getValueFromKey('noStyle');
  var extra = (0, _module.getExtraView)('extra', schema, widgets);
  var help = (0, _module.getExtraView)('help', schema, widgets);
  var tooltip = (0, _module.getExtraView)('tooltip', schema, widgets);
  var ruleList = (0, _validates.default)(schema, form, methods, fieldRef);
  var readOnly = getValueFromKey('readOnly');
  var valuePropName = schema.valuePropName || valuePropNameMap[schema.widget] || undefined;
  if (readOnly) {
    fieldProps.readOnly = readOnly;
  }
  if (readOnly) {
    Widget = (0, _utils.getWidget)(widgets, schema.readOnlyWidget, schema, true);
  }
  var defaultValue = (_a = schema.default) !== null && _a !== void 0 ? _a : schema.defaultValue;
  var itemProps = {
    label: label,
    valuePropName: valuePropName,
    hidden: hidden,
    extra: extra,
    help: tooltip || help,
    noStyle: noStyle,
    dependencies: dependencies,
    name: path,
    initialValue: defaultValue,
    rules: readOnly ? [] : ruleList,
    className: (0, _classnames.default)('fr-field', {
      'fr-field-visibility': !visible
    })
  };
  if (layout) {
    itemProps.layout = {
      column: 'vertical',
      row: 'horizontal'
    }[layout];
  }
  if (!readOnly && needOnClick) {
    itemProps.onClick = function () {
      fieldRef.current.open();
    };
  }
  return /*#__PURE__*/_react.default.createElement(_grid.default.Item, null, /*#__PURE__*/_react.default.createElement(_form.default.Item, Object.assign({}, itemProps), /*#__PURE__*/_react.default.createElement(_field.default, {
    Field: Widget,
    fieldProps: fieldProps,
    defaultValue: defaultValue
  })));
};