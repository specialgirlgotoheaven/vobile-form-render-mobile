"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("antd/es/input/style");
var _input = _interopRequireDefault(require("antd/es/input"));
var _react = _interopRequireDefault(require("react"));
var _rcColorPicker = _interopRequireDefault(require("rc-color-picker"));
var _alphahexMap = _interopRequireDefault(require("./alphahexMap"));
require("rc-color-picker/assets/index.css");
require("./index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Exp: '#ffffffA6' => algha: 65
var getAlphaFromHex = function getAlphaFromHex() {
  var hex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#ffffff';
  var alphaHex = hex.slice(7);
  var alpha = 100;
  for (var key in _alphahexMap.default) {
    if (_alphahexMap.default[key] === alphaHex.toUpperCase()) {
      alpha = Number(key) * 100;
    }
  }
  return alpha;
};
var Color = function Color(props) {
  var className = props.className,
    schema = props.schema,
    disabled = props.disabled,
    readOnly = props.readOnly,
    value = props.value,
    onChange = props.onChange,
    style = props.style;
  var onPickerChange = function onPickerChange(ev) {
    if (disabled || readOnly) {
      return;
    }
    var alphaHex = _alphahexMap.default[(ev.alpha / 100).toFixed(2)];
    var hex = ev.color + (ev.alpha === 100 ? '' : alphaHex);
    onChange(hex);
  };
  var onInputChange = function onInputChange(ev) {
    onChange(ev.target.value);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: 'fr-color-picker',
    style: style
  }, disabled || readOnly ? ( /*#__PURE__*/_react.default.createElement("span", {
    className: 'rc-color-picker-trigger',
    style: {
      backgroundColor: value || '#ffffff'
    }
  })) : ( /*#__PURE__*/_react.default.createElement(_rcColorPicker.default, {
    type: schema === null || schema === void 0 ? void 0 : schema.format,
    animation: 'slide-up',
    color: value && value.slice(0, 7) || '#ffffff',
    alpha: getAlphaFromHex(value),
    onChange: onPickerChange,
    disabled: true
  })), readOnly ? ( /*#__PURE__*/_react.default.createElement("span", null, value || '#ffffff')) : ( /*#__PURE__*/_react.default.createElement(_input.default, {
    className: className,
    placeholder: '#ffffff',
    disabled: disabled,
    value: value,
    onChange: onInputChange
  })));
};
var _default = exports.default = Color;