import _Card from "antd-mobile/es/components/card";
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';
import { FRContext } from '../../models/context';
import { useStore } from 'zustand';
import cx from 'classnames';
import "./index.css";
var prefix = 'frm-widget-card';
var BoxCard = function BoxCard(props) {
  var children = props.children,
    description = props.description,
    title = props.title;
  var context = React.useContext(FRContext);
  var setIsCardMode = useStore(context, function (store) {
    return store.setIsCardMode;
  });
  React.useEffect(function () {
    setIsCardMode(true);
  }, []);
  var titleNode = /*#__PURE__*/React.createElement(React.Fragment, null, title && /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefix, "-title")
  }, title), description && ( /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefix, "-desc")
  }, description)));
  var noTitle = !title && !description;
  var className = cx(prefix, _defineProperty({}, "".concat(prefix, "-no-title"), noTitle));
  return /*#__PURE__*/React.createElement(_Card, {
    className: className,
    title: noTitle ? null : titleNode
  }, children);
};
export default BoxCard;