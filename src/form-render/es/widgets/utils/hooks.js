import { useReducer, useRef, useEffect } from 'react';
export function usePrevious(value) {
  var ref = useRef();
  useEffect(function () {
    ref.current = value;
  }, [value]);
  return ref.current;
}
// 类似于class component的setState
export var useSet = function useSet(initState) {
  return useReducer(function (state, newState) {
    return Object.assign(Object.assign({}, state), newState);
  }, initState);
};