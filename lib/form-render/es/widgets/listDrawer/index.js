"use strict";

function _typeof2(o) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof2(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _PlusOutlined2 = _interopRequireDefault(require("@ant-design/icons/lib/icons/PlusOutlined"));
require("antd/es/button/style");
var _button = _interopRequireDefault(require("antd/es/button"));
require("antd/es/table/style");
var _table = _interopRequireDefault(require("antd/es/table"));
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
require("antd/es/form/style");
var _form = _interopRequireDefault(require("antd/es/form"));
var _InfoCircleOutlined2 = _interopRequireDefault(require("@ant-design/icons/lib/icons/InfoCircleOutlined"));
require("antd/es/tooltip/style");
var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));
var _tslib = require("tslib");
var _react = _interopRequireWildcard(require("react"));
var _sortProperties = _interopRequireDefault(require("../../models/sortProperties"));
var _drawerForm = _interopRequireDefault(require("./drawerForm"));
var _FButton = _interopRequireDefault(require("../components/FButton"));
require("./index.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof2(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
;
var getTooltip = function getTooltip(tooltip) {
  if (!tooltip) {
    return;
  }
  if (typeof tooltip === 'string') {
    return {
      title: /*#__PURE__*/_react.default.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: tooltip
        }
      })
    };
  }
  return Object.assign(Object.assign({}, tooltip), {
    title: /*#__PURE__*/_react.default.createElement("span", {
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
    otherActionColumnProps = (0, _tslib.__rest)(actionColumnProps, ["colHeaderText"]);
  var paginationConfig = Object.assign({
    size: 'small',
    hideOnSinglePage: true
  }, pagination);
  var columnSchema = ((_a = schema === null || schema === void 0 ? void 0 : schema.items) === null || _a === void 0 ? void 0 : _a.properties) || {};
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    itemData = _useState4[0],
    setItemData = _useState4[1];
  var indexRef = (0, _react.useRef)(null);
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
  var columns = (0, _sortProperties.default)(Object.entries(columnSchema)).map(function (_ref) {
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
      title: ( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, required && /*#__PURE__*/_react.default.createElement("span", {
        style: {
          color: 'red',
          marginRight: '3px'
        }
      }, "*"), /*#__PURE__*/_react.default.createElement("span", null, title), tooltipProps && ( /*#__PURE__*/_react.default.createElement(_tooltip.default, Object.assign({
        placement: 'top'
      }, tooltipProps), /*#__PURE__*/_react.default.createElement(_InfoCircleOutlined2.default, {
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
        return /*#__PURE__*/_react.default.createElement(_form.default.Item, null, /*#__PURE__*/_react.default.createElement(_space.default, {
          className: 'fr-list-item-operate',
          split: operateBtnType !== 'icon' && /*#__PURE__*/_react.default.createElement(_divider.default, {
            type: 'vertical'
          })
        }, !hideMove && ( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_FButton.default, Object.assign({
          disabled: field.name === 0,
          onClick: function onClick() {
            return moveItem(field.name, field.name - 1);
          },
          icon: /*#__PURE__*/_react.default.createElement(_ArrowUpOutlined2.default, null)
        }, moveUpBtnProps)), /*#__PURE__*/_react.default.createElement(_FButton.default, Object.assign({
          disabled: field.name === fields.length - 1,
          onClick: function onClick() {
            return moveItem(field.name, field.name + 1);
          },
          icon: /*#__PURE__*/_react.default.createElement(_ArrowDownOutlined2.default, null)
        }, moveDownBtnProps)))), !hideDelete && ( /*#__PURE__*/_react.default.createElement(_popconfirm.default, Object.assign({
          onConfirm: function onConfirm() {
            return removeItem(field.name);
          }
        }, delConfirmProps), /*#__PURE__*/_react.default.createElement(_FButton.default, Object.assign({
          icon: /*#__PURE__*/_react.default.createElement(_CloseOutlined2.default, null),
          btnType: operateBtnType
        }, deleteBtnProps)))), !hideCopy && ( /*#__PURE__*/_react.default.createElement(_FButton.default, Object.assign({
          onClick: function onClick() {
            return handleCopy(field.name);
          },
          icon: /*#__PURE__*/_react.default.createElement(_CopyOutlined2.default, null)
        }, copyBtnProps))), !hideEdit && ( /*#__PURE__*/_react.default.createElement(_FButton.default, Object.assign({
          onClick: function onClick() {
            setVisible(true);
            indexRef.current = field.name;
            setItemData(form.getFieldValue(rootPath.concat(field.name)));
          },
          icon: /*#__PURE__*/_react.default.createElement(_CopyOutlined2.default, null)
        }, editorBtnProps)))));
      }
    }));
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: 'fr-list-drawer'
  }, /*#__PURE__*/_react.default.createElement(_table.default, {
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
  }), (!schema.max || fields.length < schema.max) && !hideAdd && ( /*#__PURE__*/_react.default.createElement(_button.default, Object.assign({
    icon: /*#__PURE__*/_react.default.createElement(_PlusOutlined2.default, null),
    onClick: handleAdd
  }, addBtnProps))), visible && ( /*#__PURE__*/_react.default.createElement(_drawerForm.default, {
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
var _default = exports.default = TableList;