import "antd/es/input/style";
import _Input from "antd/es/input";
import React from 'react';
import ColorPicker from 'rc-color-picker';
import alphaHexMap from './alphahexMap';
import 'rc-color-picker/assets/index.css';
import "./index.css";
// Exp: '#ffffffA6' => algha: 65
var getAlphaFromHex = function getAlphaFromHex() {
  var hex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#ffffff';
  var alphaHex = hex.slice(7);
  var alpha = 100;
  for (var key in alphaHexMap) {
    if (alphaHexMap[key] === alphaHex.toUpperCase()) {
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
    var alphaHex = alphaHexMap[(ev.alpha / 100).toFixed(2)];
    var hex = ev.color + (ev.alpha === 100 ? '' : alphaHex);
    onChange(hex);
  };
  var onInputChange = function onInputChange(ev) {
    onChange(ev.target.value);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: 'fr-color-picker',
    style: style
  }, disabled || readOnly ? ( /*#__PURE__*/React.createElement("span", {
    className: 'rc-color-picker-trigger',
    style: {
      backgroundColor: value || '#ffffff'
    }
  })) : ( /*#__PURE__*/React.createElement(ColorPicker, {
    type: schema === null || schema === void 0 ? void 0 : schema.format,
    animation: 'slide-up',
    color: value && value.slice(0, 7) || '#ffffff',
    alpha: getAlphaFromHex(value),
    onChange: onPickerChange,
    disabled: true
  })), readOnly ? ( /*#__PURE__*/React.createElement("span", null, value || '#ffffff')) : ( /*#__PURE__*/React.createElement(_Input, {
    className: className,
    placeholder: '#ffffff',
    disabled: disabled,
    value: value,
    onChange: onInputChange
  })));
};
export default Color;