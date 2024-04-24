"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _card = _interopRequireDefault(require("antd-mobile/es/components/card"));
var _react = _interopRequireDefault(require("react"));
var _context = require("../../models/context");
var _zustand = require("zustand");
var _classnames = _interopRequireDefault(require("classnames"));
require("./index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var prefix = 'frm-widget-card';
var BoxCard = function BoxCard(props) {
  var children = props.children,
    description = props.description,
    title = props.title;
  var context = _react.default.useContext(_context.FRContext);
  var setIsCardMode = (0, _zustand.useStore)(context, function (store) {
    return store.setIsCardMode;
  });
  _react.default.useEffect(function () {
    setIsCardMode(true);
  }, []);
  var titleNode = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, title && /*#__PURE__*/_react.default.createElement("span", {
    className: "".concat(prefix, "-title")
  }, title), description && ( /*#__PURE__*/_react.default.createElement("span", {
    className: "".concat(prefix, "-desc")
  }, description)));
  var noTitle = !title && !description;
  var className = (0, _classnames.default)(prefix, _defineProperty({}, "".concat(prefix, "-no-title"), noTitle));
  return /*#__PURE__*/_react.default.createElement(_card.default, {
    className: className,
    title: noTitle ? null : titleNode
  }, children);
};
var _default = exports.default = BoxCard;