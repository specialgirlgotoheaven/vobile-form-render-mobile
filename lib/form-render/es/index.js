"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  mapping: true,
  useForm: true,
  connectForm: true,
  SearchForm: true,
  FormSlimRender: true
};
Object.defineProperty(exports, "FormSlimRender", {
  enumerable: true,
  get: function get() {
    return _SlimRender.default;
  }
});
Object.defineProperty(exports, "SearchForm", {
  enumerable: true,
  get: function get() {
    return _SearchForm.default;
  }
});
Object.defineProperty(exports, "connectForm", {
  enumerable: true,
  get: function get() {
    return _connectForm.default;
  }
});
exports.default = void 0;
Object.defineProperty(exports, "mapping", {
  enumerable: true,
  get: function get() {
    return _mapping.mapping;
  }
});
Object.defineProperty(exports, "useForm", {
  enumerable: true,
  get: function get() {
    return _useForm.default;
  }
});
var _formCore = _interopRequireDefault(require("./form-core"));
var _withProvider = _interopRequireDefault(require("./withProvider"));
var defaultWidgets = _interopRequireWildcard(require("./widgets"));
Object.keys(defaultWidgets).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === defaultWidgets[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return defaultWidgets[key];
    }
  });
});
var _mapping = require("./models/mapping");
var _useForm = _interopRequireDefault(require("./models/useForm"));
var _connectForm = _interopRequireDefault(require("./form-core/connectForm"));
var _SearchForm = _interopRequireDefault(require("./derivative/SearchForm"));
var _SlimRender = _interopRequireDefault(require("./derivative/SlimRender"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = exports.default = (0, _withProvider.default)(_formCore.default, defaultWidgets);