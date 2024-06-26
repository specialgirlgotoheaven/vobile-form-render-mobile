"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _PanelView = _interopRequireDefault(require("../components/PanelView"));
require("./index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var FLineTitle = function FLineTitle(_ref) {
  var children = _ref.children,
    title = _ref.title,
    description = _ref.description;
  if (!title) {
    return /*#__PURE__*/_react.default.createElement(_PanelView.default, null, children);
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: 'fr-obj-line-title'
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: 'fr-obj-header'
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: 'fr-header-title'
  }, title), description && /*#__PURE__*/_react.default.createElement("span", {
    className: 'fr-header-desc'
  }, description)), /*#__PURE__*/_react.default.createElement("div", {
    className: 'fr-obj-content'
  }, children));
};
var _default = exports.default = FLineTitle;