import _Picker from "antd-mobile/es/components/picker";
import { __rest } from "tslib";
import React, { useRef, useImperativeHandle } from 'react';
import { omit } from 'lodash-es';
export default (function (props) {
  var _a = omit(props, ['addons', 'schema']),
    value = _a.value,
    onChange = _a.onChange,
    _a$placeholder = _a.placeholder,
    placeholder = _a$placeholder === void 0 ? '请选择' : _a$placeholder,
    options = _a.options,
    columns = _a.columns,
    restProps = __rest(_a, ["value", "onChange", "placeholder", "options", "columns"]);
  var pickerRef = useRef(null);
  // 使用useImperativeHandle暴露方法给外部
  useImperativeHandle(props.addons.fieldRef, function () {
    return Object.assign({}, pickerRef === null || pickerRef === void 0 ? void 0 : pickerRef.current);
  });
  // 只有一列的场景更多，这里兼容下
  var finalColumns = React.useMemo(function () {
    if (columns && columns.length > 0) {
      return columns;
    } else {
      return [options];
    }
  }, [options, columns]);
  return /*#__PURE__*/React.createElement(_Picker, Object.assign({
    value: value,
    onConfirm: function onConfirm(val) {
      return onChange(val);
    },
    ref: pickerRef,
    columns: finalColumns
  }, restProps), function (items) {
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