"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("antd/es/form/style");
var _form = _interopRequireDefault(require("antd/es/form"));
var _tslib = require("tslib");
var _react = _interopRequireWildcard(require("react"));
var _context = require("../../models/context");
var _expression = require("../../models/expression");
var _fieldShouldUpdate = _interopRequireDefault(require("../../models/fieldShouldUpdate"));
var _main = _interopRequireDefault(require("./main"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = exports.default = function _default(props) {
  var _a;
  var schema = props.schema,
    rootPath = props.rootPath;
  var _b = schema || {},
    items = _b.items,
    listSchema = (0, _tslib.__rest)(_b, ["items"]);
  var store = (0, _react.useContext)(_context.FRContext);
  var _store$getState = store.getState(),
    formSchema = _store$getState.schema;
  var configCtx = (0, _react.useContext)(_context.ConfigContext);
  var mustacheDisabled = (_a = configCtx === null || configCtx === void 0 ? void 0 : configCtx.globalConfig) === null || _a === void 0 ? void 0 : _a.mustacheDisabled;
  var dependencies = schema === null || schema === void 0 ? void 0 : schema.dependencies;
  // No function expressions exist
  if (!(0, _expression.isHasExpression)(schema) && !mustacheDisabled && (!dependencies || !(dependencies === null || dependencies === void 0 ? void 0 : dependencies.length))) {
    return /*#__PURE__*/_react.default.createElement(_main.default, Object.assign({
      configContext: configCtx
    }, props));
  }
  // Need to listen to form values for dynamic rendering
  return /*#__PURE__*/_react.default.createElement(_form.default.Item, {
    noStyle: true,
    shouldUpdate: (0, _fieldShouldUpdate.default)(JSON.stringify(listSchema || {}), rootPath, dependencies, true)
  }, function (form) {
    var formData = form.getFieldsValue(true);
    var newListSchema = mustacheDisabled ? schema : (0, _expression.parseAllExpression)(listSchema, formData, rootPath, formSchema);
    return /*#__PURE__*/_react.default.createElement(_main.default, Object.assign({
      configContext: configCtx
    }, props, {
      schema: Object.assign({
        items: items
      }, newListSchema),
      rootPath: rootPath
    }));
  });
};