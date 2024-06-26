"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _DownOutlined2 = _interopRequireDefault(require("@ant-design/icons/lib/icons/DownOutlined"));
var _UpOutlined2 = _interopRequireDefault(require("@ant-design/icons/lib/icons/UpOutlined"));
require("antd/es/button/style");
var _button = _interopRequireDefault(require("antd/es/button"));
require("antd/es/space/style");
var _space = _interopRequireDefault(require("antd/es/space"));
require("antd/es/config-provider/style");
var _configProvider = _interopRequireDefault(require("antd/es/config-provider"));
var _react = _interopRequireWildcard(require("react"));
var _utils = require("../../utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var ActionView = function ActionView(props) {
  var onReset = props.onReset,
    searchBtnRender = props.searchBtnRender,
    style = props.style,
    className = props.className,
    form = props.form,
    searchText = props.searchText,
    resetText = props.resetText,
    hasCollapse = props.hasCollapse,
    setLimitHeight = props.setLimitHeight,
    setExpand = props.setExpand,
    isExpand = props.isExpand,
    loading = props.loading,
    retainBtn = props.retainBtn,
    mode = props.mode;
  var configCtx = (0, _react.useContext)(_configProvider.default.ConfigContext);
  var t = (0, _utils.translation)(configCtx);
  var handleReset = function handleReset() {
    if (onReset) {
      onReset(form);
      return;
    }
    form.resetFields();
    form.submit();
  };
  var handleCollapse = function handleCollapse() {
    setExpand(!isExpand);
  };
  var searchBtnArr = typeof searchBtnRender === 'function' ? searchBtnRender(form.submit, handleReset, {
    loading: loading
  }) : [];
  if (searchBtnRender) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: 'flex justify-end w-100'
    }, Array.isArray(searchBtnArr) && searchBtnArr.map(function (ui, idx) {
      return /*#__PURE__*/_react.default.createElement("div", {
        key: idx.toString(),
        style: {
          marginLeft: 8
        }
      }, ui);
    }));
  }
  var submitShow = mode === 'simple' && (typeof retainBtn === 'boolean' || (retainBtn === null || retainBtn === void 0 ? void 0 : retainBtn.includes('submit'))) || mode !== 'simple';
  var resetShow = mode === 'simple' && (typeof retainBtn === 'boolean' || (retainBtn === null || retainBtn === void 0 ? void 0 : retainBtn.includes('reset'))) || mode !== 'simple';
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-end w-100 ".concat(className || ''),
    style: style
  }, /*#__PURE__*/_react.default.createElement(_space.default, null, submitShow && /*#__PURE__*/_react.default.createElement(_button.default, {
    loading: loading,
    type: 'primary',
    onClick: form.submit
  }, searchText), resetShow && /*#__PURE__*/_react.default.createElement(_button.default, {
    onClick: handleReset
  }, resetText), hasCollapse && ( /*#__PURE__*/_react.default.createElement("a", {
    onClick: handleCollapse,
    style: {
      cursor: 'pointer'
    }
  }, isExpand ? ( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, t('fold'), /*#__PURE__*/_react.default.createElement(_UpOutlined2.default, null))) : ( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, t('expand'), /*#__PURE__*/_react.default.createElement(_DownOutlined2.default, null)))))));
};
var _default = exports.default = ActionView;