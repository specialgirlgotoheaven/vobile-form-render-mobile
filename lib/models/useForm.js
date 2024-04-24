"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _form = _interopRequireDefault(require("antd-mobile/es/components/form"));
var _tslib = require("tslib");
var _react = require("react");
var _lodashEs = require("lodash-es");
var _formCoreUtils = require("form-render/es/models/formCoreUtils");
var _bindValues = require("form-render/es/models/bindValues");
var _flattenSchema = require("form-render/es/models/flattenSchema");
var _filterValuesUndefined = _interopRequireDefault(require("form-render/es/models/filterValuesUndefined"));
var _filterValuesHidden = _interopRequireDefault(require("form-render/es/models/filterValuesHidden"));
var _utils = require("../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var updateSchemaByPath = function updateSchemaByPath(_path, _newSchema, formSchema) {
  var path = (0, _formCoreUtils.getSchemaFullPath)(_path, formSchema);
  var currSchema = (0, _utils._get)(formSchema, path, {});
  var newSchema = (0, _utils.isFunction)(_newSchema) ? _newSchema(currSchema) : _newSchema;
  var result = Object.assign(Object.assign({}, currSchema), newSchema);
  if (newSchema.props) {
    result.props = Object.assign(Object.assign({}, currSchema === null || currSchema === void 0 ? void 0 : currSchema.props), newSchema.props);
  }
  (0, _utils._set)(formSchema, path, result);
};
var getFieldName = function getFieldName(_path) {
  if (!_path) {
    return undefined;
  }
  if (typeof _path === 'boolean') {
    return _path;
  }
  var result = [];
  if ((0, _utils.isArray)(_path)) {
    result = _path.map(function (item) {
      return item.split('.').map(function (ite) {
        if (!isNaN(Number(ite))) {
          return ite * 1;
        }
        return ite;
      });
    });
  }
  result = _path.split('.').map(function (item) {
    if (!isNaN(Number(item))) {
      return item * 1;
    }
    return item;
  });
  result = result.map(function (item) {
    if (typeof item === 'string' && (item === null || item === void 0 ? void 0 : item.indexOf('[')) === 0 && (item === null || item === void 0 ? void 0 : item.indexOf(']')) === (item === null || item === void 0 ? void 0 : item.length) - 1) {
      return Number(item.substring(1, item.length - 1));
    }
    return item;
  });
  return result;
};
var useForm = function useForm() {
  var _Form$useForm = _form.default.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var flattenSchemaRef = (0, _react.useRef)({});
  var storeRef = (0, _react.useRef)();
  var schemaRef = (0, _react.useRef)({});
  var fieldRefs = (0, _react.useRef)({});
  var getFieldError = form.getFieldError,
    getFieldsError = form.getFieldsError,
    setFields = form.setFields,
    isFieldsTouched = form.isFieldsTouched,
    isFieldTouched = form.isFieldTouched,
    isFieldValidating = form.isFieldValidating,
    resetFields = form.resetFields,
    validateFields = form.validateFields,
    otherForm = (0, _tslib.__rest)(form, ["getFieldError", "getFieldsError", "setFields", "isFieldsTouched", "isFieldTouched", "isFieldValidating", "resetFields", "validateFields"]);
  var xform = otherForm;
  var setStoreData = function setStoreData(data) {
    var setState = storeRef.current.setState;
    if (!setState) {
      setTimeout(function () {
        setState({
          schema: schemaRef.current,
          flattenSchema: flattenSchemaRef.current
        });
      }, 0);
    }
    setState(data);
  };
  var handleSchemaUpdate = function handleSchemaUpdate(newSchema) {
    // form.__schema = Object.freeze(newSchema);
    flattenSchemaRef.current = (0, _flattenSchema.flattenSchema)(newSchema) || {};
    schemaRef.current = newSchema;
    setStoreData({
      schema: newSchema,
      flattenSchema: flattenSchemaRef.current
    });
  };
  xform.setSchema = function (obj) {
    var cover = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (!(0, _utils.isObject)(obj)) {
      return;
    }
    if (cover) {
      handleSchemaUpdate(obj);
      return;
    }
    var schema = (0, _lodashEs.cloneDeep)(schemaRef.current);
    Object.keys(obj || {}).forEach(function (path) {
      updateSchemaByPath(path, obj[path], schema);
    });
    handleSchemaUpdate(schema);
  };
  // 设置某个字段的协议
  xform.setSchemaByPath = function (_path, _newSchema) {
    // diff 判断是否需要更新，存在函数跳过
    if (!(0, _utils.hasFuncProperty)(_newSchema) && (0, _lodashEs.isMatch)(_newSchema, xform.getSchemaByPath(_path))) {
      return;
    }
    var schema = (0, _lodashEs.cloneDeep)(schemaRef.current);
    updateSchemaByPath(_path, _newSchema, schema);
    handleSchemaUpdate(schema);
  };
  // form.setSchemaByFullPath = (path: string, newSchema: any) => {
  //   const schema = _cloneDeep(schemaRef.current);
  //   const currSchema = _get(schema, path, {});
  //   const result = _mergeWith(currSchema, newSchema, (objValue, srcValue, key) => {
  //     return srcValue;
  //   });
  //   _set(schema, path, result);
  //   handleSchemaUpdate(schema);
  // }
  // 设置表单数据
  xform.setValues = function (_values) {
    var values = (0, _bindValues.parseBindToValues)(_values, flattenSchemaRef.current);
    form.setFieldsValue(values);
  };
  // 获取表单数据
  xform.getValues = function (nameList, filterFunc) {
    var _a;
    var values = (0, _lodashEs.cloneDeep)(form.getFieldsValue(getFieldName(nameList), filterFunc));
    var _ref = ((_a = storeRef.current) === null || _a === void 0 ? void 0 : _a.getState()) || {},
      removeHiddenData = _ref.removeHiddenData;
    if (removeHiddenData) {
      values = (0, _filterValuesHidden.default)(values, flattenSchemaRef.current);
    }
    values = (0, _filterValuesUndefined.default)(values);
    return (0, _bindValues.parseValuesToBind)(values, flattenSchemaRef.current);
  };
  xform.setValueByPath = function (path, value) {
    var name = getFieldName(path);
    form.setFieldValue(name, value);
  };
  xform.getValueByPath = function (path) {
    var name = getFieldName(path);
    return form.getFieldValue(name);
  };
  xform.getSchemaByPath = function (_path) {
    if (typeof _path !== 'string') {
      console.warn('请输入正确的路径');
    }
    var path = (0, _formCoreUtils.getSchemaFullPath)(_path, schemaRef.current);
    return (0, _utils._get)(schemaRef.current, path);
  };
  xform.getSchema = function () {
    return schemaRef.current;
  };
  // 设置一组字段错误
  xform.setErrorFields = function (fieldsError) {
    var fieldsData = (0, _formCoreUtils.transformFieldsData)(fieldsError, getFieldName);
    if (!fieldsData) {
      return;
    }
    setFields(fieldsData);
  };
  // 清空某个字段的错误
  xform.removeErrorField = function (path) {
    setFields([{
      name: getFieldName(path),
      errors: []
    }]);
  };
  // 获取对应字段名的错误信息
  xform.getFieldError = function (path) {
    var name = getFieldName(path);
    return form.getFieldError(name);
  };
  // 获取一组字段名对应的错误信息，返回为数组形式
  xform.getFieldsError = function (path) {
    var name = getFieldName(path);
    return getFieldsError(name);
  };
  // 获取隐藏字段数据
  xform.getHiddenValues = function () {
    var values = xform.getValues();
    var allValues = xform.getValues(true);
    var hiddenValues = {};
    var recursion = function recursion(obj1, obj2, path) {
      Object.keys(obj1).forEach(function (key) {
        var value = obj1[key];
        var _path = path ? "".concat(path, ".").concat(key) : key;
        if (!obj2.hasOwnProperty(key)) {
          (0, _utils._set)(hiddenValues, _path, value);
          return;
        }
        if ((0, _utils.isObject)(value)) {
          recursion(value, obj2[key], _path);
        }
        if ((0, _utils.isArray)(value)) {
          value.map(function (item, index) {
            recursion(item, (0, _utils._get)(obj2, "".concat(key, "[").concat(index, "]"), []), "".concat(_path, "[").concat(index, "]"));
          });
        }
      });
    };
    recursion(allValues, values, null);
    return hiddenValues;
  };
  // 设置一组字段状态
  xform.setFields = function (nameList) {
    var fieldsData = (0, _formCoreUtils.transformFieldsData)(nameList, getFieldName);
    if (!fieldsData) {
      return;
    }
    setFields(fieldsData);
  };
  // 检查一组字段是否被用户操作过，allTouched 为 true 时检查是否所有字段都被操作过
  xform.isFieldsTouched = function (pathList, allTouched) {
    var nameList = (pathList || []).map(function (path) {
      return getFieldName(path);
    });
    return isFieldsTouched(nameList, allTouched);
  };
  // 检查对应字段是否被用户操作过
  xform.isFieldTouched = function (path) {
    var name = getFieldName(path);
    return isFieldTouched(name);
  };
  // 检查对应字段是否被用户操作过
  xform.isFieldValidating = function (path) {
    var name = getFieldName(path);
    return isFieldValidating(name);
  };
  xform.resetFields = function (pathList) {
    var nameList = (pathList || []).map(function (path) {
      return getFieldName(path);
    });
    if (nameList.length > 0) {
      resetFields(nameList);
    } else {
      resetFields();
    }
  };
  // 触发表单验证
  xform.validateFields = function (pathList) {
    var nameList = (pathList || []).map(function (path) {
      return getFieldName(path);
    });
    if (nameList.length > 0) {
      return validateFields(nameList);
    }
    return validateFields();
  };
  // 获取扁平化 schema
  xform.getFlattenSchema = function (path) {
    var _a;
    if (!path) {
      return flattenSchemaRef.current;
    }
    return (_a = flattenSchemaRef.current) === null || _a === void 0 ? void 0 : _a[path];
  };
  xform.__initStore = function (store) {
    storeRef.current = store;
  };
  xform.setFieldRef = function (path, ref) {
    if (!path) {
      return;
    }
    fieldRefs.current[path] = ref;
  };
  xform.getFieldRef = function (path) {
    return fieldRefs.current[path];
  };
  return xform;
};
var _default = exports.default = useForm;