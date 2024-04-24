import "antd/es/popover/style";
import _Popover from "antd/es/popover";
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
import { __rest } from "tslib";
import React, { useState, useRef } from 'react';
var VirtualCell = function VirtualCell(props) {
  var renderCore = props.renderCore,
    schema = props.schema,
    dataIndex = props.dataIndex,
    otherProps = __rest(props, ["renderCore", "schema", "dataIndex"]);
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    errorMsg = _useState2[0],
    setErrorMsg = _useState2[1];
  var _useState3 = useState(),
    _useState4 = _slicedToArray(_useState3, 2),
    visible = _useState4[0],
    setVisible = _useState4[1];
  var mouseRef = useRef();
  var onStatusChange = function onStatusChange(_, errors) {
    var message = errors[0] || null;
    setErrorMsg(message);
    if (mouseRef.current && message) {
      setVisible(true);
    }
  };
  if (!schema.properties[dataIndex].onStatusChange) {
    schema.properties[dataIndex].onStatusChange = onStatusChange;
  }
  var popoverVisible = visible && errorMsg;
  var popoverProps = {
    open: popoverVisible
  };
  if (window.antdVersion === 'v4') {
    popoverProps = {
      visible: popoverVisible
    };
  }
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: function onMouseEnter() {
      mouseRef.current = true;
      setVisible(true);
    },
    onMouseLeave: function onMouseLeave() {
      mouseRef.current = false;
      setVisible(false);
    }
  }, /*#__PURE__*/React.createElement(_Popover, Object.assign({
    overlayClassName: 'fr-popover-error',
    content: errorMsg,
    placement: 'topRight'
  }, popoverProps), renderCore(Object.assign(Object.assign({}, otherProps), {
    schema: schema
  }))));
};
export default VirtualCell;