import _Stepper from "antd-mobile/es/components/stepper";
import _Switch from "antd-mobile/es/components/switch";
import _Selector from "antd-mobile/es/components/selector";
import _Rate from "antd-mobile/es/components/rate";
import _TextArea from "antd-mobile/es/components/text-area";
import _Slider from "antd-mobile/es/components/slider";
import _Input from "antd-mobile/es/components/input";
import React from 'react';
import { omit } from 'lodash-es';
var widgetHoc = function widgetHoc(Widget) {
  return function (props) {
    var widgetProps = omit(props, ['addons', 'schema']);
    return /*#__PURE__*/React.createElement(Widget, Object.assign({}, widgetProps));
  };
};
export var Input = widgetHoc(_Input);
export var Slider = widgetHoc(_Slider);
export var TextArea = widgetHoc(_TextArea);
export var Rate = widgetHoc(_Rate);
export var Selector = widgetHoc(_Selector);
export var Switch = widgetHoc(_Switch);
export var Stepper = widgetHoc(_Stepper);
export { default as Radio } from './Radio';
export { default as DatePicker } from './DatePicker';
export { default as Cascader } from './Cascader';
export { default as Html } from './Html';
export { default as Picker } from './Picker';
// layout widget
export { default as Group } from './Group';
export { default as Card } from './Card';
// export { default as Collapse } from './Collapse';