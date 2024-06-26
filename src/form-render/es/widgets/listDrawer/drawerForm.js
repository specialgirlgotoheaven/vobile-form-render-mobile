import "antd/es/button/style";
import _Button from "antd/es/button";
import "antd/es/space/style";
import _Space from "antd/es/space";
import "antd/es/drawer/style";
import _Drawer from "antd/es/drawer";
import "antd/es/config-provider/style";
import _ConfigProvider from "antd/es/config-provider";
import React, { useContext } from 'react';
import { translation } from '../utils';
var DrawerForm = function DrawerForm(props) {
  var children = props.children,
    onConfirm = props.onConfirm,
    onClose = props.onClose;
  var configCtx = useContext(_ConfigProvider.ConfigContext);
  var t = translation(configCtx);
  var drawerProps = {
    open: true
  };
  if (window.antdVersion === 'v4') {
    drawerProps = {
      visible: true
    };
  }
  return /*#__PURE__*/React.createElement(_Drawer, Object.assign({}, drawerProps, {
    width: 600,
    title: t('operate'),
    onClose: onClose,
    extra: /*#__PURE__*/React.createElement(_Space, null, /*#__PURE__*/React.createElement(_Button, {
      onClick: onClose
    }, t('cancel')), /*#__PURE__*/React.createElement(_Button, {
      type: 'primary',
      onClick: onConfirm
    }, t('confirm')))
  }), children);
};
export default DrawerForm;