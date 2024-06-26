import "antd/es/button/style";
import _Button from "antd/es/button";
import "antd/es/config-provider/style";
import _ConfigProvider from "antd/es/config-provider";
import "antd/es/form/style";
import _Form from "antd/es/form";
import { __rest } from "tslib";
import React, { useContext, useEffect } from 'react';
import { useUpdateEffect } from 'ahooks';
import { translation, isFunction } from '../../utils';
export var FieldWrapperStatus = function FieldWrapperStatus(props) {
  var Field = props.Field,
    fieldProps = props.fieldProps,
    maxWidth = props.maxWidth,
    initialValue = props.initialValue,
    otherProps = __rest(props, ["Field", "fieldProps", "maxWidth", "initialValue"]);
  var onStatusChange = fieldProps.onStatusChange,
    addons = fieldProps.addons,
    otherFieldProps = __rest(fieldProps, ["onStatusChange", "addons"]);
  var style = maxWidth ? Object.assign({
    maxWidth: maxWidth
  }, fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.style) : Object.assign({}, fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.style);
  var _Form$Item$useStatus = _Form.Item.useStatus(),
    status = _Form$Item$useStatus.status;
  var errors = addons.getFieldError(addons.dataPath);
  useEffect(function () {
    onStatusChange && onStatusChange(status, errors);
  }, [JSON.stringify(errors)]);
  useUpdateEffect(function () {
    otherProps.onChange(initialValue);
  }, [JSON.stringify(initialValue)]);
  return /*#__PURE__*/React.createElement(Field, Object.assign({}, otherProps, otherFieldProps, {
    style: style,
    addons: addons
  }));
};
export var FieldWrapper = function FieldWrapper(props) {
  var Field = props.Field,
    fieldProps = props.fieldProps,
    maxWidth = props.maxWidth,
    initialValue = props.initialValue,
    otherProps = __rest(props, ["Field", "fieldProps", "maxWidth", "initialValue"]);
  var addons = fieldProps.addons,
    schema = fieldProps.schema;
  var _style = maxWidth ? Object.assign({
    maxWidth: maxWidth
  }, fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.style) : Object.assign({}, fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.style);
  var removeBtn = schema.removeBtn;
  var configCtx = useContext(_ConfigProvider.ConfigContext);
  var t = translation(configCtx);
  useUpdateEffect(function () {
    otherProps.onChange(initialValue);
  }, [JSON.stringify(initialValue)]);
  var handleRemove = function handleRemove() {
    if (isFunction(removeBtn === null || removeBtn === void 0 ? void 0 : removeBtn.onClick)) {
      removeBtn.onClick(function () {
        addons.setSchemaByPath(addons.schemaPath, {
          hidden: true
        });
      });
      return;
    }
    addons.setSchemaByPath(addons.schemaPath, {
      hidden: true
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, Object.assign({}, otherProps, fieldProps, {
    style: _style
  })), removeBtn && ( /*#__PURE__*/React.createElement(_Button, Object.assign({
    type: 'link',
    danger: true
  }, removeBtn, {
    onClick: handleRemove
  }), (removeBtn === null || removeBtn === void 0 ? void 0 : removeBtn.text) || t('delete'))));
};