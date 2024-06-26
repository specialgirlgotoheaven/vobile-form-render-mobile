"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("antd/es/checkbox/style");
var _checkbox = _interopRequireDefault(require("antd/es/checkbox"));
var _tslib = require("tslib");
var _react = _interopRequireDefault(require("react"));
var _withFieldWrap = _interopRequireDefault(require("../../utils/withFieldWrap"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var CheckBox = function CheckBox(_a) {
  var title = _a.title,
    rest = (0, _tslib.__rest)(_a, ["title"]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_checkbox.default, Object.assign({}, rest)), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      marginLeft: '12px'
    }
  }, title));
};
var _default = exports.default = (0, _withFieldWrap.default)(CheckBox);