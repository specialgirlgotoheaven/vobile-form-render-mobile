"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("antd/es/input-number/style");
var _inputNumber = _interopRequireDefault(require("antd/es/input-number"));
require("antd/es/slider/style");
var _slider = _interopRequireDefault(require("antd/es/slider"));
var _tslib = require("tslib");
var _react = _interopRequireDefault(require("react"));
var _withFieldWrap = _interopRequireDefault(require("../../utils/withFieldWrap"));
require("./index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * 滑动输入组件
 */

var SliderWithNumber = function SliderWithNumber(_a) {
  var schema = _a.schema,
    value = _a.value,
    onChange = _a.onChange,
    hideInput = _a.hideInput,
    inputProps = _a.inputProps,
    style = _a.style,
    rest = (0, _tslib.__rest)(_a, ["schema", "value", "onChange", "hideInput", "inputProps", "style"]);
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
  return /*#__PURE__*/_react.default.createElement("div", {
    className: 'fr-slider',
    style: style
  }, /*#__PURE__*/_react.default.createElement(_slider.default, Object.assign({
    style: {
      flexGrow: 1,
      marginRight: hideInput ? 0 : 12
    }
  }, setting, {
    onChange: onChange,
    value: typeof value === 'number' ? value : min || 0
  }, rest)), hideInput ? null : ( /*#__PURE__*/_react.default.createElement(_inputNumber.default, Object.assign({}, setting, inputProps, {
    style: {
      width: '90px'
    },
    value: value,
    onChange: onChange
  }))));
};
var _default = exports.default = (0, _withFieldWrap.default)(SliderWithNumber, ['addons', 'dependValues']);