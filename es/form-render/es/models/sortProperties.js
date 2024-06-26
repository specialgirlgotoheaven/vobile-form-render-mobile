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
export default (function (properties) {
  var orderKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'order';
  var orderHash = new Map();
  // order不为数字的数据
  var unsortedList = [];
  var insert = function insert(item) {
    var _item = _slicedToArray(item, 2),
      value = _item[1];
    if (typeof value[orderKey] !== 'number') {
      unsortedList.push(item);
      return;
    }
    if (orderHash.has(value[orderKey])) {
      orderHash.get(value[orderKey]).push(item);
    } else {
      orderHash.set(value[orderKey], [item]);
    }
  };
  properties.forEach(function (item) {
    return insert(item);
  });
  var sortedList = Array.from(orderHash.entries()).sort(function (_ref, _ref2) {
    var _ref3 = _slicedToArray(_ref, 1),
      order1 = _ref3[0];
    var _ref4 = _slicedToArray(_ref2, 1),
      order2 = _ref4[0];
    return order1 - order2;
  }) // order值越小越靠前
  .flatMap(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
      items = _ref6[1];
    return items;
  });
  return sortedList.concat(unsortedList);
});