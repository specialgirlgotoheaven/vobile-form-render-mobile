import "antd/es/slider/style";
import _Slider from "antd/es/slider";
import "antd/es/input-number/style";
import _InputNumber from "antd/es/input-number";
import * as React from 'react';
var PercentSlider = function PercentSlider(p) {
  var _p$schema = p.schema,
    max = _p$schema.max,
    min = _p$schema.min,
    step = _p$schema.step;
  var setting = {};
  if (max || max === 0) {
    setting = {
      max: max
    };
  }
  if (min || min === 0) {
    setting = Object.assign(Object.assign({}, setting), {
      min: min
    });
  }
  if (step) {
    setting = Object.assign(Object.assign({}, setting), {
      step: step
    });
  }
  var hideNumber = false;
  if (p.options && p.options.hideNumber) {
    hideNumber = true;
  }
  var isPercent = function isPercent(string) {
    return typeof string === 'string' && string.endsWith('%');
  };
  var numberValue = 100;
  if (isPercent(p.value)) {
    try {
      numberValue = Number(p.value.split('%')[0]);
      if (Number.isNaN(numberValue)) numberValue = 100;
    } catch (error) {}
  }
  var handleChange = function handleChange(newNumber) {
    var a = newNumber + '%';
    p.onChange(a);
  };
  var renderNumber = p.readonly ? ( /*#__PURE__*/React.createElement("span", {
    style: {
      width: '80px'
    }
  }, p.value === (undefined || '') ? '-' : p.value + '%')) : ( /*#__PURE__*/React.createElement(_InputNumber, Object.assign({}, p.options, setting, {
    style: {
      width: '80px'
    },
    value: numberValue,
    disabled: p.disabled,
    onChange: handleChange,
    formatter: function formatter(value) {
      return "".concat(value, "%");
    },
    parser: function parser(value) {
      return Number(value.replace('%', ''));
    }
  })));
  return /*#__PURE__*/React.createElement("div", {
    className: "fr-slider"
  }, /*#__PURE__*/React.createElement(_Slider, Object.assign({
    style: {
      flexGrow: 1,
      marginRight: hideNumber ? 0 : 12
    }
  }, setting, {
    onChange: handleChange,
    max: 100,
    tooltip: {
      formatter: function formatter(v) {
        return v + '%';
      }
    },
    value: numberValue || 100,
    disabled: p.disabled || p.readonly
  })), hideNumber ? null : renderNumber);
};
export default PercentSlider;