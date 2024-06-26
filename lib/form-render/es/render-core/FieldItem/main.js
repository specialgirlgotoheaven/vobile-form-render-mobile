"use strict";

function _typeof2(o) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof2(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("antd/es/form/style");
var _form = _interopRequireDefault(require("antd/es/form"));
require("antd/es/row/style");
var _row = _interopRequireDefault(require("antd/es/row"));
require("antd/es/col/style");
var _col = _interopRequireDefault(require("antd/es/col"));
var _tslib = require("tslib");
var _react = _interopRequireWildcard(require("react"));
var _zustand = require("zustand");
var _classnames = _interopRequireDefault(require("classnames"));
var _utils = require("../../utils");
var _mapping = require("../../models/mapping");
var _layout = require("../../models/layout");
var _validates = _interopRequireDefault(require("../../models/validates"));
var _field = require("./field");
var _module = require("./module");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof2(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
var UpperContext = /*#__PURE__*/(0, _react.createContext)(function () {});
var valuePropNameMap = {
  checkbox: 'checked',
  switch: 'checked',
  Checkbox: 'checked',
  Switch: 'checked'
};
var _default = exports.default = function _default(props) {
  var _a, _b;
  var configCtx = props.configCtx,
    store = props.store,
    schema = props.schema,
    path = props.path,
    children = props.children,
    dependValues = props.dependValues,
    rootPath = props.rootPath;
  var fieldRef = (0, _react.useRef)();
  var formCtx = (0, _zustand.useStore)(store, function (state) {
    return state.context;
  });
  var upperCtx = (0, _react.useContext)(UpperContext);
  var form = configCtx.form,
    widgets = configCtx.widgets,
    methods = configCtx.methods,
    globalProps = configCtx.globalProps;
  var reserveLabel = schema.reserveLabel,
    hidden = schema.hidden,
    properties = schema.properties,
    dependencies = schema.dependencies,
    _inlineMode = schema.inlineMode,
    remove = schema.remove,
    removeText = schema.removeText,
    _schema$visible = schema.visible,
    visible = _schema$visible === void 0 ? true : _schema$visible,
    otherSchema = (0, _tslib.__rest)(schema, ["reserveLabel", "hidden", "properties", "dependencies", "inlineMode", "remove", "removeText", "visible"]);
  var getValueFromKey = (0, _module.getParamValue)(formCtx, upperCtx, schema);
  var widgetName = (0, _mapping.getWidgetName)(schema);
  var Widget = (0, _mapping.getWidget)(widgetName, widgets);
  var fieldProps = (0, _module.getFieldProps)(widgetName, schema, {
    widgets: widgets,
    methods: methods,
    form: form,
    dependValues: dependValues,
    globalProps: globalProps,
    path: (0, _module.getPath)(path),
    rootPath: rootPath,
    fieldRef: fieldRef
  });
  (0, _react.useEffect)(function () {
    form.setFieldRef(fieldProps.addons.dataPath, fieldRef);
  }, []);
  if (schema === null || schema === void 0 ? void 0 : schema.hidden) {
    return null;
  }
  // Component not found
  if (!widgetName) {
    var ErrorSchema = widgets['errorSchema'] || widgets['ErrorSchema'];
    return /*#__PURE__*/_react.default.createElement(ErrorSchema, {
      schema: schema
    });
  }
  if (schema.type === 'void') {
    return /*#__PURE__*/_react.default.createElement(_col.default, {
      span: 24
    }, /*#__PURE__*/_react.default.createElement(Widget, Object.assign({}, fieldProps)));
  }
  var displayType = getValueFromKey('displayType');
  var inlineSelf = _inlineMode || (upperCtx === null || upperCtx === void 0 ? void 0 : upperCtx.displayType) === 'inline';
  // inexistence containers
  if (!upperCtx.exist) {
    inlineSelf = _inlineMode || (formCtx === null || formCtx === void 0 ? void 0 : formCtx.displayType) === 'inline';
  }
  var inlineChild = displayType === 'inline';
  var labelWidth = getValueFromKey('labelWidth');
  // Render Container Components
  if (children) {
    var childElement = /*#__PURE__*/_react.default.createElement("div", {
      className: 'fr-inline-container'
    }, children);
    if (!inlineChild) {
      var gutter = {
        row: 16,
        column: 24
      }[displayType];
      childElement = /*#__PURE__*/_react.default.createElement(_row.default, {
        gutter: gutter
      }, children);
    }
    fieldProps.children = childElement;
    var content = /*#__PURE__*/_react.default.createElement(Widget, Object.assign({
      labelWidth: labelWidth,
      displayType: schema.displayType
    }, fieldProps, otherSchema));
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
    }, inlineSelf ? content : /*#__PURE__*/_react.default.createElement(_col.default, {
      span: 24,
      className: (0, _classnames.default)('fr-obj-col', _defineProperty({}, schema.className, !!schema.className))
    }, content));
  }
  // Render field components
  var label = (0, _module.getLabel)(schema, displayType, widgets, fieldProps.addons);
  var noStyle = getValueFromKey('noStyle');
  var span = (0, _module.getColSpan)(formCtx, upperCtx, schema);
  var extra = (0, _module.getExtraView)('extra', schema, widgets);
  var help = (0, _module.getExtraView)('help', schema, widgets);
  var tooltip = (0, _module.getTooltip)(schema, displayType);
  var ruleList = (0, _validates.default)(schema, form, methods, fieldRef);
  var readOnly = getValueFromKey('readOnly');
  var disabled = getValueFromKey('disabled');
  var validateTrigger = getValueFromKey('validateTrigger');
  var _labelCol = getValueFromKey('labelCol');
  var _fieldCol = getValueFromKey('fieldCol');
  var maxWidth = getValueFromKey('maxWidth');
  var _getFormItemLayout = (0, _layout.getFormItemLayout)(Math.floor(24 / span * 1), schema, {
      displayType: displayType,
      labelWidth: labelWidth,
      _labelCol: _labelCol,
      _fieldCol: _fieldCol
    }),
    labelCol = _getFormItemLayout.labelCol,
    fieldCol = _getFormItemLayout.fieldCol;
  var valuePropName = schema.valuePropName || valuePropNameMap[widgetName] || undefined;
  if (readOnly) {
    fieldProps.readOnly = readOnly;
  }
  if (disabled) {
    fieldProps.disabled = disabled;
  }
  if (reserveLabel && !label && displayType !== 'column') {
    label = 'fr-hide-label';
  }
  if (readOnly) {
    Widget = widgets[schema.readOnlyWidget] || widgets['Html'];
  }
  // checkbox 布局有点特殊
  if ((0, _utils.isCheckBoxType)(schema, readOnly)) {
    fieldProps.title = label;
    label = null;
    if (displayType === 'row') {
      label = 'fr-hide-label';
    }
  }
  var initialValue = (_a = schema.default) !== null && _a !== void 0 ? _a : schema.defaultValue;
  var classRest = _defineProperty({
    'fr-hide-label': label === 'fr-hide-label',
    'fr-inline-field': inlineSelf,
    'fr-field-visibility': !visible
  }, schema.className, !!schema.className);
  var formItem = /*#__PURE__*/_react.default.createElement(_form.default.Item, {
    className: (0, _classnames.default)('fr-field', classRest),
    label: label,
    name: path,
    valuePropName: valuePropName,
    rules: readOnly ? [] : ruleList,
    hidden: hidden,
    tooltip: tooltip,
    extra: extra,
    help: help,
    initialValue: initialValue,
    labelCol: labelCol,
    wrapperCol: fieldCol,
    noStyle: noStyle,
    dependencies: dependencies,
    validateTrigger: validateTrigger !== null && validateTrigger !== void 0 ? validateTrigger : ((_b = fieldRef === null || fieldRef === void 0 ? void 0 : fieldRef.current) === null || _b === void 0 ? void 0 : _b.validator) ? 'onSubmit' : 'onChange'
  }, fieldProps.onStatusChange ? ( /*#__PURE__*/_react.default.createElement(_field.FieldWrapperStatus, {
    Field: Widget,
    fieldProps: fieldProps,
    maxWidth: maxWidth,
    initialValue: initialValue
  })) : ( /*#__PURE__*/_react.default.createElement(_field.FieldWrapper, {
    Field: Widget,
    fieldProps: fieldProps,
    maxWidth: maxWidth,
    initialValue: initialValue
  })));
  if (inlineSelf) {
    if (noStyle) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classnames.default)('fr-inline-field', _defineProperty({
          'fr-field-visibility': !visible
        }, schema.className, !!schema.className))
      }, formItem);
    }
    return formItem;
  }
  return /*#__PURE__*/_react.default.createElement(_col.default, {
    span: span,
    className: (0, _classnames.default)(null, {
      'fr-field-visibility': !visible
    })
  }, formItem);
};