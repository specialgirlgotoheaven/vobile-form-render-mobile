"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePrevious = usePrevious;
exports.useSet = void 0;
var _react = require("react");
function usePrevious(value) {
  var ref = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    ref.current = value;
  }, [value]);
  return ref.current;
}
// 类似于class component的setState
var useSet = exports.useSet = function useSet(initState) {
  return (0, _react.useReducer)(function (state, newState) {
    return Object.assign(Object.assign({}, state), newState);
  }, initState);
};