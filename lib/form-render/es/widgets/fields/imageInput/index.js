"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("antd/es/input/style");
var _input = _interopRequireDefault(require("antd/es/input"));
var _PictureOutlined2 = _interopRequireDefault(require("@ant-design/icons/lib/icons/PictureOutlined"));
require("antd/es/popover/style");
var _popover = _interopRequireDefault(require("antd/es/popover"));
require("antd/es/config-provider/style");
var _configProvider = _interopRequireDefault(require("antd/es/config-provider"));
var _tslib = require("tslib");
var _react = _interopRequireWildcard(require("react"));
var _utils = require("../../utils");
var _withFieldWrap = _interopRequireDefault(require("../../utils/withFieldWrap"));
require("./index.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var DEFAULT_IMG = 'https://img.alicdn.com/tfs/TB14tSiKhTpK1RjSZFKXXa2wXXa-354-330.png';
var PreviewNode = function PreviewNode(_ref) {
  var value = _ref.value;
  var configCtx = (0, _react.useContext)(_configProvider.default.ConfigContext);
  var t = (0, _utils.translation)(configCtx);
  return /*#__PURE__*/_react.default.createElement(_popover.default, {
    content: /*#__PURE__*/_react.default.createElement("img", {
      src: value || DEFAULT_IMG,
      alt: t('img_src_error'),
      className: 'fr-preview-image'
    }),
    className: 'fr-preview',
    placement: 'bottom'
  }, /*#__PURE__*/_react.default.createElement(_PictureOutlined2.default, null));
};
var ImageInput = function ImageInput(_a) {
  var value = _a.value,
    rest = (0, _tslib.__rest)(_a, ["value"]);
  return /*#__PURE__*/_react.default.createElement(_input.default, Object.assign({
    value: value,
    addonAfter: /*#__PURE__*/_react.default.createElement(PreviewNode, {
      value: value
    })
  }, rest));
};
var _default = exports.default = (0, _withFieldWrap.default)(ImageInput);