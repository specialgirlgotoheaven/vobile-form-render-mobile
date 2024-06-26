"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("antd/es/card/style");
var _card = _interopRequireDefault(require("antd/es/card"));
var _react = _interopRequireDefault(require("react"));
var _PanelView = _interopRequireDefault(require("../components/PanelView"));
require("./index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var BoxCard = function BoxCard(_ref) {
  var children = _ref.children,
    title = _ref.title,
    description = _ref.description;
  if (!title) {
    return /*#__PURE__*/_react.default.createElement(_PanelView.default, null, children);
  }
  return /*#__PURE__*/_react.default.createElement(_card.default, {
    className: 'fr-obj-card',
    title: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, title, description && ( /*#__PURE__*/_react.default.createElement("span", {
      className: 'fr-header-desc '
    }, description)))
  }, children);
};
var _default = exports.default = BoxCard;