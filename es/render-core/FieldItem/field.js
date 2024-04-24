import { __rest } from "tslib";
import React from 'react';
import { useUpdateEffect } from 'ahooks';
var FieldWrapper = function FieldWrapper(props) {
  var Field = props.Field,
    fieldProps = props.fieldProps,
    defaultValue = props.defaultValue,
    otherProps = __rest(props, ["Field", "fieldProps", "defaultValue"]);
  useUpdateEffect(function () {
    otherProps.onChange(defaultValue);
  }, [JSON.stringify(defaultValue)]);
  return /*#__PURE__*/React.createElement(Field, Object.assign({}, otherProps, fieldProps));
};
export default FieldWrapper;