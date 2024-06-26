"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var HeaderTitle = function HeaderTitle(props) {
  var title = props.title,
    description = props.description;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: 'fr-obj-header'
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: 'fr-header-title'
  }, title), description && /*#__PURE__*/_react.default.createElement("span", {
    className: 'fr-header-desc'
  }, "( ", description, " )"));
};
var _default = exports.default = HeaderTitle;