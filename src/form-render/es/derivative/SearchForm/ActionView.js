import _DownOutlined from "@ant-design/icons/lib/icons/DownOutlined";
import _UpOutlined from "@ant-design/icons/lib/icons/UpOutlined";
import "antd/es/button/style";
import _Button from "antd/es/button";
import "antd/es/space/style";
import _Space from "antd/es/space";
import "antd/es/config-provider/style";
import _ConfigProvider from "antd/es/config-provider";
import React, { useContext } from 'react';
import { translation } from '../../utils';
var ActionView = function ActionView(props) {
  var onReset = props.onReset,
    searchBtnRender = props.searchBtnRender,
    style = props.style,
    className = props.className,
    form = props.form,
    searchText = props.searchText,
    resetText = props.resetText,
    hasCollapse = props.hasCollapse,
    setLimitHeight = props.setLimitHeight,
    setExpand = props.setExpand,
    isExpand = props.isExpand,
    loading = props.loading,
    retainBtn = props.retainBtn,
    mode = props.mode;
  var configCtx = useContext(_ConfigProvider.ConfigContext);
  var t = translation(configCtx);
  var handleReset = function handleReset() {
    if (onReset) {
      onReset(form);
      return;
    }
    form.resetFields();
    form.submit();
  };
  var handleCollapse = function handleCollapse() {
    setExpand(!isExpand);
  };
  var searchBtnArr = typeof searchBtnRender === 'function' ? searchBtnRender(form.submit, handleReset, {
    loading: loading
  }) : [];
  if (searchBtnRender) {
    return /*#__PURE__*/React.createElement("div", {
      className: 'flex justify-end w-100'
    }, Array.isArray(searchBtnArr) && searchBtnArr.map(function (ui, idx) {
      return /*#__PURE__*/React.createElement("div", {
        key: idx.toString(),
        style: {
          marginLeft: 8
        }
      }, ui);
    }));
  }
  var submitShow = mode === 'simple' && (typeof retainBtn === 'boolean' || (retainBtn === null || retainBtn === void 0 ? void 0 : retainBtn.includes('submit'))) || mode !== 'simple';
  var resetShow = mode === 'simple' && (typeof retainBtn === 'boolean' || (retainBtn === null || retainBtn === void 0 ? void 0 : retainBtn.includes('reset'))) || mode !== 'simple';
  return /*#__PURE__*/React.createElement("div", {
    className: "flex justify-end w-100 ".concat(className || ''),
    style: style
  }, /*#__PURE__*/React.createElement(_Space, null, submitShow && /*#__PURE__*/React.createElement(_Button, {
    loading: loading,
    type: 'primary',
    onClick: form.submit
  }, searchText), resetShow && /*#__PURE__*/React.createElement(_Button, {
    onClick: handleReset
  }, resetText), hasCollapse && ( /*#__PURE__*/React.createElement("a", {
    onClick: handleCollapse,
    style: {
      cursor: 'pointer'
    }
  }, isExpand ? ( /*#__PURE__*/React.createElement(React.Fragment, null, t('fold'), /*#__PURE__*/React.createElement(_UpOutlined, null))) : ( /*#__PURE__*/React.createElement(React.Fragment, null, t('expand'), /*#__PURE__*/React.createElement(_DownOutlined, null)))))));
};
export default ActionView;