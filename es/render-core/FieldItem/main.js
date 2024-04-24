import _Form from "antd-mobile/es/components/form";
import _Grid from "antd-mobile/es/components/grid";
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { __rest } from "tslib";
import React, { createContext, useContext, useRef, useEffect, useState } from 'react';
import { useStore } from 'zustand';
import classnames from 'classnames';
import { getWidget } from '../../utils';
import { ConfigContext } from '../../models/context';
import getRuleList from '../../form-render/models/validates'; 
import FieldWrapper from './field';
import { getParamValue, getFieldProps, getPath, getLabel, getExtraView } from './module';
var UpperContext = /*#__PURE__*/createContext(function () {});
var valuePropNameMap = {
  checkbox: 'checked',
  switch: 'checked',
  Checkbox: 'checked',
  Switch: 'checked'
};
export default (function (props) {
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
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    needOnClick = _useState2[0],
    setNeedOnClick = _useState2[1];
  var fieldRef = useRef();
  var formCtx = useStore(store, function (state) {
    return state.context;
  });
  var upperCtx = useContext(UpperContext);
  var configCtx = useContext(ConfigContext);
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
    otherSchema = __rest(schema, ["hidden", "properties", "dependencies", "inlineMode", "remove", "removeText", "visible", "layout"]);
  var getValueFromKey = getParamValue(formCtx, upperCtx, schema);
  useEffect(function () {
    form.setFieldRef(fieldProps.addons.dataPath, fieldRef);
  }, []);
  useEffect(function () {
    var _a;
    if ((_a = fieldRef === null || fieldRef === void 0 ? void 0 : fieldRef.current) === null || _a === void 0 ? void 0 : _a.open) {
      setNeedOnClick(true);
    }
  }, [fieldRef.current]);
  var Widget = getWidget(widgets, schema.widget, schema);
  var fieldProps = getFieldProps(schema, {
    widgets: widgets,
    methods: methods,
    form: form,
    dependValues: dependValues,
    globalProps: globalProps,
    path: getPath(path),
    rootPath: rootPath,
    fieldRef: fieldRef
  });
  var displayType = getValueFromKey('displayType');
  var labelWidth = getValueFromKey('labelWidth');
  if (['collapse'].includes(schema.widget)) {
    return /*#__PURE__*/React.createElement(Widget, Object.assign({}, fieldProps, {
      renderCore: renderCore
    }));
  }
  if (children) {
    fieldProps.children = /*#__PURE__*/React.createElement(_Grid, {
      columns: 1
    }, children);
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
    }, /*#__PURE__*/React.createElement(Widget, Object.assign({
      labelWidth: labelWidth,
      displayType: schema.displayType
    }, fieldProps, otherSchema)));
  }
  // Render field components
  var label = getLabel(schema, displayType, widgets, fieldProps.addons);
  var noStyle = getValueFromKey('noStyle');
  var extra = getExtraView('extra', schema, widgets);
  var help = getExtraView('help', schema, widgets);
  var tooltip = getExtraView('tooltip', schema, widgets);
  var ruleList = getRuleList(schema, form, methods, fieldRef);
  var readOnly = getValueFromKey('readOnly');
  var valuePropName = schema.valuePropName || valuePropNameMap[schema.widget] || undefined;
  if (readOnly) {
    fieldProps.readOnly = readOnly;
  }
  if (readOnly) {
    Widget = getWidget(widgets, schema.readOnlyWidget, schema, true);
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
    className: classnames('fr-field', {
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
  return /*#__PURE__*/React.createElement(_Grid.Item, null, /*#__PURE__*/React.createElement(_Form.Item, Object.assign({}, itemProps), /*#__PURE__*/React.createElement(FieldWrapper, {
    Field: Widget,
    fieldProps: fieldProps,
    defaultValue: defaultValue
  })));
});