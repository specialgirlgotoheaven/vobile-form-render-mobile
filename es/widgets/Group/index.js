import React from 'react';
import "./index.css";
var prefix = 'frm-widget-group';
export default (function (props) {
  var children = props.children,
    title = props.title;
  return /*#__PURE__*/React.createElement("div", {
    className: prefix
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "-title")
  }, title), children);
});