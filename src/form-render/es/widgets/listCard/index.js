import _PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import "antd/es/button/style";
import _Button from "antd/es/button";
import _CopyOutlined from "@ant-design/icons/lib/icons/CopyOutlined";
import _CloseOutlined from "@ant-design/icons/lib/icons/CloseOutlined";
import "antd/es/popconfirm/style";
import _Popconfirm from "antd/es/popconfirm";
import _ArrowDownOutlined from "@ant-design/icons/lib/icons/ArrowDownOutlined";
import _ArrowUpOutlined from "@ant-design/icons/lib/icons/ArrowUpOutlined";
import "antd/es/divider/style";
import _Divider from "antd/es/divider";
import "antd/es/space/style";
import _Space from "antd/es/space";
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import React from 'react';
import classnames from 'classnames';
import FButton from '../components/FButton';
import { cloneDeep } from 'lodash-es';
import "./index.css";
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: classnames('fr-list-card', {
      'fr-list-card-background': hasBackground
    })
  }, fields.map(function (_ref) {
    var key = _ref.key,
      name = _ref.name;
    var length = fields.length;
    var newSchema = cloneDeep(schema);
    if (newSchema.items.title && typeof newSchema.items.title === 'string') {
      newSchema.items.title += " ".concat(name + 1);
    }
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      className: 'fr-list-item'
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 0,
        flex: 1
      }
    }, renderCore({
      schema: newSchema,
      parentPath: [name],
      rootPath: [].concat(_toConsumableArray(rootPath), [name])
    })), /*#__PURE__*/React.createElement(_Space, {
      className: classnames('fr-list-item-operate', {
        'fr-list-item-operate-fixed': getOperateFixed(schema)
      }),
      style: getOperateStyle(schema),
      split: operateBtnType !== 'icon' && /*#__PURE__*/React.createElement(_Divider, {
        type: 'vertical'
      })
    }, !hideMove && ( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FButton, Object.assign({
      disabled: name === 0,
      onClick: function onClick() {
        return moveItem(name, name - 1);
      },
      icon: /*#__PURE__*/React.createElement(_ArrowUpOutlined, null)
    }, moveUpBtnProps)), /*#__PURE__*/React.createElement(FButton, Object.assign({
      disabled: name === length - 1,
      onClick: function onClick() {
        return moveItem(name, name + 1);
      },
      icon: /*#__PURE__*/React.createElement(_ArrowDownOutlined, null)
    }, moveDownBtnProps)))), !hideDelete && ( /*#__PURE__*/React.createElement(_Popconfirm, Object.assign({
      onConfirm: function onConfirm() {
        return removeItem(name);
      }
    }, delConfirmProps), /*#__PURE__*/React.createElement(FButton, Object.assign({
      icon: /*#__PURE__*/React.createElement(_CloseOutlined, null)
    }, deleteBtnProps)))), !hideCopy && ( /*#__PURE__*/React.createElement(FButton, Object.assign({
      onClick: function onClick() {
        return handleCopy(name);
      },
      icon: /*#__PURE__*/React.createElement(_CopyOutlined, null)
    }, copyBtnProps)))));
  }), !hideAdd && ( /*#__PURE__*/React.createElement("div", {
    className: 'fr-list-add-btn'
  }, /*#__PURE__*/React.createElement(_Button, Object.assign({}, addBtnProps, {
    onClick: function onClick() {
      return addItem();
    },
    icon: /*#__PURE__*/React.createElement(_PlusOutlined, null),
    block: fields.length > 0 ? true : false
  }))))));
};
export default CardList;