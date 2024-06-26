"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("antd/es/input/style");
var _input = _interopRequireDefault(require("antd/es/input"));
var _react = _interopRequireDefault(require("react"));
var _withFieldWrap = _interopRequireDefault(require("../../utils/withFieldWrap"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var TextArea = function TextArea(props) {
  var finalProps = Object.assign({
    autoSize: {
      minRows: 3
    }
  }, props);
  if (finalProps.rows) delete finalProps.autoSize;
  return /*#__PURE__*/_react.default.createElement(_input.default.TextArea, Object.assign({}, finalProps));
};
var _default = exports.default = (0, _withFieldWrap.default)(TextArea);