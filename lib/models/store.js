"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStore = void 0;
var _zustand = require("zustand");
// 将 useStore 改为 createStore， 并把它改为 create 方法
var createStore = exports.createStore = function createStore() {
  return (0, _zustand.createStore)(function (setState, get) {
    return {
      initialized: false,
      schema: {},
      flattenSchema: {},
      context: {},
      isCardMode: false,
      init: function init(data) {
        return setState(Object.assign({
          initialized: true
        }, data));
      },
      setContext: function setContext(context) {
        return setState({
          context: context
        });
      },
      setIsCardMode: function setIsCardMode(mode) {
        return setState({
          isCardMode: mode
        });
      }
    };
  });
};