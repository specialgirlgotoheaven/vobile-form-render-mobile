import "antd/es/card/style";
import _Card from "antd/es/card";
import React from 'react';
import BoxPanel from '../components/PanelView';
import "./index.css";
var BoxCard = function BoxCard(_ref) {
  var children = _ref.children,
    title = _ref.title,
    description = _ref.description;
  if (!title) {
    return /*#__PURE__*/React.createElement(BoxPanel, null, children);
  }
  return /*#__PURE__*/React.createElement(_Card, {
    className: 'fr-obj-card',
    title: /*#__PURE__*/React.createElement(React.Fragment, null, title, description && ( /*#__PURE__*/React.createElement("span", {
      className: 'fr-header-desc '
    }, description)))
  }, children);
};
export default BoxCard;