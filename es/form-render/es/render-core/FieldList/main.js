import "antd/es/form/style";
import _Form from "antd/es/form";
import "antd/es/col/style";
import _Col from "antd/es/col";
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
import { __rest } from "tslib";
import React, { createContext, useContext, useState } from 'react';
import { useStore } from 'zustand';
import { FRContext } from '../../models/context';
import { parseAllExpression } from '../../models/expression';
import { getFormListLayout, getParamValue, getLabel, getTooltip } from './modules';
import Main from './field';
var UpperContext = /*#__PURE__*/createContext(function () {});
export default (function (props) {
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    _ = _useState2[0],
    setListData = _useState2[1];
  var configContext = props.configContext;
  var store = useContext(FRContext);
  var formCtx = useStore(store, function (state) {
    return state.context;
  });
  var upperCtx = useContext(UpperContext);
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
    otherSchema = __rest(_schema, ["items", "className"]);
  var schema = (globalConfig === null || globalConfig === void 0 ? void 0 : globalConfig.mustacheDisabled) ? _schema : Object.assign({
    items: items
  }, parseAllExpression(otherSchema, formData, props.rootPath, formSchema));
  var widget = schema.widget;
  var widgetName = widget || 'list1';
  var getValueFromKey = getParamValue(formCtx, upperCtx, schema);
  var label = getLabel(schema, displayType, widgets);
  var tooltip = getTooltip(schema, displayType);
  var _getFormListLayout = getFormListLayout(getValueFromKey, displayType),
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
  return /*#__PURE__*/React.createElement(_Col, {
    span: 24,
    className: className
  }, !isInline && !isDisplayColumn && label && ( /*#__PURE__*/React.createElement(_Form.Item, {
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
  })), /*#__PURE__*/React.createElement(_Form.Item, {
    label: label,
    labelCol: isDisplayColumn ? {
      span: 24
    } : labelCol,
    wrapperCol: fieldCol,
    noStyle: !isInline && !isDisplayColumn,
    tooltip: tooltip
  }, /*#__PURE__*/React.createElement(Main, Object.assign({}, props, {
    form: form,
    methods: methods,
    formCtx: formCtx,
    upperCtx: upperCtx,
    widgets: widgets,
    configContext: configContext,
    setListData: setListData
  }))));
});