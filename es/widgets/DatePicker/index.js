import _DatePicker from "antd-mobile/es/components/date-picker";
import { __rest } from "tslib";
import React, { useRef, useImperativeHandle } from 'react';
import { getFormat } from '../utils';
import dayjs from 'dayjs';
import formatPlugin from 'dayjs/plugin/advancedFormat';
import weekOfYearPlugin from 'dayjs/plugin/weekOfYear';
import updateLocalePlugin from 'dayjs/plugin/updateLocale';
import { omit } from 'lodash-es';
dayjs.extend(updateLocalePlugin);
dayjs.extend(formatPlugin);
dayjs.extend(weekOfYearPlugin);
dayjs.updateLocale("en", {
  weekStart: 1
});
export default (function (props) {
  var _a = omit(props, ['addons', 'schema']),
    value = _a.value,
    onChange = _a.onChange,
    _a$precision = _a.precision,
    precision = _a$precision === void 0 ? 'day' : _a$precision,
    _a$placeholder = _a.placeholder,
    placeholder = _a$placeholder === void 0 ? '请选择日期' : _a$placeholder,
    format = _a.format,
    restProps = __rest(_a, ["value", "onChange", "precision", "placeholder", "format"]);
  var pickerRef = useRef(null);
  // 使用useImperativeHandle暴露方法给外部
  useImperativeHandle(props.addons.fieldRef, function () {
    return Object.assign({}, pickerRef === null || pickerRef === void 0 ? void 0 : pickerRef.current);
  });
  var dateFormat = format || getFormat(precision);
  var handleChange = function handleChange(date) {
    var dateString = dayjs(date).format(dateFormat);
    onChange(dateString);
  };
  return /*#__PURE__*/React.createElement(_DatePicker, Object.assign({
    ref: pickerRef,
    value: dayjs(value, dateFormat).toDate(),
    onConfirm: handleChange,
    precision: precision
  }, restProps), function (date) {
    return /*#__PURE__*/React.createElement("div", null, date && value ? dayjs(date).format(dateFormat) : /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#ccc'
      }
    }, placeholder));
  });
});