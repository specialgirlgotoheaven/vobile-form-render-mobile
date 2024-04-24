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
import "./index.css";
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
  return /*#__PURE__*/React.createElement("div", {
    className: classnames('fr-list-simple', {
      'fr-list-simple-background': getHasBackground(fields, hasBackground),
      'fr-list-simple-column': isColumm
    })
  }, fields.map(function (_ref) {
    var key = _ref.key,
      name = _ref.name;
    var length = fields.length;
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      className: 'fr-list-item'
    }, renderCore({
      schema: schema,
      parentPath: [name],
      rootPath: [].concat(_toConsumableArray(rootPath), [name])
    }), /*#__PURE__*/React.createElement(_Space, {
      className: classnames('fr-list-item-operate'),
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
      icon: /*#__PURE__*/React.createElement(_ArrowDownOutlined, null),
      children: "\u4E0B\u79FB"
    }, moveDownBtnProps)))), !hideDelete && ( /*#__PURE__*/React.createElement(_Popconfirm, Object.assign({
      onConfirm: function onConfirm() {
        return removeItem(name);
      }
    }, delConfirmProps), /*#__PURE__*/React.createElement(FButton, Object.assign({
      icon: /*#__PURE__*/React.createElement(_CloseOutlined, null),
      children: "\u5220\u9664",
      btnType: operateBtnType
    }, deleteBtnProps)))), !hideCopy && ( /*#__PURE__*/React.createElement(FButton, Object.assign({
      onClick: function onClick() {
        return handleCopy(name);
      },
      icon: /*#__PURE__*/React.createElement(_CopyOutlined, null),
      children: "\u590D\u5236"
    }, copyBtnProps)))));
  }), (!schema.max || fields.length < schema.max) && !hideAdd && ( /*#__PURE__*/React.createElement(_Button, Object.assign({
    className: 'add-btn',
    icon: /*#__PURE__*/React.createElement(_PlusOutlined, null),
    onClick: function onClick() {
      return addItem();
    },
    block: fields.length > 0 ? true : false
  }, addBtnProps))));
};
export default SimpleList;