"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("antd/es/button/style");
var _button = _interopRequireDefault(require("antd/es/button"));
require("antd/es/space/style");
var _space = _interopRequireDefault(require("antd/es/space"));
require("antd/es/drawer/style");
var _drawer = _interopRequireDefault(require("antd/es/drawer"));
require("antd/es/config-provider/style");
var _configProvider = _interopRequireDefault(require("antd/es/config-provider"));
var _react = _interopRequireWildcard(require("react"));
var _utils = require("../utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var DrawerForm = function DrawerForm(props) {
  var children = props.children,
    onConfirm = props.onConfirm,
    onClose = props.onClose;
  var configCtx = (0, _react.useContext)(_configProvider.default.ConfigContext);
  var t = (0, _utils.translation)(configCtx);
  var drawerProps = {
    open: true
  };
  if (window.antdVersion === 'v4') {
    drawerProps = {
      visible: true
    };
  }
  return /*#__PURE__*/_react.default.createElement(_drawer.default, Object.assign({}, drawerProps, {
    width: 600,
    title: t('operate'),
    onClose: onClose,
    extra: /*#__PURE__*/_react.default.createElement(_space.default, null, /*#__PURE__*/_react.default.createElement(_button.default, {
      onClick: onClose
    }, t('cancel')), /*#__PURE__*/_react.default.createElement(_button.default, {
      type: 'primary',
      onClick: onConfirm
    }, t('confirm')))
  }), children);
};
var _default = exports.default = DrawerForm;