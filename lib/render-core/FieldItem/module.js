"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPath = exports.getParamValue = exports.getLabel = exports.getFieldProps = exports.getExtraView = exports.getDependValues = void 0;
var _react = _interopRequireDefault(require("react"));
var _utils = require("../../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// return dataIndex、dataPath、schemaPath
var getPathObj = function getPathObj(_ref) {
  var _ref$rootPath = _ref.rootPath,
    rootPath = _ref$rootPath === void 0 ? [] : _ref$rootPath,
    path = _ref.path;
  var pathList = (path || '').split('.');
  var dataIndex = [];
  var schemaIndex = [];
  var dataPathList = [];
  // dataIndex
  rootPath.forEach(function (item, index) {
    if ((0, _utils.isNumber)(item)) {
      dataIndex.push(item);
      return;
    }
    if ((0, _utils.isNumber)(rootPath[index + 1])) {
      schemaIndex.push("".concat(item, "[]"));
    } else {
      schemaIndex.push(item);
    }
  });
  // dataPath
  var list = _toConsumableArray(rootPath);
  list.pop();
  list = [].concat(_toConsumableArray(list), _toConsumableArray(pathList));
  list.forEach(function (item, index) {
    if ((0, _utils.isNumber)(item)) {
      dataPathList.push("[".concat(item, "]"));
    } else {
      dataPathList.push(item);
    }
  });
  var dataPath = dataPathList.join('.');
  // schemaPath
  var _path = pathList;
  if (_path[0] && (0, _utils.isNumber)(_path[0])) {
    _path.splice(0, 1);
  }
  var schemaPath = [].concat(schemaIndex, [_path]).join('.');
  // console.log(path, rootPath, '-------', dataIndex, dataPath, schemaPath);
  return {
    dataIndex: dataIndex,
    dataPath: dataPath,
    schemaPath: schemaPath
  };
};
var getPath = exports.getPath = function getPath(path) {
  if (!path) {
    return null;
  }
  if ((0, _utils.isArray)(path)) {
    return path.join('.');
  }
  return path;
};
var getLabel = exports.getLabel = function getLabel(schema, displayType, widgets, addons) {
  var title = schema.title,
    description = schema.description,
    descWidget = schema.descWidget,
    labelWidget = schema.labelWidget;
  var LabelNode = widgets[labelWidget];
  if (LabelNode) {
    return /*#__PURE__*/_react.default.createElement(LabelNode, {
      schema: schema,
      addons: addons
    });
  }
  if (!description && !descWidget) {
    return title;
  }
  var RenderDesc = function RenderDesc() {
    var Widget = widgets[descWidget];
    if (Widget) {
      return /*#__PURE__*/_react.default.createElement(Widget, {
        schema: schema,
        addons: addons
      });
    }
    if (description) {
      return /*#__PURE__*/_react.default.createElement("span", {
        className: 'fr-desc ml2'
      }, "(", description, ")");
    }
    return null;
  };
  if (displayType === 'inline') {
    return title;
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, title, /*#__PURE__*/_react.default.createElement(RenderDesc, null));
};
var getExtraView = exports.getExtraView = function getExtraView(extraKey, schema, widgets) {
  var extra = schema[extraKey];
  if (!extra) {
    return;
  }
  // extra 自定义
  var widgetName = extra === null || extra === void 0 ? void 0 : extra.widget;
  if (widgetName) {
    var Widget = widgets[widgetName];
    if (!Widget) {
      return;
    }
    return /*#__PURE__*/_react.default.createElement(Widget, {
      schema: schema
    });
  }
  var __html = '';
  if (typeof extra === 'string') {
    __html = extra;
  }
  // 内部BU使用的口子，这个api不对外，也没有必要
  if (extra === null || extra === void 0 ? void 0 : extra.text) {
    __html = extra.text;
  }
  if (!__html) {
    return;
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: 'fr-form-item-extra',
    dangerouslySetInnerHTML: {
      __html: __html
    }
  });
};
var getParamValue = exports.getParamValue = function getParamValue(formCtx, upperCtx, schema) {
  return function (valueKey) {
    var isTop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var _a, _b, _c;
    if (isTop) {
      return (_b = (_a = schema[valueKey]) !== null && _a !== void 0 ? _a : upperCtx[valueKey]) !== null && _b !== void 0 ? _b : formCtx[valueKey];
    }
    return (_c = schema[valueKey]) !== null && _c !== void 0 ? _c : upperCtx[valueKey];
  };
};
var getFieldProps = exports.getFieldProps = function getFieldProps(schema, _ref2) {
  var widgets = _ref2.widgets,
    methods = _ref2.methods,
    form = _ref2.form,
    dependValues = _ref2.dependValues,
    globalProps = _ref2.globalProps,
    path = _ref2.path,
    rootPath = _ref2.rootPath,
    fieldRef = _ref2.fieldRef;
  var _a;
  var pathObj = getPathObj({
    path: path,
    rootPath: rootPath
  });
  var fieldProps = Object.assign(Object.assign({}, schema.props), {
    addons: Object.assign(Object.assign(Object.assign({}, form), {
      globalProps: globalProps,
      dependValues: dependValues,
      fieldRef: fieldRef
    }), pathObj)
  });
  if ((dependValues === null || dependValues === void 0 ? void 0 : dependValues.length) > 0) {
    fieldProps.dependValues = dependValues;
  }
  ['placeholder', 'disabled', 'format', 'className'].forEach(function (key) {
    if (schema[key]) {
      fieldProps[key] = schema[key];
    }
  });
  // 兼容 1.0 版本逻辑 enum => options
  if (schema.enum && !((_a = schema.props) === null || _a === void 0 ? void 0 : _a.options)) {
    var enums = schema.enum,
      enumNames = schema.enumNames;
    fieldProps.options = (0, _utils.getArray)(enums).map(function (item, index) {
      var label = enumNames && Array.isArray(enumNames) ? enumNames[index] : item;
      var isHtml = typeof label === 'string' && label[0] === '<';
      if (isHtml) {
        label = /*#__PURE__*/_react.default.createElement("span", {
          dangerouslySetInnerHTML: {
            __html: label
          }
        });
      }
      return {
        label: label,
        value: item
      };
    });
  }
  // 以 props 结尾的属性，直接透传
  Object.keys(schema).forEach(function (key) {
    if (typeof key === 'string' && key.toLowerCase().indexOf('props') > -1 && key.length > 5) {
      fieldProps[key] = schema[key];
    }
  });
  // 支持 addonAfter 为自定义组件的情况
  if ((0, _utils.isObject)(fieldProps.addonAfter) && fieldProps.addonAfter.widget) {
    var AddonAfterWidget = widgets[fieldProps.addonAfter.widget];
    fieldProps.addonAfter = /*#__PURE__*/_react.default.createElement(AddonAfterWidget, Object.assign({}, schema));
  }
  // Dynamic Mapping of Methods
  if ((0, _utils.isObject)(schema.methods)) {
    Object.keys(schema.methods).forEach(function (key) {
      var name = schema.methods[key];
      fieldProps[key] = methods[name];
    });
  }
  fieldProps.schema = schema;
  return fieldProps;
};
/*
   * Get depend values
   *
   * 1. normal path
   * Just get value of path in formData
   *
   * 2. list path
   * Like `list[].foo`.`[]` means the same index as the current item.
   * You can pass `[index]` to get specific item at the index of list, such as `list[1].foo`.
   * Support more complex path like `list[].foo[].bar`
   */
var getDependValues = exports.getDependValues = function getDependValues(formData, dependPath, props, dependencieItem) {
  var indexReg = /\[[0-9]*\]/;
  if (indexReg.test(dependPath)) {
    var currentIndex = (0, _utils._get)(props, 'path.0');
    var dependIndex = dependPath.match(indexReg)[0].replace('[', '').replace(']', '');
    var listPath = dependPath.split(indexReg)[0];
    var itemIndex = dependIndex || currentIndex;
    var itemPath = dependPath.replace("".concat(listPath, "[").concat(dependIndex, "]."), '');
    var listData = (0, _utils._get)(formData, "".concat(listPath, "[").concat(itemIndex, "]"));
    dependencieItem.push(listPath, itemIndex);
    return getDependValues(listData, itemPath, props, dependencieItem);
  }
  dependencieItem.push.apply(dependencieItem, _toConsumableArray(dependPath.split('.')));
  return (0, _utils._get)(formData, dependPath);
};