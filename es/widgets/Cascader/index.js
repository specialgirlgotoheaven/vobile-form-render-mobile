import _Cascader from "antd-mobile/es/components/cascader";
import { __rest } from "tslib";
import React, { useRef, useImperativeHandle } from 'react';
import { omit } from 'lodash-es';
export default (function (props) {
  var _a = omit(props, ['addons', 'schema']),
    _a$placeholder = _a.placeholder,
    placeholder = _a$placeholder === void 0 ? '请选择' : _a$placeholder,
    value = _a.value,
    onChange = _a.onChange,
    options = _a.options,
    rest = __rest(_a, ["placeholder", "value", "onChange", "options"]);
  var pickerRef = useRef(null);
  // 使用useImperativeHandle暴露方法给外部
  useImperativeHandle(props.addons.fieldRef, function () {
    return Object.assign({}, pickerRef === null || pickerRef === void 0 ? void 0 : pickerRef.current);
  });
  return /*#__PURE__*/React.createElement(_Cascader, Object.assign({}, rest, {
    ref: pickerRef,
    value: value,
    options: options,
    onConfirm: onChange
  }), function (items) {
    if (items.every(function (i) {
      return i === null;
    })) {
      return /*#__PURE__*/React.createElement("span", {
        style: {
          color: '#ccc'
        }
      }, placeholder);
    } else {
      return items.map(function (i) {
        var _a;
        return (_a = i === null || i === void 0 ? void 0 : i.label) !== null && _a !== void 0 ? _a : '未选择';
      }).join('-');
    }
  });
});