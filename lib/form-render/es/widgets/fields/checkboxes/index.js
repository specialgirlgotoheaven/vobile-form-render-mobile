"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("antd/es/space/style");
var _space = _interopRequireDefault(require("antd/es/space"));
require("antd/es/checkbox/style");
var _checkbox = _interopRequireDefault(require("antd/es/checkbox"));
var _tslib = require("tslib");
var _react = _interopRequireDefault(require("react"));
var _withFieldWrap = _interopRequireDefault(require("../../utils/withFieldWrap"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Checkboxes = function Checkboxes(props) {
  var _props$direction = props.direction,
    direction = _props$direction === void 0 ? 'row' : _props$direction,
    _props$options = props.options,
    options = _props$options === void 0 ? [] : _props$options,
    rest = (0, _tslib.__rest)(props, ["direction", "options"]);
  if (direction === 'column') {
    return /*#__PURE__*/_react.default.createElement(_checkbox.default.Group, Object.assign({}, rest), /*#__PURE__*/_react.default.createElement(_space.default, {
      direction: 'vertical'
    }, options.map(function (item) {
      var value = item.value,
        label = item.label,
        rest = (0, _tslib.__rest)(item, ["value", "label"]);
      return /*#__PURE__*/_react.default.createElement(_checkbox.default, Object.assign({
        key: value,
        value: value
      }, rest), label);
    })));
  }
  return /*#__PURE__*/_react.default.createElement(_checkbox.default.Group, Object.assign({}, rest, {
    options: options
  }));
};
var _default = exports.default = (0, _withFieldWrap.default)(Checkboxes);