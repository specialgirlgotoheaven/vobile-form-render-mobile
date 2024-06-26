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
var _DatePicker = _interopRequireDefault(require("../../components/DatePicker"));
var _utils = require("../../utils");
var _withFieldWrap = _interopRequireDefault(require("../../utils/withFieldWrap"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * Updated by Tw93 on 2019-12-08.
 * 日历多选组件
 */

_dayjs.default.extend(_quarterOfYear.default);
var RangePicker = _DatePicker.default.RangePicker;
var DateRange = function DateRange(_a) {
  var onChange = _a.onChange,
    format = _a.format,
    value = _a.value,
    style = _a.style,
    rest = (0, _tslib.__rest)(_a, ["onChange", "format", "value", "style"]);
  var dateFormat = (0, _utils.getFormat)(format);
  var valueObj = (0, _react.useMemo)(function () {
    if (!value) {
      return value;
    }
    return value.map(function (item) {
      return (0, _utils.transformDateValue)(item, format, dateFormat);
    });
  }, [value]);
  var handleChange = function handleChange(val, _stringList) {
    var stringList = _stringList;
    if (['week', 'quarter'].includes(format)) {
      stringList = (val || []).map(function (item) {
        return (0, _dayjs.default)(item).format(dateFormat);
      });
    }
    var isPass = stringList.every(function (item) {
      return !!item;
    });
    if (!isPass) {
      stringList = null;
    }
    onChange(stringList);
  };
  var dateParams = {
    value: valueObj,
    style: Object.assign({
      width: '100%'
    }, style),
    onChange: handleChange
  };
  // TODO: format是在options里自定义的情况，是否要判断一下要不要showTime
  if (format === 'dateTime') {
    dateParams.showTime = true;
  }
  if (['week', 'month', 'quarter', 'year'].indexOf(format) > -1) {
    dateParams.picker = format;
  }
  dateParams = Object.assign(Object.assign({}, dateParams), rest);
  if (dateFormat === format) {
    dateParams.format = format;
  }
  return /*#__PURE__*/_react.default.createElement(RangePicker, Object.assign({}, dateParams));
};
var _default = exports.default = (0, _withFieldWrap.default)(DateRange);