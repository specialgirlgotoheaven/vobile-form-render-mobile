"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tslib = require("tslib");
var _react = _interopRequireDefault(require("react"));
var _ahooks = require("ahooks");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var FieldWrapper = function FieldWrapper(props) {
  var Field = props.Field,
    fieldProps = props.fieldProps,
    defaultValue = props.defaultValue,
    otherProps = (0, _tslib.__rest)(props, ["Field", "fieldProps", "defaultValue"]);
  (0, _ahooks.useUpdateEffect)(function () {
    otherProps.onChange(defaultValue);
  }, [JSON.stringify(defaultValue)]);
  return /*#__PURE__*/_react.default.createElement(Field, Object.assign({}, otherProps, fieldProps));
};
var _default = exports.default = FieldWrapper;