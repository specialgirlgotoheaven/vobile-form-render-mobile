"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tslib = require("tslib");
var displayTypeEnum = {
  column: 'vertical',
  row: 'horizontal',
  inline: 'inline'
};
var transformProps = function transformProps(props) {
  var schema = props.schema,
    beforeFinish = props.beforeFinish,
    onMount = props.onMount,
    _props$displayType = props.displayType,
    displayType = _props$displayType === void 0 ? 'column' : _props$displayType,
    watch = props.watch,
    _props$removeHiddenDa = props.removeHiddenData,
    removeHiddenData = _props$removeHiddenDa === void 0 ? true : _props$removeHiddenDa,
    readOnly = props.readOnly,
    _props$column = props.column,
    column = _props$column === void 0 ? 1 : _props$column,
    locale = props.locale,
    configProvider = props.configProvider,
    validateMessages = props.validateMessages,
    debug = props.debug,
    id = props.id,
    labelWidth = props.labelWidth,
    maxWidth = props.maxWidth,
    form = props.form,
    onFinish = props.onFinish,
    onFinishFailed = props.onFinishFailed,
    logOnMount = props.logOnMount,
    logOnSubmit = props.logOnSubmit,
    labelCol = props.labelCol,
    fieldCol = props.fieldCol,
    className = props.className,
    otherProps = (0, _tslib.__rest)(props, ["schema", "beforeFinish", "onMount", "displayType", "watch", "removeHiddenData", "readOnly", "column", "locale", "configProvider", "validateMessages", "debug", "id", "labelWidth", "maxWidth", "form", "onFinish", "onFinishFailed", "logOnMount", "logOnSubmit", "labelCol", "fieldCol", "className"]);
  var formProps = Object.assign({}, otherProps);
  if (displayType) {
    formProps.layout = displayTypeEnum[displayType] || 'horizontal';
  }
  return {
    formProps: formProps,
    schema: schema,
    displayType: displayType,
    onFinish: onFinish,
    beforeFinish: beforeFinish,
    onMount: onMount,
    watch: watch,
    readOnly: readOnly,
    column: column,
    className: className,
    locale: locale,
    configProvider: configProvider,
    form: form,
    labelWidth: labelWidth,
    validateMessages: validateMessages,
    id: id,
    onFinishFailed: onFinishFailed,
    removeHiddenData: removeHiddenData,
    logOnMount: logOnMount,
    logOnSubmit: logOnSubmit,
    labelCol: labelCol,
    fieldCol: fieldCol,
    maxWidth: maxWidth
  };
};
var _default = exports.default = transformProps;