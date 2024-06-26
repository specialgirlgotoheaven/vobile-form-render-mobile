import { isUndefined, omitBy } from 'lodash-es';
import { isObject, isArray } from '../utils';
export default (function (values, notFilter) {
  var recursiveArray = function recursiveArray(list) {
    var result = list.map(function (item) {
      if (isObject(item)) {
        return recursiveObj(item, false);
      }
      if (isArray(item)) {
        return recursiveArray(item);
      }
      return item;
    });
    if (Object.keys(result).length === 0) {
      return undefined;
    }
    return result;
  };
  var recursiveObj = function recursiveObj(_obj) {
    var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (_obj._isAMomentObject) {
      return _obj;
    }
    var obj = omitBy(_obj, isUndefined);
    Object.keys(obj).forEach(function (key) {
      var item = obj[key];
      if (isObject(item)) {
        obj[key] = recursiveObj(item);
      }
      if (isArray(item)) {
        var data = recursiveArray(item);
        obj[key] = data;
        if (!notFilter && data) {
          obj[key] = data.filter(function (item) {
            return item !== undefined;
          });
        }
      }
    });
    obj = omitBy(obj, isUndefined);
    if (Object.keys(obj).length === 0 && filter) {
      return undefined;
    }
    return obj;
  };
  return recursiveObj(values) || {};
});