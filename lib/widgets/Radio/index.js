"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _space = _interopRequireDefault(require("antd-mobile/es/components/space"));
var _radio = _interopRequireDefault(require("antd-mobile/es/components/radio"));
var _tslib = require("tslib");
var _react = _interopRequireDefault(require("react"));
var _lodashEs = require("lodash-es");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = exports.default = function _default(props) {
  var _a = (0, _lodashEs.omit)(props, ['addons', 'schema']),
    options = _a.options,
    rest = (0, _tslib.__rest)(_a, ["options"]);
  return /*#__PURE__*/_react.default.createElement(_radio.default.Group, Object.assign({}, rest), /*#__PURE__*/_react.default.createElement(_space.default, {
    direction: 'horizontal',
    wrap: true
  }, options.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_radio.default, {
      value: item.value,
      key: item.value
    }, item.label);
  })));
};