"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("antd/es/button/style");
var _button = _interopRequireDefault(require("antd/es/button"));
require("antd/es/upload/style");
var _upload = _interopRequireDefault(require("antd/es/upload"));
var _UploadOutlined2 = _interopRequireDefault(require("@ant-design/icons/lib/icons/UploadOutlined"));
require("antd/es/message/style");
var _message2 = _interopRequireDefault(require("antd/es/message"));
require("antd/es/config-provider/style");
var _configProvider = _interopRequireDefault(require("antd/es/config-provider"));
var _react = _interopRequireWildcard(require("react"));
var _lodashEs = require("lodash-es");
var _utils = require("../../utils");
require("./index.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var FrUpload = function FrUpload(_ref) {
  var action = _ref.action,
    value = _ref.value,
    _onChange = _ref.onChange,
    uploadProps = _ref.uploadProps,
    buttonProps = _ref.buttonProps,
    schema = _ref.schema;
  var configCtx = (0, _react.useContext)(_configProvider.default.ConfigContext);
  var t = (0, _utils.translation)(configCtx);
  var props = Object.assign({
    name: 'file',
    type: 'file',
    action: action,
    onChange: function onChange(info) {
      if (info.file.status === 'done') {
        _message2.default.success("".concat(info.file.name, " ").concat(t('upload_success')));
        var path = (0, _lodashEs.get)(schema, 'props.path', '');
        var url = path ? (0, _lodashEs.get)(info.file.response, path) : info.file.response.url;
        _onChange(url);
      } else if (info.file.status === 'error') {
        _message2.default.error("".concat(info.file.name, " ").concat(t('upload_fail')));
      }
    },
    onRemove: function onRemove() {
      _onChange('');
    }
  }, uploadProps);
  var defaultBtnProps = {
    icon: /*#__PURE__*/_react.default.createElement(_UploadOutlined2.default, null),
    children: t('upload')
  };
  var btnProps = Object.assign(Object.assign({}, defaultBtnProps), buttonProps);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: 'fr-upload-mod'
  }, /*#__PURE__*/_react.default.createElement(_upload.default, Object.assign({}, props, {
    className: 'fr-upload-file'
  }), /*#__PURE__*/_react.default.createElement(_button.default, Object.assign({}, btnProps))), value && ( /*#__PURE__*/_react.default.createElement("a", {
    href: value,
    target: '_blank',
    rel: 'noopener noreferrer',
    className: 'fr-upload-preview'
  }, t('uploaded_address'))));
};
var _default = exports.default = FrUpload;