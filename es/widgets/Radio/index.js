import _Space from "antd-mobile/es/components/space";
import _Radio from "antd-mobile/es/components/radio";
import { __rest } from "tslib";
import React from 'react';
import { omit } from 'lodash-es';
export default (function (props) {
  var _a = omit(props, ['addons', 'schema']),
    options = _a.options,
    rest = __rest(_a, ["options"]);
  return /*#__PURE__*/React.createElement(_Radio.Group, Object.assign({}, rest), /*#__PURE__*/React.createElement(_Space, {
    direction: 'horizontal',
    wrap: true
  }, options.map(function (item) {
    return /*#__PURE__*/React.createElement(_Radio, {
      value: item.value,
      key: item.value
    }, item.label);
  })));
});