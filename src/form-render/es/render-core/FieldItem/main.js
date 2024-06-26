function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
import "antd/es/form/style";
import _Form from "antd/es/form";
import "antd/es/row/style";
import _Row from "antd/es/row";
import "antd/es/col/style";
import _Col from "antd/es/col";
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { __rest } from "tslib";
import React, { createContext, useContext, useRef, useEffect } from 'react';
import { useStore } from 'zustand';
import classnames from 'classnames';
import { isCheckBoxType } from '../../utils';
import { getWidgetName, getWidget } from '../../models/mapping';
import { getFormItemLayout } from '../../models/layout';
import getRuleList from '../../models/validates';
var UpperContext = /*#__PURE__*/createContext(function () {});
var valuePropNameMap = {
  checkbox: 'checked',
  switch: 'checked',
  Checkbox: 'checked',
  Switch: 'checked'
};
import { FieldWrapper, FieldWrapperStatus } from './field';
import { getParamValue, getFieldProps, getPath, getLabel, getColSpan, getExtraView, getTooltip } from './module';
export default (function (props) {
  var _a, _b;
  var configCtx = props.configCtx,
    store = props.store,
    schema = props.schema,
    path = props.path,
    children = props.children,
    dependValues = props.dependValues,
    rootPath = props.rootPath;
  var fieldRef = useRef();
  var formCtx = useStore(store, function (state) {
    return state.context;
  });
  var upperCtx = useContext(UpperContext);
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
    otherSchema = __rest(schema, ["reserveLabel", "hidden", "properties", "dependencies", "inlineMode", "remove", "removeText", "visible"]);
  var getValueFromKey = getParamValue(formCtx, upperCtx, schema);
  var widgetName = getWidgetName(schema);
  var Widget = getWidget(widgetName, widgets);
  var fieldProps = getFieldProps(widgetName, schema, {
    widgets: widgets,
    methods: methods,
    form: form,
    dependValues: dependValues,
    globalProps: globalProps,
    path: getPath(path),
    rootPath: rootPath,
    fieldRef: fieldRef
  });
  useEffect(function () {
    form.setFieldRef(fieldProps.addons.dataPath, fieldRef);
  }, []);
  if (schema === null || schema === void 0 ? void 0 : schema.hidden) {
    return null;
  }
  // Component not found
  if (!widgetName) {
    var ErrorSchema = widgets['errorSchema'] || widgets['ErrorSchema'];
    return /*#__PURE__*/React.createElement(ErrorSchema, {
      schema: schema
    });
  }
  if (schema.type === 'void') {
    return /*#__PURE__*/React.createElement(_Col, {
      span: 24
    }, /*#__PURE__*/React.createElement(Widget, Object.assign({}, fieldProps)));
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
    var childElement = /*#__PURE__*/React.createElement("div", {
      className: 'fr-inline-container'
    }, children);
    if (!inlineChild) {
      var gutter = {
        row: 16,
        column: 24
      }[displayType];
      childElement = /*#__PURE__*/React.createElement(_Row, {
        gutter: gutter
      }, children);
    }
    fieldProps.children = childElement;
    var content = /*#__PURE__*/React.createElement(Widget, Object.assign({
      labelWidth: labelWidth,
      displayType: schema.displayType
    }, fieldProps, otherSchema));
    return /*#__PURE__*/React.createElement(UpperContext.Provider, {
      value: {
        column: schema.column,
        labelCol: schema.labelCol,
        fieldCol: schema.fieldCol,
        displayType: schema.displayType,
        labelWidth: schema.labelWidth,
        noStyle: schema.noStyle,
        exist: true
      }
    }, inlineSelf ? content : /*#__PURE__*/React.createElement(_Col, {
      span: 24,
      className: classnames('fr-obj-col', _defineProperty({}, schema.className, !!schema.className))
    }, content));
  }
  // Render field components
  var label = getLabel(schema, displayType, widgets, fieldProps.addons);
  var noStyle = getValueFromKey('noStyle');
  var span = getColSpan(formCtx, upperCtx, schema);
  var extra = getExtraView('extra', schema, widgets);
  var help = getExtraView('help', schema, widgets);
  var tooltip = getTooltip(schema, displayType);
  var ruleList = getRuleList(schema, form, methods, fieldRef);
  var readOnly = getValueFromKey('readOnly');
  var disabled = getValueFromKey('disabled');
  var validateTrigger = getValueFromKey('validateTrigger');
  var _labelCol = getValueFromKey('labelCol');
  var _fieldCol = getValueFromKey('fieldCol');
  var maxWidth = getValueFromKey('maxWidth');
  var _getFormItemLayout = getFormItemLayout(Math.floor(24 / span * 1), schema, {
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
  if (isCheckBoxType(schema, readOnly)) {
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
  var formItem = /*#__PURE__*/React.createElement(_Form.Item, {
    className: classnames('fr-field', classRest),
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
  }, fieldProps.onStatusChange ? ( /*#__PURE__*/React.createElement(FieldWrapperStatus, {
    Field: Widget,
    fieldProps: fieldProps,
    maxWidth: maxWidth,
    initialValue: initialValue
  })) : ( /*#__PURE__*/React.createElement(FieldWrapper, {
    Field: Widget,
    fieldProps: fieldProps,
    maxWidth: maxWidth,
    initialValue: initialValue
  })));
  if (inlineSelf) {
    if (noStyle) {
      return /*#__PURE__*/React.createElement("div", {
        className: classnames('fr-inline-field', _defineProperty({
          'fr-field-visibility': !visible
        }, schema.className, !!schema.className))
      }, formItem);
    }
    return formItem;
  }
  return /*#__PURE__*/React.createElement(_Col, {
    span: span,
    className: classnames(null, {
      'fr-field-visibility': !visible
    })
  }, formItem);
});