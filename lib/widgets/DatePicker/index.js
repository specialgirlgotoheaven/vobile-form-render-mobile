"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _datePicker = _interopRequireDefault(require("antd-mobile/es/components/date-picker"));
var _tslib = require("tslib");
var _react = _interopRequireWildcard(require("react"));
var _utils = require("../utils");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _advancedFormat = _interopRequireDefault(require("dayjs/plugin/advancedFormat"));
var _weekOfYear = _interopRequireDefault(require("dayjs/plugin/weekOfYear"));
var _updateLocale = _interopRequireDefault(require("dayjs/plugin/updateLocale"));
var _lodashEs = require("lodash-es");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_dayjs.default.extend(_updateLocale.default);
_dayjs.default.extend(_advancedFormat.default);
_dayjs.default.extend(_weekOfYear.default);
_dayjs.default.updateLocale("en", {
  weekStart: 1
});
var _default = exports.default = function _default(props) {
  var _a = (0, _lodashEs.omit)(props, ['addons', 'schema']),
    value = _a.value,
    onChange = _a.onChange,
    _a$precision = _a.precision,
    precision = _a$precision === void 0 ? 'day' : _a$precision,
    _a$placeholder = _a.placeholder,
    placeholder = _a$placeholder === void 0 ? '请选择日期' : _a$placeholder,
    format = _a.format,
    restProps = (0, _tslib.__rest)(_a, ["value", "onChange", "precision", "placeholder", "format"]);
  var pickerRef = (0, _react.useRef)(null);
  // 使用useImperativeHandle暴露方法给外部
  (0, _react.useImperativeHandle)(props.addons.fieldRef, function () {
    return Object.assign({}, pickerRef === null || pickerRef === void 0 ? void 0 : pickerRef.current);
  });
  var dateFormat = format || (0, _utils.getFormat)(precision);
  var handleChange = function handleChange(date) {
    var dateString = (0, _dayjs.default)(date).format(dateFormat);
    onChange(dateString);
  };
  return /*#__PURE__*/_react.default.createElement(_datePicker.default, Object.assign({
    ref: pickerRef,
    value: (0, _dayjs.default)(value, dateFormat).toDate(),
    onConfirm: handleChange,
    precision: precision
  }, restProps), function (date) {
    return /*#__PURE__*/_react.default.createElement("div", null, date && value ? (0, _dayjs.default)(date).format(dateFormat) : /*#__PURE__*/_react.default.createElement("span", {
      style: {
        color: '#ccc'
      }
    }, placeholder));
  });
};