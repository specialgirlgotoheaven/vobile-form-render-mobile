"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("antd/es/slider/style");
var _slider = _interopRequireDefault(require("antd/es/slider"));
require("antd/es/input-number/style");
var _inputNumber = _interopRequireDefault(require("antd/es/input-number"));
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
  }, p.value === (undefined || '') ? '-' : p.value + '%')) : ( /*#__PURE__*/React.createElement(_inputNumber.default, Object.assign({}, p.options, setting, {
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
  }, /*#__PURE__*/React.createElement(_slider.default, Object.assign({
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
var _default = exports.default = PercentSlider;