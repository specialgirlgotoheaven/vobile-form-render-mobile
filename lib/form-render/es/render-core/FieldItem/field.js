"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldWrapperStatus = exports.FieldWrapper = void 0;
require("antd/es/button/style");
var _button = _interopRequireDefault(require("antd/es/button"));
require("antd/es/config-provider/style");
var _configProvider = _interopRequireDefault(require("antd/es/config-provider"));
require("antd/es/form/style");
var _form = _interopRequireDefault(require("antd/es/form"));
var _tslib = require("tslib");
var _react = _interopRequireWildcard(require("react"));
var _ahooks = require("ahooks");
var _utils = require("../../utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var FieldWrapperStatus = exports.FieldWrapperStatus = function FieldWrapperStatus(props) {
  var Field = props.Field,
    fieldProps = props.fieldProps,
    maxWidth = props.maxWidth,
    initialValue = props.initialValue,
    otherProps = (0, _tslib.__rest)(props, ["Field", "fieldProps", "maxWidth", "initialValue"]);
  var onStatusChange = fieldProps.onStatusChange,
    addons = fieldProps.addons,
    otherFieldProps = (0, _tslib.__rest)(fieldProps, ["onStatusChange", "addons"]);
  var style = maxWidth ? Object.assign({
    maxWidth: maxWidth
  }, fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.style) : Object.assign({}, fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.style);
  var _Form$Item$useStatus = _form.default.Item.useStatus(),
    status = _Form$Item$useStatus.status;
  var errors = addons.getFieldError(addons.dataPath);
  (0, _react.useEffect)(function () {
    onStatusChange && onStatusChange(status, errors);
  }, [JSON.stringify(errors)]);
  (0, _ahooks.useUpdateEffect)(function () {
    otherProps.onChange(initialValue);
  }, [JSON.stringify(initialValue)]);
  return /*#__PURE__*/_react.default.createElement(Field, Object.assign({}, otherProps, otherFieldProps, {
    style: style,
    addons: addons
  }));
};
var FieldWrapper = exports.FieldWrapper = function FieldWrapper(props) {
  var Field = props.Field,
    fieldProps = props.fieldProps,
    maxWidth = props.maxWidth,
    initialValue = props.initialValue,
    otherProps = (0, _tslib.__rest)(props, ["Field", "fieldProps", "maxWidth", "initialValue"]);
  var addons = fieldProps.addons,
    schema = fieldProps.schema;
  var _style = maxWidth ? Object.assign({
    maxWidth: maxWidth
  }, fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.style) : Object.assign({}, fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.style);
  var removeBtn = schema.removeBtn;
  var configCtx = (0, _react.useContext)(_configProvider.default.ConfigContext);
  var t = (0, _utils.translation)(configCtx);
  (0, _ahooks.useUpdateEffect)(function () {
    otherProps.onChange(initialValue);
  }, [JSON.stringify(initialValue)]);
  var handleRemove = function handleRemove() {
    if ((0, _utils.isFunction)(removeBtn === null || removeBtn === void 0 ? void 0 : removeBtn.onClick)) {
      removeBtn.onClick(function () {
        addons.setSchemaByPath(addons.schemaPath, {
          hidden: true
        });
      });
      return;
    }
    addons.setSchemaByPath(addons.schemaPath, {
      hidden: true
    });
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Field, Object.assign({}, otherProps, fieldProps, {
    style: _style
  })), removeBtn && ( /*#__PURE__*/_react.default.createElement(_button.default, Object.assign({
    type: 'link',
    danger: true
  }, removeBtn, {
    onClick: handleRemove
  }), (removeBtn === null || removeBtn === void 0 ? void 0 : removeBtn.text) || t('delete'))));
};