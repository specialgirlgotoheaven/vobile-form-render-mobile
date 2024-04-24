"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _picker = _interopRequireDefault(require("antd-mobile/es/components/picker"));
var _tslib = require("tslib");
var _react = _interopRequireWildcard(require("react"));
var _lodashEs = require("lodash-es");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = exports.default = function _default(props) {
  var _a = (0, _lodashEs.omit)(props, ['addons', 'schema']),
    value = _a.value,
    onChange = _a.onChange,
    _a$placeholder = _a.placeholder,
    placeholder = _a$placeholder === void 0 ? '请选择' : _a$placeholder,
    options = _a.options,
    columns = _a.columns,
    restProps = (0, _tslib.__rest)(_a, ["value", "onChange", "placeholder", "options", "columns"]);
  var pickerRef = (0, _react.useRef)(null);
  // 使用useImperativeHandle暴露方法给外部
  (0, _react.useImperativeHandle)(props.addons.fieldRef, function () {
    return Object.assign({}, pickerRef === null || pickerRef === void 0 ? void 0 : pickerRef.current);
  });
  // 只有一列的场景更多，这里兼容下
  var finalColumns = _react.default.useMemo(function () {
    if (columns && columns.length > 0) {
      return columns;
    } else {
      return [options];
    }
  }, [options, columns]);
  return /*#__PURE__*/_react.default.createElement(_picker.default, Object.assign({
    value: value,
    onConfirm: function onConfirm(val) {
      return onChange(val);
    },
    ref: pickerRef,
    columns: finalColumns
  }, restProps), function (items) {
    if (items.every(function (i) {
      return i === null;
    })) {
      return /*#__PURE__*/_react.default.createElement("span", {
        style: {
          color: '#ccc'
        }
      }, placeholder);
    } else {
      return items.map(function (i) {
        var _a;
        return (_a = i === null || i === void 0 ? void 0 : i.label) !== null && _a !== void 0 ? _a : '未选择';
      }).join('-');
    }
  });
};