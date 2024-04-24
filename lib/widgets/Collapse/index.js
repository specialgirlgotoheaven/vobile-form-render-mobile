"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _collapse = _interopRequireDefault(require("antd-mobile/es/components/collapse"));
var _tslib = require("tslib");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = exports.default = function _default(_a) {
  var schema = _a.schema,
    addons = _a.addons,
    renderCore = _a.renderCore,
    props = (0, _tslib.__rest)(_a, ["schema", "addons", "renderCore"]);
  var items = schema.items;
  return /*#__PURE__*/_react.default.createElement(_collapse.default, Object.assign({
    defaultActiveKey: ['1']
  }, props), Object.keys(items).map(function (key) {
    var _a = items[key],
      type = _a.type,
      properties = _a.properties,
      other = (0, _tslib.__rest)(_a, ["type", "properties"]);
    return /*#__PURE__*/_react.default.createElement(_collapse.default.Panel, Object.assign({
      key: key
    }, other), renderCore({
      schema: {
        type: type,
        properties: properties
      },
      parentPath: [key]
    }));
  }));
};