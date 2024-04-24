"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var prefix = 'frm-widget-group';
var _default = exports.default = function _default(props) {
  var children = props.children,
    title = props.title;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: prefix
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefix, "-title")
  }, title), children);
};