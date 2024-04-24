"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _form = _interopRequireDefault(require("antd-mobile/es/components/form"));
var _tslib = require("tslib");
var _react = _interopRequireWildcard(require("react"));
var _context = require("../../models/context");
var _expression = require("../../../es/form-render/models/expression");
var _module = require("./module");
var _main = _interopRequireDefault(require("./main"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = exports.default = function _default(props) {
  var schema = props.schema,
    rootPath = props.rootPath,
    otherProps = (0, _tslib.__rest)(props, ["schema", "rootPath"]);
  var store = (0, _react.useContext)(_context.FRContext);
  var _store$getState = store.getState(),
    formSchema = _store$getState.schema;
  var dependencies = schema === null || schema === void 0 ? void 0 : schema.dependencies;
  // No function expressions exist
  if (!(0, _expression.isHasExpression)(schema) && !(schema === null || schema === void 0 ? void 0 : schema.dependencies)) {
    return /*#__PURE__*/_react.default.createElement(_main.default, Object.assign({}, props, {
      store: store
    }));
  }
  // Need to listen to form values for dynamic rendering
  return /*#__PURE__*/_react.default.createElement(_form.default.Item, {
    noStyle: true,
    //dependencies={schema.dependencies}
    shouldUpdate: function shouldUpdate(prevValues, curValues) {
      // Observe whether the value of a function expression dependency has changed
      // TODO 进行优化
      return true;
    }
  }, function (form) {
    var formData = form.getFieldsValue(true);
    var formDependencies = [];
    var dependValues = (dependencies || []).map(function (depPath) {
      var item = [];
      formDependencies.push(item);
      return (0, _module.getDependValues)(formData, depPath, props, item);
    });
    var newSchema = (0, _expression.parseAllExpression)(schema, formData, rootPath, formSchema);
    return /*#__PURE__*/_react.default.createElement(_main.default, Object.assign({
      schema: Object.assign(Object.assign({}, newSchema), {
        dependencies: formDependencies
      }),
      rootPath: rootPath
    }, otherProps, {
      dependValues: dependValues,
      store: store
    }));
  });
};