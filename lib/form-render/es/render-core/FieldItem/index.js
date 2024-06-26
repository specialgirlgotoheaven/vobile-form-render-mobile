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
var _module = require("./module");
var _context = require("../../models/context");
var _expression = require("../../models/expression");
var _fieldShouldUpdate = _interopRequireDefault(require("../../models/fieldShouldUpdate"));
var _main = _interopRequireDefault(require("./main"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = exports.default = function _default(props) {
  var _a, _b;
  var schema = props.schema,
    rootPath = props.rootPath,
    restProps = (0, _tslib.__rest)(props, ["schema", "rootPath"]);
  var store = (0, _react.useContext)(_context.FRContext);
  var _store$getState = store.getState(),
    formSchema = _store$getState.schema;
  var configCtx = (0, _react.useContext)(_context.ConfigContext);
  var mustacheDisabled = (_a = configCtx === null || configCtx === void 0 ? void 0 : configCtx.globalConfig) === null || _a === void 0 ? void 0 : _a.mustacheDisabled;
  var shouldUpdateOpen = (_b = configCtx === null || configCtx === void 0 ? void 0 : configCtx.globalConfig) === null || _b === void 0 ? void 0 : _b.shouldUpdateOpen;
  var dependencies = schema === null || schema === void 0 ? void 0 : schema.dependencies;
  // No function expressions exist
  if (!(0, _expression.isHasExpression)(schema) && !mustacheDisabled && (!dependencies || !(dependencies === null || dependencies === void 0 ? void 0 : dependencies.length))) {
    return /*#__PURE__*/_react.default.createElement(_main.default, Object.assign({}, props, {
      store: store,
      configCtx: configCtx
    }));
  }
  var schemaStr = JSON.stringify(schema);
  // Need to listen to form values for dynamic rendering
  return /*#__PURE__*/_react.default.createElement(_form.default.Item, {
    noStyle: true,
    shouldUpdate: (0, _fieldShouldUpdate.default)(schemaStr, rootPath, dependencies, shouldUpdateOpen)
  }, function (form) {
    var formData = form.getFieldsValue(true);
    var formDependencies = [];
    var dependValues = (dependencies || []).map(function (depPath) {
      var item = [];
      formDependencies.push(item);
      return (0, _module.getDependValues)(formData, depPath, props, item);
    });
    var newSchema = mustacheDisabled ? schema : (0, _expression.parseAllExpression)(schema, formData, rootPath, formSchema);
    return /*#__PURE__*/_react.default.createElement(_main.default, Object.assign({
      schema: Object.assign(Object.assign({}, newSchema), {
        dependencies: formDependencies
      }),
      rootPath: rootPath
    }, restProps, {
      dependValues: dependValues,
      store: store,
      configCtx: configCtx
    }));
  });
};