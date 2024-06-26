"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _PlusOutlined2 = _interopRequireDefault(require("@ant-design/icons/lib/icons/PlusOutlined"));
require("antd/es/button/style");
var _button = _interopRequireDefault(require("antd/es/button"));
var _CopyOutlined2 = _interopRequireDefault(require("@ant-design/icons/lib/icons/CopyOutlined"));
var _CloseOutlined2 = _interopRequireDefault(require("@ant-design/icons/lib/icons/CloseOutlined"));
require("antd/es/popconfirm/style");
var _popconfirm = _interopRequireDefault(require("antd/es/popconfirm"));
var _ArrowDownOutlined2 = _interopRequireDefault(require("@ant-design/icons/lib/icons/ArrowDownOutlined"));
var _ArrowUpOutlined2 = _interopRequireDefault(require("@ant-design/icons/lib/icons/ArrowUpOutlined"));
require("antd/es/divider/style");
var _divider = _interopRequireDefault(require("antd/es/divider"));
require("antd/es/space/style");
var _space = _interopRequireDefault(require("antd/es/space"));
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _FButton = _interopRequireDefault(require("../components/FButton"));
var _lodashEs = require("lodash-es");
require("./index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
var getOperateFixed = function getOperateFixed(schema) {
  var _a, _b;
  var fixed = true;
  if ((_b = (_a = schema === null || schema === void 0 ? void 0 : schema.items) === null || _a === void 0 ? void 0 : _a.props) === null || _b === void 0 ? void 0 : _b.extra) {
    fixed = false;
  }
  return fixed;
};
var getOperateStyle = function getOperateStyle(schema) {
  var _a, _b, _c, _d, _e;
  var style = {};
  var widgetName = ((_a = schema === null || schema === void 0 ? void 0 : schema.items) === null || _a === void 0 ? void 0 : _a.theme) || ((_b = schema === null || schema === void 0 ? void 0 : schema.items) === null || _b === void 0 ? void 0 : _b.widget) || 'collapse';
  if (['card', 'collapse', 'lineTitle'].includes(widgetName) && !((_d = (_c = schema === null || schema === void 0 ? void 0 : schema.items) === null || _c === void 0 ? void 0 : _c.props) === null || _d === void 0 ? void 0 : _d.extra)) {
    style.top = '14px';
    if (['lineTitle'].includes(widgetName)) {
      style.top = '3px';
      style.padding = 0;
    }
    if (!((_e = schema === null || schema === void 0 ? void 0 : schema.items) === null || _e === void 0 ? void 0 : _e.title)) {
      style.right = '0';
    }
  }
  return style;
};
var CardList = function CardList(props) {
  var form = props.form,
    schema = props.schema,
    fields = props.fields,
    rootPath = props.rootPath,
    renderCore = props.renderCore,
    hasBackground = props.hasBackground,
    operateBtnType = props.operateBtnType,
    addBtnProps = props.addBtnProps,
    delConfirmProps = props.delConfirmProps,
    copyBtnProps = props.copyBtnProps,
    deleteBtnProps = props.deleteBtnProps,
    moveUpBtnProps = props.moveUpBtnProps,
    moveDownBtnProps = props.moveDownBtnProps,
    hideDelete = props.hideDelete,
    hideCopy = props.hideCopy,
    hideMove = props.hideMove,
    hideAdd = props.hideAdd,
    addItem = props.addItem,
    copyItem = props.copyItem,
    moveItem = props.moveItem,
    removeItem = props.removeItem;
  var handleCopy = function handleCopy(name) {
    var value = form.getFieldValue(rootPath.concat(name));
    copyItem(value);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('fr-list-card', {
      'fr-list-card-background': hasBackground
    })
  }, fields.map(function (_ref) {
    var key = _ref.key,
      name = _ref.name;
    var length = fields.length;
    var newSchema = (0, _lodashEs.cloneDeep)(schema);
    if (newSchema.items.title && typeof newSchema.items.title === 'string') {
      newSchema.items.title += " ".concat(name + 1);
    }
    return /*#__PURE__*/_react.default.createElement("div", {
      key: key,
      className: 'fr-list-item'
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        width: 0,
        flex: 1
      }
    }, renderCore({
      schema: newSchema,
      parentPath: [name],
      rootPath: [].concat(_toConsumableArray(rootPath), [name])
    })), /*#__PURE__*/_react.default.createElement(_space.default, {
      className: (0, _classnames.default)('fr-list-item-operate', {
        'fr-list-item-operate-fixed': getOperateFixed(schema)
      }),
      style: getOperateStyle(schema),
      split: operateBtnType !== 'icon' && /*#__PURE__*/_react.default.createElement(_divider.default, {
        type: 'vertical'
      })
    }, !hideMove && ( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_FButton.default, Object.assign({
      disabled: name === 0,
      onClick: function onClick() {
        return moveItem(name, name - 1);
      },
      icon: /*#__PURE__*/_react.default.createElement(_ArrowUpOutlined2.default, null)
    }, moveUpBtnProps)), /*#__PURE__*/_react.default.createElement(_FButton.default, Object.assign({
      disabled: name === length - 1,
      onClick: function onClick() {
        return moveItem(name, name + 1);
      },
      icon: /*#__PURE__*/_react.default.createElement(_ArrowDownOutlined2.default, null)
    }, moveDownBtnProps)))), !hideDelete && ( /*#__PURE__*/_react.default.createElement(_popconfirm.default, Object.assign({
      onConfirm: function onConfirm() {
        return removeItem(name);
      }
    }, delConfirmProps), /*#__PURE__*/_react.default.createElement(_FButton.default, Object.assign({
      icon: /*#__PURE__*/_react.default.createElement(_CloseOutlined2.default, null)
    }, deleteBtnProps)))), !hideCopy && ( /*#__PURE__*/_react.default.createElement(_FButton.default, Object.assign({
      onClick: function onClick() {
        return handleCopy(name);
      },
      icon: /*#__PURE__*/_react.default.createElement(_CopyOutlined2.default, null)
    }, copyBtnProps)))));
  }), !hideAdd && ( /*#__PURE__*/_react.default.createElement("div", {
    className: 'fr-list-add-btn'
  }, /*#__PURE__*/_react.default.createElement(_button.default, Object.assign({}, addBtnProps, {
    onClick: function onClick() {
      return addItem();
    },
    icon: /*#__PURE__*/_react.default.createElement(_PlusOutlined2.default, null),
    block: fields.length > 0 ? true : false
  }))))));
};
var _default = exports.default = CardList;