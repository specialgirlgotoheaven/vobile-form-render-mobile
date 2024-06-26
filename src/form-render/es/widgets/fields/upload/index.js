import "antd/es/button/style";
import _Button from "antd/es/button";
import "antd/es/upload/style";
import _Upload from "antd/es/upload";
import _UploadOutlined from "@ant-design/icons/lib/icons/UploadOutlined";
import "antd/es/message/style";
import _message from "antd/es/message";
import "antd/es/config-provider/style";
import _ConfigProvider from "antd/es/config-provider";
import React, { useContext } from 'react';
import { get } from 'lodash-es';
import { translation } from '../../utils';
import "./index.css";
var FrUpload = function FrUpload(_ref) {
  var action = _ref.action,
    value = _ref.value,
    _onChange = _ref.onChange,
    uploadProps = _ref.uploadProps,
    buttonProps = _ref.buttonProps,
    schema = _ref.schema;
  var configCtx = useContext(_ConfigProvider.ConfigContext);
  var t = translation(configCtx);
  var props = Object.assign({
    name: 'file',
    type: 'file',
    action: action,
    onChange: function onChange(info) {
      if (info.file.status === 'done') {
        _message.success("".concat(info.file.name, " ").concat(t('upload_success')));
        var path = get(schema, 'props.path', '');
        var url = path ? get(info.file.response, path) : info.file.response.url;
        _onChange(url);
      } else if (info.file.status === 'error') {
        _message.error("".concat(info.file.name, " ").concat(t('upload_fail')));
      }
    },
    onRemove: function onRemove() {
      _onChange('');
    }
  }, uploadProps);
  var defaultBtnProps = {
    icon: /*#__PURE__*/React.createElement(_UploadOutlined, null),
    children: t('upload')
  };
  var btnProps = Object.assign(Object.assign({}, defaultBtnProps), buttonProps);
  return /*#__PURE__*/React.createElement("div", {
    className: 'fr-upload-mod'
  }, /*#__PURE__*/React.createElement(_Upload, Object.assign({}, props, {
    className: 'fr-upload-file'
  }), /*#__PURE__*/React.createElement(_Button, Object.assign({}, btnProps))), value && ( /*#__PURE__*/React.createElement("a", {
    href: value,
    target: '_blank',
    rel: 'noopener noreferrer',
    className: 'fr-upload-preview'
  }, t('uploaded_address'))));
};
export default FrUpload;