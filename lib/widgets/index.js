"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Card", {
  enumerable: true,
  get: function get() {
    return _Card.default;
  }
});
Object.defineProperty(exports, "Cascader", {
  enumerable: true,
  get: function get() {
    return _Cascader.default;
  }
});
Object.defineProperty(exports, "DatePicker", {
  enumerable: true,
  get: function get() {
    return _DatePicker.default;
  }
});
Object.defineProperty(exports, "Group", {
  enumerable: true,
  get: function get() {
    return _Group.default;
  }
});
Object.defineProperty(exports, "Html", {
  enumerable: true,
  get: function get() {
    return _Html.default;
  }
});
exports.Input = void 0;
Object.defineProperty(exports, "Picker", {
  enumerable: true,
  get: function get() {
    return _Picker.default;
  }
});
Object.defineProperty(exports, "Radio", {
  enumerable: true,
  get: function get() {
    return _Radio.default;
  }
});
exports.TextArea = exports.Switch = exports.Stepper = exports.Slider = exports.Selector = exports.Rate = void 0;
var _stepper = _interopRequireDefault(require("antd-mobile/es/components/stepper"));
var _switch = _interopRequireDefault(require("antd-mobile/es/components/switch"));
var _selector = _interopRequireDefault(require("antd-mobile/es/components/selector"));
var _rate = _interopRequireDefault(require("antd-mobile/es/components/rate"));
var _textArea = _interopRequireDefault(require("antd-mobile/es/components/text-area"));
var _slider = _interopRequireDefault(require("antd-mobile/es/components/slider"));
var _input = _interopRequireDefault(require("antd-mobile/es/components/input"));
var _react = _interopRequireDefault(require("react"));
var _lodashEs = require("lodash-es");
var _Radio = _interopRequireDefault(require("./Radio"));
var _DatePicker = _interopRequireDefault(require("./DatePicker"));
var _Cascader = _interopRequireDefault(require("./Cascader"));
var _Html = _interopRequireDefault(require("./Html"));
var _Picker = _interopRequireDefault(require("./Picker"));
var _Group = _interopRequireDefault(require("./Group"));
var _Card = _interopRequireDefault(require("./Card"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var widgetHoc = function widgetHoc(Widget) {
  return function (props) {
    var widgetProps = (0, _lodashEs.omit)(props, ['addons', 'schema']);
    return /*#__PURE__*/_react.default.createElement(Widget, Object.assign({}, widgetProps));
  };
};
var Input = exports.Input = widgetHoc(_input.default);
var Slider = exports.Slider = widgetHoc(_slider.default);
var TextArea = exports.TextArea = widgetHoc(_textArea.default);
var Rate = exports.Rate = widgetHoc(_rate.default);
var Selector = exports.Selector = widgetHoc(_selector.default);
var Switch = exports.Switch = widgetHoc(_switch.default);
var Stepper = exports.Stepper = widgetHoc(_stepper.default);

// layout widget

// export { default as Collapse } from './Collapse';