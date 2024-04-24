"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("antd/es/tabs/style");
var _tabs = _interopRequireDefault(require("antd/es/tabs"));
var _CloseOutlined2 = _interopRequireDefault(require("@ant-design/icons/lib/icons/CloseOutlined"));
require("antd/es/popconfirm/style");
var _popconfirm = _interopRequireDefault(require("antd/es/popconfirm"));
require("antd/es/config-provider/style");
var _configProvider = _interopRequireDefault(require("antd/es/config-provider"));
var _tslib = require("tslib");
var _react = _interopRequireWildcard(require("react"));
var _utils = require("../utils");
require("./index.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
;
var TabPaneContent = function TabPaneContent(props) {
  var renderCore = props.renderCore,
    name = props.name,
    schema = props.schema,
    rootPath = props.rootPath;
  return (0, _react.useMemo)(function () {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        flex: 1
      }
    }, renderCore({
      schema: schema,
      parentPath: [name],
      rootPath: [].concat(_toConsumableArray(rootPath), [name])
    }));
  }, [JSON.stringify(props)]);
};
var TabList = function TabList(props) {
  var schema = props.schema,
    fields = props.fields,
    rootPath = props.rootPath,
    renderCore = props.renderCore,
    readOnly = props.readOnly,
    delConfirmProps = props.delConfirmProps,
    tabName = props.tabName,
    hideDelete = props.hideDelete,
    hideAdd = props.hideAdd,
    addItem = props.addItem,
    removeItem = props.removeItem,
    _props$tabItemProps = props.tabItemProps,
    tabItemProps = _props$tabItemProps === void 0 ? {} : _props$tabItemProps,
    _activeKey = props.activeKey,
    retProps = (0, _tslib.__rest)(props, ["schema", "fields", "rootPath", "renderCore", "readOnly", "delConfirmProps", "tabName", "hideDelete", "hideAdd", "addItem", "removeItem", "tabItemProps", "activeKey"]);
  var _useState = (0, _react.useState)('0'),
    _useState2 = _slicedToArray(_useState, 2),
    activeKey = _useState2[0],
    setActiveKey = _useState2[1];
  var configCtx = (0, _react.useContext)(_configProvider.default.ConfigContext);
  var t = (0, _utils.translation)(configCtx);
  (0, _react.useEffect)(function () {
    setActiveKey(_activeKey || '0');
  }, [_activeKey]);
  var getTabPaneName = function getTabPaneName(index) {
    return tabName instanceof Array ? tabName[index] || index + 1 : "".concat(tabName || t('item'), " ").concat(index + 1);
  };
  var handleDelete = function handleDelete(targetKey) {
    removeItem(targetKey);
    setActiveKey("".concat(targetKey > 1 ? targetKey - 1 : 0));
  };
  var handleEdit = function handleEdit(_, action) {
    if (action === 'add') {
      if ((!schema.max || fields.length < schema.max) && !readOnly && !hideAdd) {
        addItem();
        var currentKey = fields.length;
        setActiveKey("".concat(currentKey));
      }
    }
  };
  var renderClose = function renderClose(name) {
    return !readOnly && !hideDelete ? ( /*#__PURE__*/_react.default.createElement(_popconfirm.default, Object.assign({
      onConfirm: function onConfirm() {
        return handleDelete(name);
      }
    }, delConfirmProps), /*#__PURE__*/_react.default.createElement(_CloseOutlined2.default, null))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  };
  return /*#__PURE__*/_react.default.createElement(_tabs.default, Object.assign({
    className: 'fr-tab-list',
    type: 'editable-card'
  }, retProps, {
    onChange: setActiveKey,
    activeKey: "".concat(activeKey),
    onEdit: handleEdit,
    hideAdd: readOnly || hideAdd
  }), fields.map(function (_ref) {
    var key = _ref.key,
      name = _ref.name;
    return /*#__PURE__*/_react.default.createElement(_tabs.default.TabPane, Object.assign({
      key: key,
      className: 'fr-list-item'
    }, tabItemProps, {
      tab: getTabPaneName(name),
      closeIcon: renderClose(name)
    }), /*#__PURE__*/_react.default.createElement(TabPaneContent, {
      name: name,
      rootPath: rootPath,
      schema: schema,
      renderCore: renderCore
    }));
  }));
};
var _default = exports.default = TabList;