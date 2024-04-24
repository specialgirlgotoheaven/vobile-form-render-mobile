import { createStore as createx } from 'zustand';
// 将 useStore 改为 createStore， 并把它改为 create 方法
export var createStore = function createStore() {
  return createx(function (setState, get) {
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