import _Form from "antd-mobile/es/components/form";
import _Grid from "antd-mobile/es/components/grid";
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import { __rest } from "tslib";
import React, { createContext, useContext } from 'react';
import { AddCircleOutline } from 'antd-mobile-icons';
import { useStore } from 'zustand';
import { FRContext, ConfigContext } from '../../models/context';
import { parseAllExpression } from '../../form-render/es/models/expression';
import { isFunction } from '../../utils';
import "./index.css";
var UpperContext = /*#__PURE__*/createContext(function () {});
var getParamValue = function getParamValue(formCtx, upperCtx, schema) {
  return function (valueKey) {
    var _a, _b;
    return (_b = (_a = schema[valueKey]) !== null && _a !== void 0 ? _a : upperCtx[valueKey]) !== null && _b !== void 0 ? _b : formCtx[valueKey];
  };
};
export default (function (props) {
  var _a;
  var _schema = props.schema,
    path = props.path,
    renderCore = props.renderCore,
    _rootPath = props.rootPath;
  var store = useContext(FRContext);
  var formCtx = useStore(store, function (state) {
    return state.context;
  });
  var upperCtx = useContext(UpperContext);
  var _useContext = useContext(ConfigContext),
    form = _useContext.form,
    methods = _useContext.methods;
  var formData = form.getFieldsValue(true);
  var _store$getState = store.getState(),
    formSchema = _store$getState.schema;
  var items = _schema.items,
    otherSchema = __rest(_schema, ["items"]);
  var schema = Object.assign({
    items: items
  }, parseAllExpression(otherSchema, formData, _rootPath, formSchema));
  var defaultValue = (_a = schema.default) !== null && _a !== void 0 ? _a : schema.defaultValue || [{}];
  var _ref = schema.props || {},
    onAdd = _ref.onAdd,
    onRemove = _ref.onRemove;
  var handleAdd = function handleAdd(add, data) {
    var addFunc = onAdd;
    if (typeof onAdd === 'string') {
      addFunc = methods[onAdd];
    }
    if (isFunction(addFunc)) {
      addFunc(function (funData) {
        return add(funData || data);
      }, {
        schema: schema,
        data: data
      });
      return;
    }
    add(data);
  };
  var handleRemove = function handleRemove(remove, index) {
    var removeFunc = onRemove;
    if (typeof onRemove === 'string') {
      removeFunc = methods[onRemove];
    }
    if (isFunction(removeFunc)) {
      removeFunc(function () {
        return remove(index);
      }, {
        schema: schema,
        index: index
      });
      return;
    }
    remove(index);
  };
  var getValueFromKey = getParamValue(formCtx, upperCtx, schema);
  var readOnly = getValueFromKey('readOnly');
  if (schema.hidden) {
    return null;
  }
  var preRootPath = _toConsumableArray(_rootPath || []).splice(0, _rootPath.length - 1);
  var rootPath = [].concat(_toConsumableArray(preRootPath), _toConsumableArray(path));
  return /*#__PURE__*/React.createElement(_Grid.Item, {
    className: "frm-list"
  }, /*#__PURE__*/React.createElement(_Form.Array, {
    name: path,
    initialValue: defaultValue,
    renderAdd: !readOnly ? function () {
      return /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(AddCircleOutline, null), " \u6DFB\u52A0");
    } : undefined,
    onAdd: function onAdd(_ref2) {
      var add = _ref2.add;
      return handleAdd(add);
    },
    renderHeader: function renderHeader(_ref3, _ref4) {
      var index = _ref3.index;
      var remove = _ref4.remove;
      return /*#__PURE__*/React.createElement(React.Fragment, null, schema.title && ( /*#__PURE__*/React.createElement("span", null, schema.title, " ", index + 1)), !readOnly && ( /*#__PURE__*/React.createElement("a", {
        onClick: function onClick() {
          return handleRemove(remove, index);
        },
        style: {
          float: 'right'
        }
      }, "\u5220\u9664")));
    }
  }, function (fields) {
    return fields.map(function (_ref5) {
      var index = _ref5.index;
      return renderCore({
        schema: schema,
        parentPath: [index],
        rootPath: [].concat(_toConsumableArray(rootPath), [index])
      });
    });
  }));
});