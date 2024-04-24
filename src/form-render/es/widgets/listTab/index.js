import "antd/es/tabs/style";
import _Tabs from "antd/es/tabs";
import _CloseOutlined from "@ant-design/icons/lib/icons/CloseOutlined";
import "antd/es/popconfirm/style";
import _Popconfirm from "antd/es/popconfirm";
import "antd/es/config-provider/style";
import _ConfigProvider from "antd/es/config-provider";
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import { __rest } from "tslib";
import React, { useState, useContext, useMemo, useEffect } from 'react';
import { translation } from '../utils';
import "./index.css";
;
var TabPaneContent = function TabPaneContent(props) {
  var renderCore = props.renderCore,
    name = props.name,
    schema = props.schema,
    rootPath = props.rootPath;
  return useMemo(function () {
    return /*#__PURE__*/React.createElement("div", {
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
    retProps = __rest(props, ["schema", "fields", "rootPath", "renderCore", "readOnly", "delConfirmProps", "tabName", "hideDelete", "hideAdd", "addItem", "removeItem", "tabItemProps", "activeKey"]);
  var _useState = useState('0'),
    _useState2 = _slicedToArray(_useState, 2),
    activeKey = _useState2[0],
    setActiveKey = _useState2[1];
  var configCtx = useContext(_ConfigProvider.ConfigContext);
  var t = translation(configCtx);
  useEffect(function () {
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
    return !readOnly && !hideDelete ? ( /*#__PURE__*/React.createElement(_Popconfirm, Object.assign({
      onConfirm: function onConfirm() {
        return handleDelete(name);
      }
    }, delConfirmProps), /*#__PURE__*/React.createElement(_CloseOutlined, null))) : /*#__PURE__*/React.createElement(React.Fragment, null);
  };
  return /*#__PURE__*/React.createElement(_Tabs, Object.assign({
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
    return /*#__PURE__*/React.createElement(_Tabs.TabPane, Object.assign({
      key: key,
      className: 'fr-list-item'
    }, tabItemProps, {
      tab: getTabPaneName(name),
      closeIcon: renderClose(name)
    }), /*#__PURE__*/React.createElement(TabPaneContent, {
      name: name,
      rootPath: rootPath,
      schema: schema,
      renderCore: renderCore
    }));
  }));
};
export default TabList;