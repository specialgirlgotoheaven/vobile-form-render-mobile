function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
import { _cloneDeep, isObjType, isListType } from '../utils/index';
export var createDataSkeleton = function createDataSkeleton(schema, formData) {
  var _formData = _cloneDeep(formData);
  var result = _formData;
  if (isObjType(schema)) {
    if (_formData === undefined || _typeof(_formData) !== 'object') {
      _formData = {};
      result = {};
    }
    Object.keys(schema.properties).forEach(function (key) {
      var childSchema = schema.properties[key];
      var childData = _formData[key];
      var childResult = createDataSkeleton(childSchema, childData);
      result[key] = childResult;
    });
  } else if (_formData !== undefined) {
    // result = _formData;
  } else if (schema.default !== undefined) {
    result = _cloneDeep(schema.default);
  } else if (isListType(schema)) {
    result = [createDataSkeleton(schema.items)];
  } else if (schema.type === 'boolean' && !schema.widget) {
    // result = false;
    result = undefined;
  } else {
    result = undefined;
  }
  return result;
};