"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tslib = require("tslib");
var _react = _interopRequireWildcard(require("react"));
var _dayjs = _interopRequireDefault(require("dayjs"));
var _quarterOfYear = _interopRequireDefault(require("dayjs/plugin/quarterOfYear"));
var _utils = require("../../utils");
var _DatePicker = _interopRequireDefault(require("../../components/DatePicker"));
var _withFieldWrap = _interopRequireDefault(require("../../utils/withFieldWrap"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
_dayjs.default.extend(_quarterOfYear.default);
var DateCmpt = function DateCmpt(_a) {
  var onChange = _a.onChange,
    format = _a.format,
    value = _a.value,
    style = _a.style,
    rest = (0, _tslib.__rest)(_a, ["onChange", "format", "value", "style"]);
  var dateFormat = (0, _utils.getFormat)(format);
  var valueObj = (0, _react.useMemo)(function () {
    return (0, _utils.transformDateValue)(value, format, dateFormat);
  }, [value]);
  var handleChange = function handleChange(dateValue, dateString) {
    var newValue = dateString;
    if (format === 'week' || format === 'quarter') {
      newValue = (0, _dayjs.default)(dateValue).format(dateFormat);
    }
    onChange(newValue);
  };
  var dateParams = {
    value: valueObj,
    style: Object.assign({
      width: '100%'
    }, style),
    onChange: handleChange
  };
  // TODO: format 是在 options 里自定义的情况，是否要判断一下要不要 showTime
  if (format === 'dateTime') {
    dateParams.showTime = true;
  }
  if (['week', 'month', 'quarter', 'year'].indexOf(format) > -1) {
    dateParams.picker = format;
  }
  if (dateFormat === format) {
    dateParams.format = format;
  }
  return /*#__PURE__*/_react.default.createElement(_DatePicker.default, Object.assign({}, dateParams, rest));
};
var _default = exports.default = (0, _withFieldWrap.default)(DateCmpt);