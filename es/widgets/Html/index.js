import React from 'react';
import { getFormat } from '../utils';
import dayjs from 'dayjs';
// 首字母转大写
var strToUpperCase = function strToUpperCase(str) {
  if (!str) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};
var findLabels = function findLabels(value, options) {
  if (!isValidateArray(value) || !isValidateArray(options)) return [];
  return value.map(function (v) {
    var _a;
    return (_a = options.find(function (o) {
      return o.value === v;
    })) === null || _a === void 0 ? void 0 : _a.label;
  });
};
var flatCascaderOptions = function flatCascaderOptions(options) {
  var result = [];
  var walk = function walk(list) {
    list.forEach(function (i) {
      result.push(i);
      if (isValidateArray(i.children)) {
        walk(i.children);
      }
    });
  };
  walk(options);
  return result;
};
var isValidateArray = function isValidateArray(list) {
  return Array.isArray(list) && list.length > 0;
};
export default (function (props) {
  var _a;
  var value = props.value,
    options = props.options,
    _props$schema = props.schema,
    schema = _props$schema === void 0 ? {} : _props$schema;
  var __html;
  switch (strToUpperCase(schema.widget)) {
    case 'Input':
    case 'TextArea':
    case 'Rate':
    case 'Stepper':
      __html = value;
      break;
    case 'Slider':
      if (isValidateArray(value)) {
        __html = value.join('-');
      } else {
        __html = value;
      }
      break;
    case 'Selector':
      if (isValidateArray(value)) {
        __html = findLabels(value, options).join('，');
      }
      break;
    case 'Switch':
      var _props$uncheckedText = props.uncheckedText,
        uncheckedText = _props$uncheckedText === void 0 ? '否' : _props$uncheckedText,
        _props$checkedText = props.checkedText,
        checkedText = _props$checkedText === void 0 ? '是' : _props$checkedText;
      __html = value ? checkedText : uncheckedText;
      break;
    case 'Radio':
      __html = (_a = options.find(function (o) {
        return o.value === value;
      })) === null || _a === void 0 ? void 0 : _a.label;
      break;
    case 'DatePicker':
      var format = props.format,
        precision = props.precision;
      if (!value) return '-';
      var dateFormat = format || getFormat(precision);
      __html = dayjs(value).format(dateFormat);
      break;
    case 'Cascader':
      var flatOptions = flatCascaderOptions(options);
      __html = findLabels(value, flatOptions).join('-') || '-';
      break;
    case 'Picker':
      {
        var columns = props.columns,
          _options = props.options;
        if (_options && _options.length) {
          __html = findLabels(value, _options).join('-') || '-';
        } else {
          var labels = value === null || value === void 0 ? void 0 : value.map(function (i, index) {
            var _a;
            return (_a = columns[index].find(function (j) {
              return j.value === i;
            })) === null || _a === void 0 ? void 0 : _a.label;
          });
          __html = labels ? labels.join('-') : '-';
        }
        break;
      }
    default:
      __html = '-';
  }
  __html !== null && __html !== void 0 ? __html : __html = '-';
  return /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: __html
    }
  });
});