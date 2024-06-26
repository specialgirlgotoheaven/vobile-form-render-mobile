import "antd/es/input-number/style";
import _InputNumber from "antd/es/input-number";
import "antd/es/slider/style";
import _Slider from "antd/es/slider";
import { __rest } from "tslib";
/**
 * 滑动输入组件
 */
import React from 'react';
import withFieldWrap from '../../utils/withFieldWrap';
import "./index.css";
var SliderWithNumber = function SliderWithNumber(_a) {
  var schema = _a.schema,
    value = _a.value,
    onChange = _a.onChange,
    hideInput = _a.hideInput,
    inputProps = _a.inputProps,
    style = _a.style,
    rest = __rest(_a, ["schema", "value", "onChange", "hideInput", "inputProps", "style"]);
  var max = schema.max,
    min = schema.min,
    step = schema.step;
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
  return /*#__PURE__*/React.createElement("div", {
    className: 'fr-slider',
    style: style
  }, /*#__PURE__*/React.createElement(_Slider, Object.assign({
    style: {
      flexGrow: 1,
      marginRight: hideInput ? 0 : 12
    }
  }, setting, {
    onChange: onChange,
    value: typeof value === 'number' ? value : min || 0
  }, rest)), hideInput ? null : ( /*#__PURE__*/React.createElement(_InputNumber, Object.assign({}, setting, inputProps, {
    style: {
      width: '90px'
    },
    value: value,
    onChange: onChange
  }))));
};
export default withFieldWrap(SliderWithNumber, ['addons', 'dependValues']);