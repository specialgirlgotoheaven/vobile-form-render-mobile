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
var getHasBackground = function getHasBackground(fields, hasBackground) {
  var result = hasBackground;
  if (fields.length === 0) {
    result = false;
  }
  return result;
};
var SimpleList = function SimpleList(props) {
  var form = props.form,
    _schema = props.schema,
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
    removeItem = props.removeItem,
    temporary = props.temporary;
  var schema = Object.assign(Object.assign({}, _schema), {
    items: Object.assign({}, _schema.items)
  });
  if (!schema.items.displayType) {
    schema.items.displayType = 'inline';
    schema.items.inlineMode = true;
  }
  var handleCopy = function handleCopy(name) {
    var value = form.getFieldValue(rootPath.concat(name));
    copyItem(value);
  };
  var isColumm = temporary.displayType === 'column';
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('fr-list-simple', {
      'fr-list-simple-background': getHasBackground(fields, hasBackground),
      'fr-list-simple-column': isColumm
    })
  }, fields.map(function (_ref) {
    var key = _ref.key,
      name = _ref.name;
    var length = fields.length;
    return /*#__PURE__*/_react.default.createElement("div", {
      key: key,
      className: 'fr-list-item'
    }, renderCore({
      schema: schema,
      parentPath: [name],
      rootPath: [].concat(_toConsumableArray(rootPath), [name])
    }), /*#__PURE__*/_react.default.createElement(_space.default, {
      className: (0, _classnames.default)('fr-list-item-operate'),
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
      icon: /*#__PURE__*/_react.default.createElement(_ArrowDownOutlined2.default, null),
      children: "\u4E0B\u79FB"
    }, moveDownBtnProps)))), !hideDelete && ( /*#__PURE__*/_react.default.createElement(_popconfirm.default, Object.assign({
      onConfirm: function onConfirm() {
        return removeItem(name);
      }
    }, delConfirmProps), /*#__PURE__*/_react.default.createElement(_FButton.default, Object.assign({
      icon: /*#__PURE__*/_react.default.createElement(_CloseOutlined2.default, null),
      children: "\u5220\u9664",
      btnType: operateBtnType
    }, deleteBtnProps)))), !hideCopy && ( /*#__PURE__*/_react.default.createElement(_FButton.default, Object.assign({
      onClick: function onClick() {
        return handleCopy(name);
      },
      icon: /*#__PURE__*/_react.default.createElement(_CopyOutlined2.default, null),
      children: "\u590D\u5236"
    }, copyBtnProps)))));
  }), (!schema.max || fields.length < schema.max) && !hideAdd && ( /*#__PURE__*/_react.default.createElement(_button.default, Object.assign({
    className: 'add-btn',
    icon: /*#__PURE__*/_react.default.createElement(_PlusOutlined2.default, null),
    onClick: function onClick() {
      return addItem();
    },
    block: fields.length > 0 ? true : false
  }, addBtnProps))));
};
var _default = exports.default = SimpleList;