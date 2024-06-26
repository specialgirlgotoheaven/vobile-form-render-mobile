"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("antd/es/input/style");
var _input = _interopRequireDefault(require("antd/es/input"));
require("antd/es/config-provider/style");
var _configProvider = _interopRequireDefault(require("antd/es/config-provider"));
var _tslib = require("tslib");
var _react = _interopRequireWildcard(require("react"));
var _utils = require("../../utils");
var _withFieldWrap = _interopRequireDefault(require("../../utils/withFieldWrap"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var UrlNode = function UrlNode(props) {
  var configCtx = (0, _react.useContext)(_configProvider.default.ConfigContext);
  var t = (0, _utils.translation)(configCtx);
  var value = props.value,
    _props$addonText = props.addonText,
    addonText = _props$addonText === void 0 ? t('test_src') : _props$addonText;
  var useUrl = (0, _utils.isUrl)(value);
  if (useUrl) {
    return /*#__PURE__*/_react.default.createElement("a", {
      target: "_blank",
      href: value
    }, addonText);
  }
  return /*#__PURE__*/_react.default.createElement("div", null, addonText);
};
var UrlInput = function UrlInput(_a) {
  var value = _a.value,
    prefix = _a.prefix,
    suffix = _a.suffix,
    addonText = _a.addonText,
    onChange = _a.onChange,
    rest = (0, _tslib.__rest)(_a, ["value", "prefix", "suffix", "addonText", "onChange"]);
  var _value = value || '';
  if (prefix) {
    _value = _value.replace(prefix, '');
  }
  if (suffix) {
    _value = _value.replace(suffix, '');
  }
  var handleChange = function handleChange(e) {
    var _value = e.target.value;
    if (!_value) {
      onChange === null || onChange === void 0 ? void 0 : onChange(_value);
      return;
    }
    if (prefix) {
      _value = prefix + _value;
    }
    if (suffix) {
      _value = _value + suffix;
    }
    onChange === null || onChange === void 0 ? void 0 : onChange(_value);
  };
  return /*#__PURE__*/_react.default.createElement(_input.default, Object.assign({
    value: _value,
    prefix: prefix,
    suffix: suffix,
    onChange: handleChange,
    addonAfter: /*#__PURE__*/_react.default.createElement(UrlNode, {
      value: value,
      addonText: addonText
    })
  }, rest));
};
var _default = exports.default = (0, _withFieldWrap.default)(UrlInput);