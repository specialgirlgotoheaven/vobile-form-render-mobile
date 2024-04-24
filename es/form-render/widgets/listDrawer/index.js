function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
import _PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import "antd/es/button/style";
import _Button from "antd/es/button";
import "antd/es/table/style";
import _Table from "antd/es/table";
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
import "antd/es/form/style";
import _Form from "antd/es/form";
import _InfoCircleOutlined from "@ant-design/icons/lib/icons/InfoCircleOutlined";
import "antd/es/tooltip/style";
import _Tooltip from "antd/es/tooltip";
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { __rest } from "tslib";
import React, { useState, useRef } from 'react';
import sortProperties from '../../models/sortProperties';
import FormDrawer from './drawerForm';
import FButton from '../components/FButton';
import "./index.css";
;
var getTooltip = function getTooltip(tooltip) {
  if (!tooltip) {
    return;
  }
  if (typeof tooltip === 'string') {
    return {
      title: /*#__PURE__*/React.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: tooltip
        }
      })
    };
  }
  return Object.assign(Object.assign({}, tooltip), {
    title: /*#__PURE__*/React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: tooltip.title
      }
    })
  });
};
var TableList = function TableList(props) {
  var _a;
  var form = props.form,
    schema = props.schema,
    fields = props.fields,
    rootPath = props.rootPath,
    renderCore = props.renderCore,
    readOnly = props.readOnly,
    widgets = props.widgets,
    pagination = props.pagination,
    operateBtnType = props.operateBtnType,
    addBtnProps = props.addBtnProps,
    delConfirmProps = props.delConfirmProps,
    copyBtnProps = props.copyBtnProps,
    deleteBtnProps = props.deleteBtnProps,
    moveUpBtnProps = props.moveUpBtnProps,
    moveDownBtnProps = props.moveDownBtnProps,
    actionColumnProps = props.actionColumnProps,
    editorBtnProps = props.editorBtnProps,
    hideOperate = props.hideOperate,
    hideDelete = props.hideDelete,
    hideCopy = props.hideCopy,
    hideMove = props.hideMove,
    hideAdd = props.hideAdd,
    hideEdit = props.hideEdit,
    operation = props.operation,
    addItem = props.addItem,
    copyItem = props.copyItem,
    moveItem = props.moveItem,
    removeItem = props.removeItem,
    configContext = props.configContext;
  var colHeaderText = actionColumnProps.colHeaderText,
    otherActionColumnProps = __rest(actionColumnProps, ["colHeaderText"]);
  var paginationConfig = Object.assign({
    size: 'small',
    hideOnSinglePage: true
  }, pagination);
  var columnSchema = ((_a = schema === null || schema === void 0 ? void 0 : schema.items) === null || _a === void 0 ? void 0 : _a.properties) || {};
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    itemData = _useState4[0],
    setItemData = _useState4[1];
  var indexRef = useRef(null);
  var handleCopy = function handleCopy(name) {
    var value = form.getFieldValue(rootPath.concat(name));
    copyItem(value);
  };
  var handleAdd = function handleAdd() {
    setVisible(true);
    addItem();
  };
  var handleRepeal = function handleRepeal() {
    if (!indexRef.current && indexRef.current !== 0) {
      operation.remove(fields.length - 1);
    } else {
      form.setFieldValue([].concat(_toConsumableArray(rootPath), [indexRef.current]), itemData);
    }
    hanldeConfirm();
  };
  var hanldeConfirm = function hanldeConfirm() {
    setItemData(null);
    setVisible(false);
    indexRef.current = null;
  };
  var columns = sortProperties(Object.entries(columnSchema)).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      dataIndex = _ref2[0],
      item = _ref2[1];
    var required = item.required,
      title = item.title,
      tooltip = item.tooltip,
      width = item.width,
      columnHidden = item.columnHidden;
    if (columnHidden) {
      return null;
    }
    var tooltipProps = getTooltip(tooltip);
    return {
      dataIndex: dataIndex,
      width: width,
      title: ( /*#__PURE__*/React.createElement(React.Fragment, null, required && /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'red',
          marginRight: '3px'
        }
      }, "*"), /*#__PURE__*/React.createElement("span", null, title), tooltipProps && ( /*#__PURE__*/React.createElement(_Tooltip, Object.assign({
        placement: 'top'
      }, tooltipProps), /*#__PURE__*/React.createElement(_InfoCircleOutlined, {
        style: {
          marginLeft: 6
        }
      }))))),
      render: function render(_, field) {
        var fieldSchema = {
          type: 'object',
          properties: _defineProperty({}, dataIndex, Object.assign(Object.assign({}, columnSchema[dataIndex]), {
            noStyle: true,
            readOnly: true
          }))
        };
        return renderCore({
          schema: fieldSchema,
          parentPath: [field.name],
          rootPath: [].concat(_toConsumableArray(rootPath), [field.name])
        });
      }
    };
  }).filter(function (item) {
    return item;
  });
  if (!readOnly && !hideOperate) {
    columns.push(Object.assign(Object.assign({
      title: colHeaderText,
      width: '190px',
      fixed: 'right'
    }, otherActionColumnProps), {
      render: function render(_, field) {
        return /*#__PURE__*/React.createElement(_Form.Item, null, /*#__PURE__*/React.createElement(_Space, {
          className: 'fr-list-item-operate',
          split: operateBtnType !== 'icon' && /*#__PURE__*/React.createElement(_Divider, {
            type: 'vertical'
          })
        }, !hideMove && ( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FButton, Object.assign({
          disabled: field.name === 0,
          onClick: function onClick() {
            return moveItem(field.name, field.name - 1);
          },
          icon: /*#__PURE__*/React.createElement(_ArrowUpOutlined, null)
        }, moveUpBtnProps)), /*#__PURE__*/React.createElement(FButton, Object.assign({
          disabled: field.name === fields.length - 1,
          onClick: function onClick() {
            return moveItem(field.name, field.name + 1);
          },
          icon: /*#__PURE__*/React.createElement(_ArrowDownOutlined, null)
        }, moveDownBtnProps)))), !hideDelete && ( /*#__PURE__*/React.createElement(_Popconfirm, Object.assign({
          onConfirm: function onConfirm() {
            return removeItem(field.name);
          }
        }, delConfirmProps), /*#__PURE__*/React.createElement(FButton, Object.assign({
          icon: /*#__PURE__*/React.createElement(_CloseOutlined, null),
          btnType: operateBtnType
        }, deleteBtnProps)))), !hideCopy && ( /*#__PURE__*/React.createElement(FButton, Object.assign({
          onClick: function onClick() {
            return handleCopy(field.name);
          },
          icon: /*#__PURE__*/React.createElement(_CopyOutlined, null)
        }, copyBtnProps))), !hideEdit && ( /*#__PURE__*/React.createElement(FButton, Object.assign({
          onClick: function onClick() {
            setVisible(true);
            indexRef.current = field.name;
            setItemData(form.getFieldValue(rootPath.concat(field.name)));
          },
          icon: /*#__PURE__*/React.createElement(_CopyOutlined, null)
        }, editorBtnProps)))));
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: 'fr-list-drawer'
  }, /*#__PURE__*/React.createElement(_Table, {
    size: 'middle',
    dataSource: fields,
    columns: columns,
    style: {
      marginBottom: '12px'
    },
    scroll: {
      x: 'max-content'
    },
    pagination: paginationConfig
  }), (!schema.max || fields.length < schema.max) && !hideAdd && ( /*#__PURE__*/React.createElement(_Button, Object.assign({
    icon: /*#__PURE__*/React.createElement(_PlusOutlined, null),
    onClick: handleAdd
  }, addBtnProps))), visible && ( /*#__PURE__*/React.createElement(FormDrawer, {
    schema: schema,
    data: itemData,
    widgets: widgets,
    configContext: configContext,
    onClose: handleRepeal,
    onConfirm: hanldeConfirm
  }, renderCore({
    schema: schema.items,
    parentPath: [fields.length - 1],
    rootPath: [].concat(_toConsumableArray(rootPath), [fields.length - 1])
  }))));
};
export default TableList;