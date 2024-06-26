"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withProvider;
require("antd/es/config-provider/style");
var _configProvider = _interopRequireDefault(require("antd/es/config-provider"));
var _tslib = require("tslib");
var _react = _interopRequireWildcard(require("react"));
var _dayjs = _interopRequireDefault(require("dayjs"));
var _ahooks = require("ahooks");
var _zh_CN = _interopRequireDefault(require("antd/lib/locale/zh_CN"));
var _en_US = _interopRequireDefault(require("antd/lib/locale/en_US"));
var _locales = _interopRequireDefault(require("./locales"));
require("dayjs/locale/zh-cn");
var _store = require("./models/store");
var _context = require("./models/context");
var _validateMessage = require("./models/validateMessage");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function withProvider(Element, defaultWidgets) {
  return function (props) {
    var configProvider = props.configProvider,
      _props$locale = props.locale,
      locale = _props$locale === void 0 ? 'zh-CN' : _props$locale,
      widgets = props.widgets,
      methods = props.methods,
      form = props.form,
      validateMessages = props.validateMessages,
      _props$globalProps = props.globalProps,
      globalProps = _props$globalProps === void 0 ? {} : _props$globalProps,
      _props$globalConfig = props.globalConfig,
      globalConfig = _props$globalConfig === void 0 ? {} : _props$globalConfig,
      otherProps = (0, _tslib.__rest)(props, ["configProvider", "locale", "widgets", "methods", "form", "validateMessages", "globalProps", "globalConfig"]);
    var storeRef = (0, _react.useRef)((0, _store.createStore)());
    var store = storeRef.current;
    (0, _react.useEffect)(function () {
      if (locale === 'en-US') {
        _dayjs.default.locale('en');
        return;
      }
      _dayjs.default.locale('zh-cn');
    }, [locale]);
    (0, _ahooks.useUnmount)(function () {
      form.resetFields();
    });
    if (!form) {
      console.warn('Please provide a form instance to FormRender');
      return null;
    }
    var antdLocale = locale === 'zh-CN' ? _zh_CN.default : _en_US.default;
    var formValidateMessages = locale === 'zh-CN' ? _validateMessage.validateMessagesCN : _validateMessage.validateMessagesEN;
    var configContext = {
      locale: locale,
      widgets: Object.assign(Object.assign({}, defaultWidgets), widgets),
      methods: methods,
      form: form,
      globalProps: globalProps,
      globalConfig: globalConfig
    };
    var langPack = Object.assign(Object.assign(Object.assign({}, antdLocale), {
      'FormRender': _locales.default[locale]
    }), configProvider === null || configProvider === void 0 ? void 0 : configProvider.locale);
    return /*#__PURE__*/_react.default.createElement(_configProvider.default, Object.assign({}, configProvider, {
      locale: langPack,
      form: {
        validateMessages: Object.assign(Object.assign({}, formValidateMessages), validateMessages)
      }
    }), /*#__PURE__*/_react.default.createElement(_context.ConfigContext.Provider, {
      value: configContext
    }, /*#__PURE__*/_react.default.createElement(_context.FRContext.Provider, {
      value: store
    }, /*#__PURE__*/_react.default.createElement(Element, Object.assign({
      form: form
    }, otherProps)))));
  };
}