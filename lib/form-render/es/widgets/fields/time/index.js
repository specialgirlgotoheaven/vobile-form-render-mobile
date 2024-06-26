"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tslib = require("tslib");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _react = _interopRequireDefault(require("react"));
var _TimePicker = _interopRequireDefault(require("../../components/TimePicker"));
var _utils = require("../../utils");
var _withFieldWrap = _interopRequireDefault(require("../../utils/withFieldWrap"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Time = function Time(_a) {
  var onChange = _a.onChange,
    _a$format = _a.format,
    format = _a$format === void 0 ? 'time' : _a$format,
    value = _a.value,
    style = _a.style,
    rest = (0, _tslib.__rest)(_a, ["onChange", "format", "value", "style"]);
  var timeFormat = (0, _utils.getFormat)(format);
  var _value = value ? (0, _dayjs.default)(value, timeFormat) : undefined;
  var handleChange = function handleChange(_, valueStr) {
    onChange(valueStr);
  };
  var timeParams = Object.assign({
    value: _value,
    style: Object.assign({
      width: '100%'
    }, style),
    onChange: handleChange,
    format: timeFormat
  }, rest);
  return /*#__PURE__*/_react.default.createElement(_TimePicker.default, Object.assign({}, timeParams));
};
var _default = exports.default = (0, _withFieldWrap.default)(Time);