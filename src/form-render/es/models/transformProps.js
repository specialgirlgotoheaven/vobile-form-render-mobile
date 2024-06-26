import { __rest } from "tslib";
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
    mapping = props.mapping,
    debugCss = props.debugCss,
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
    footer = props.footer,
    operateExtra = props.operateExtra,
    logOnMount = props.logOnMount,
    logOnSubmit = props.logOnSubmit,
    labelCol = props.labelCol,
    fieldCol = props.fieldCol,
    disabled = props.disabled,
    className = props.className,
    validateTrigger = props.validateTrigger,
    antdVersion = props.antdVersion,
    otherProps = __rest(props, ["schema", "beforeFinish", "onMount", "displayType", "watch", "removeHiddenData", "readOnly", "column", "mapping", "debugCss", "locale", "configProvider", "validateMessages", "debug", "id", "labelWidth", "maxWidth", "form", "onFinish", "onFinishFailed", "footer", "operateExtra", "logOnMount", "logOnSubmit", "labelCol", "fieldCol", "disabled", "className", "validateTrigger", "antdVersion"]);
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
    disabled: disabled,
    column: column,
    mapping: mapping,
    debugCss: debugCss,
    locale: locale,
    configProvider: configProvider,
    footer: footer,
    form: form,
    labelWidth: labelWidth,
    validateMessages: validateMessages,
    debug: debug,
    id: id,
    onFinishFailed: onFinishFailed,
    removeHiddenData: removeHiddenData,
    operateExtra: operateExtra,
    logOnMount: logOnMount,
    logOnSubmit: logOnSubmit,
    labelCol: labelCol,
    fieldCol: fieldCol,
    maxWidth: maxWidth,
    className: className,
    validateTrigger: validateTrigger,
    antdVersion: antdVersion
  };
};
export default transformProps;