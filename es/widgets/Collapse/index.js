import _Collapse from "antd-mobile/es/components/collapse";
import { __rest } from "tslib";
import React from 'react';
export default (function (_a) {
  var schema = _a.schema,
    addons = _a.addons,
    renderCore = _a.renderCore,
    props = __rest(_a, ["schema", "addons", "renderCore"]);
  var items = schema.items;
  return /*#__PURE__*/React.createElement(_Collapse, Object.assign({
    defaultActiveKey: ['1']
  }, props), Object.keys(items).map(function (key) {
    var _a = items[key],
      type = _a.type,
      properties = _a.properties,
      other = __rest(_a, ["type", "properties"]);
    return /*#__PURE__*/React.createElement(_Collapse.Panel, Object.assign({
      key: key
    }, other), renderCore({
      schema: {
        type: type,
        properties: properties
      },
      parentPath: [key]
    }));
  }));
});