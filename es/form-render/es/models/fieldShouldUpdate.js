import { parseExpression } from './expression';
// 提取 formData. 开头的字符串
var extractFormDataStrings = function extractFormDataStrings(list) {
  var result = [];
  list.forEach(function (str) {
    // TODO: 为啥要拆开来获取？
    var regex = /formData.\w+(.\w+)*(\(.*\))?/g; // 匹配formData.后面跟着字母、数字、下划线间隔的组合
    var matches = str.match(regex);
    if (matches) {
      result = result.concat(matches);
    }
  });
  return result;
};
// 提取 rootValue. 开头的字符串
var extractRootValueStrings = function extractRootValueStrings(list) {
  var result = [];
  list.forEach(function (str) {
    var regex = /rootValue.\w+(.\w+)*(\(.*\))?/g; // 匹配formData.后面跟着字母、数字、下划线间隔的组合
    var matches = str.match(regex);
    if (matches) {
      result = result.concat(matches);
    }
  });
  return result;
};
// 提取 {{ }} 里面的内容
var findStrList = function findStrList(str, type) {
  var regex = /{{(.*?)}}/g;
  var matches = [];
  var match;
  while ((match = regex.exec(str)) !== null) {
    matches.push(match[1]);
  }
  ;
  if (type === 'formData') {
    return extractFormDataStrings(matches);
  }
  if (type === 'rootValue') {
    return extractRootValueStrings(matches);
  }
  return [];
};
var getListEveryResult = function getListEveryResult(list, preValue, nextValue, dataPath) {
  return list.every(function (item) {
    var pre = parseExpression(item, preValue, dataPath);
    var curr = parseExpression(item, nextValue, dataPath);
    return pre === curr;
  });
};
export default (function (str, dataPath, dependencies, shouldUpdateOpen) {
  return function (preValue, nextValue) {
    // dependencies 先不处理
    if (dependencies) {
      return true;
    }
    var formDataList = findStrList(str, 'formData');
    var rootValueList = findStrList(str, 'rootValue');
    var formDataRes = getListEveryResult(formDataList, preValue, nextValue, dataPath);
    var rootValueRes = getListEveryResult(rootValueList, preValue, nextValue, dataPath);
    if (formDataRes && rootValueRes) {
      return false;
    }
    return true;
  };
});