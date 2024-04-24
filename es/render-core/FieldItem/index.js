import _Form from "antd-mobile/es/components/form";
import { __rest } from "tslib";
import React, { useContext } from 'react';
import { FRContext } from '../../models/context';
import { isHasExpression, parseAllExpression } from '../../form-render/es/models/expression';
import { getDependValues } from './module';
import Main from './main';
export default (function (props) {
  var schema = props.schema,
    rootPath = props.rootPath,
    otherProps = __rest(props, ["schema", "rootPath"]);
  var store = useContext(FRContext);
  var _store$getState = store.getState(),
    formSchema = _store$getState.schema;
  var dependencies = schema === null || schema === void 0 ? void 0 : schema.dependencies;
  // No function expressions exist
  if (!isHasExpression(schema) && !(schema === null || schema === void 0 ? void 0 : schema.dependencies)) {
    return /*#__PURE__*/React.createElement(Main, Object.assign({}, props, {
      store: store
    }));
  }
  // Need to listen to form values for dynamic rendering
  return /*#__PURE__*/React.createElement(_Form.Item, {
    noStyle: true,
    //dependencies={schema.dependencies}
    shouldUpdate: function shouldUpdate(prevValues, curValues) {
      // Observe whether the value of a function expression dependency has changed
      // TODO 进行优化
      return true;
    }
  }, function (form) {
    var formData = form.getFieldsValue(true);
    var formDependencies = [];
    var dependValues = (dependencies || []).map(function (depPath) {
      var item = [];
      formDependencies.push(item);
      return getDependValues(formData, depPath, props, item);
    });
    var newSchema = parseAllExpression(schema, formData, rootPath, formSchema);
    return /*#__PURE__*/React.createElement(Main, Object.assign({
      schema: Object.assign(Object.assign({}, newSchema), {
        dependencies: formDependencies
      }),
      rootPath: rootPath
    }, otherProps, {
      dependValues: dependValues,
      store: store
    }));
  });
});