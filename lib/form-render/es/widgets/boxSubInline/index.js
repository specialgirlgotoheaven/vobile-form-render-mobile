"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("antd/es/form/style");
var _form = _interopRequireDefault(require("antd/es/form"));
var _tslib = require("tslib");
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
require("./index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var BoxSubInline = function BoxSubInline(props) {
  var children = props.children,
    title = props.title,
    _props$hasBackground = props.hasBackground,
    hasBackground = _props$hasBackground === void 0 ? true : _props$hasBackground,
    description = props.description,
    tooltip = props.tooltip,
    fieldCol = props.fieldCol,
    labelCol = props.labelCol,
    labelWidth = props.labelWidth,
    displayType = props.displayType,
    rest = (0, _tslib.__rest)(props, ["children", "title", "hasBackground", "description", "tooltip", "fieldCol", "labelCol", "labelWidth", "displayType"]);
  var _tooltip = null;
  var _labelCol = {
    span: 3
  };
  var _fieldCol = {
    flex: 1
  };
  if (description) {
    _tooltip = {
      title: description
    };
  }
  if (tooltip) {
    _tooltip = tooltip;
  }
  if (labelWidth) {
    _labelCol = {
      flex: labelWidth + 'px'
    };
  }
  if (labelCol) {
    _labelCol = labelCol;
  }
  if (fieldCol) {
    _fieldCol = fieldCol;
  }
  return /*#__PURE__*/_react.default.createElement(_form.default.Item, Object.assign({}, rest, {
    className: (0, _classnames.default)('fr-obj-subinline', {
      'fr-obj-subinline-label-hidden': !title,
      'fr-obj-subinline-background': hasBackground
    }),
    label: title || 'notitle',
    labelCol: _labelCol,
    wrapperCol: _fieldCol,
    tooltip: _tooltip
  }), children);
};
var _default = exports.default = BoxSubInline;