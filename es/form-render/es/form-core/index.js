function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
import "antd/es/space/style";
import _Space from "antd/es/space";
import "antd/es/col/style";
import _Col from "antd/es/col";
import "antd/es/row/style";
import _Row from "antd/es/row";
import "antd/es/form/style";
import _Form from "antd/es/form";
import "antd/es/button/style";
import _Button from "antd/es/button";
import "antd/es/config-provider/style";
import _ConfigProvider from "antd/es/config-provider";
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
import { __awaiter, __rest } from "tslib";
import React, { useEffect, useContext } from 'react';
import classNames from 'classnames';
import { cloneDeep } from 'lodash-es';
import { useStore } from 'zustand';
import { FRContext } from '../models/context';
import transformProps from '../models/transformProps';
import { parseValuesToBind } from '../models/bindValues';
import filterValuesHidden from '../models/filterValuesHidden';
import filterValuesUndefined from '../models/filterValuesUndefined';
import { getFormItemLayout } from '../models/layout';
import { translation, isFunction } from '../utils';
import { valuesWatch, immediateWatch, yymmdd, msToTime, getSessionItem, setSessionItem } from '../models/formCoreUtils';
import RenderCore from '../render-core';
import "./index.css";
var FormCore = function FormCore(props) {
  var _a, _b, _c, _d, _e;
  var store = useContext(FRContext);
  var schema = useStore(store, function (state) {
    return state.schema;
  });
  var flattenSchema = useStore(store, function (state) {
    return state.flattenSchema;
  });
  var setContext = useStore(store, function (state) {
    return state.setContext;
  });
  var configCtx = useContext(_ConfigProvider.ConfigContext);
  var t = translation(configCtx);
  var _f = schema || {},
    type = _f.type,
    properties = _f.properties,
    schemProps = __rest(_f, ["type", "properties"]);
  var _transformProps = transformProps(Object.assign(Object.assign({}, props), schemProps)),
    formProps = _transformProps.formProps,
    displayType = _transformProps.displayType,
    beforeFinish = _transformProps.beforeFinish,
    watch = _transformProps.watch,
    onMount = _transformProps.onMount,
    column = _transformProps.column,
    labelWidth = _transformProps.labelWidth,
    labelCol = _transformProps.labelCol,
    fieldCol = _transformProps.fieldCol,
    maxWidth = _transformProps.maxWidth,
    form = _transformProps.form,
    onFinish = _transformProps.onFinish,
    onFinishFailed = _transformProps.onFinishFailed,
    readOnly = _transformProps.readOnly,
    disabled = _transformProps.disabled,
    footer = _transformProps.footer,
    removeHiddenData = _transformProps.removeHiddenData,
    operateExtra = _transformProps.operateExtra,
    logOnMount = _transformProps.logOnMount,
    logOnSubmit = _transformProps.logOnSubmit,
    id = _transformProps.id,
    className = _transformProps.className,
    validateTrigger = _transformProps.validateTrigger,
    antdVersion = _transformProps.antdVersion;
  useEffect(function () {
    form.__initStore(store);
    setTimeout(initial, 0);
    window.antdVersion = antdVersion;
  }, []);
  useEffect(function () {
    form.setSchema(props.schema, true);
  }, [JSON.stringify(props.schema || {})]);
  useEffect(function () {
    store.setState({
      removeHiddenData: removeHiddenData
    });
  }, [removeHiddenData]);
  useEffect(function () {
    var context = {
      column: column,
      readOnly: readOnly,
      disabled: disabled,
      labelWidth: labelWidth,
      displayType: displayType,
      labelCol: labelCol,
      fieldCol: fieldCol,
      maxWidth: maxWidth,
      validateTrigger: validateTrigger
    };
    setContext(context);
  }, [column, labelCol, fieldCol, displayType, labelWidth, maxWidth, readOnly, disabled, validateTrigger]);
  var initial = function initial() {
    return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = onMount;
            if (!_context.t0) {
              _context.next = 4;
              break;
            }
            _context.next = 4;
            return onMount();
          case 4:
            onMountLogger();
            setTimeout(function () {
              var values = form.getValues();
              immediateWatch(watch, values);
            }, 0);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
  };
  var onMountLogger = function onMountLogger() {
    var start = new Date().getTime();
    if (isFunction(logOnMount) || isFunction(logOnSubmit)) {
      setSessionItem('FORM_MOUNT_TIME', start);
      setSessionItem('FORM_START', start);
    }
    if (isFunction(logOnMount)) {
      var logParams = {
        schema: props.schema,
        url: location.href,
        formData: JSON.stringify(form.getValues()),
        formMount: yymmdd(start)
      };
      if (id) {
        logParams.id = id;
      }
      logOnMount(logParams);
    }
    // 如果是要计算时间，在 onMount 时存一个时间戳
    if (isFunction(logOnSubmit)) {
      setSessionItem('NUMBER_OF_SUBMITS', 0);
      setSessionItem('FAILED_ATTEMPTS', 0);
    }
  };
  var onSubmitLogger = function onSubmitLogger(params) {
    if (!isFunction(logOnSubmit)) {
      return;
    }
    var start = getSessionItem('FORM_START');
    var mount = getSessionItem('FORM_MOUNT_TIME');
    var numberOfSubmits = getSessionItem('NUMBER_OF_SUBMITS') + 1;
    var end = new Date().getTime();
    var failedAttempts = getSessionItem('FAILED_ATTEMPTS');
    if (params.errorFields.length > 0) {
      failedAttempts = failedAttempts + 1;
    }
    var logParams = {
      formMount: yymmdd(mount),
      ms: end - start,
      duration: msToTime(end - start),
      numberOfSubmits: numberOfSubmits,
      failedAttempts: failedAttempts,
      url: location.href,
      formData: JSON.stringify(params.values),
      errors: JSON.stringify(params.errorFields),
      schema: JSON.stringify(schema)
    };
    if (id) {
      logParams.id = id;
    }
    logOnSubmit(logParams);
    setSessionItem('FORM_START', end);
    setSessionItem('NUMBER_OF_SUBMITS', numberOfSubmits);
    setSessionItem('FAILED_ATTEMPTS', failedAttempts);
  };
  var handleValuesChange = function handleValuesChange(changedValues, _allValues) {
    var allValues = filterValuesUndefined(_allValues, true);
    valuesWatch(changedValues, allValues, watch);
  };
  var transFormValues = function transFormValues(_values) {
    var values = cloneDeep(_values);
    values = removeHiddenData ? filterValuesHidden(values, flattenSchema) : cloneDeep(form.getFieldsValue(true));
    values = parseValuesToBind(values, flattenSchema);
    values = filterValuesUndefined(values);
    return values;
  };
  var handleFinish = function handleFinish(_values) {
    return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var values, fieldsError;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            values = transFormValues(_values);
            if (!beforeFinish) {
              _context2.next = 7;
              break;
            }
            _context2.next = 4;
            return beforeFinish({
              data: values,
              schema: schema,
              errors: []
            });
          case 4:
            _context2.t0 = _context2.sent;
            _context2.next = 8;
            break;
          case 7:
            _context2.t0 = null;
          case 8:
            fieldsError = _context2.t0;
            if (!((fieldsError === null || fieldsError === void 0 ? void 0 : fieldsError.length) > 0)) {
              _context2.next = 12;
              break;
            }
            form.setFields(fieldsError);
            return _context2.abrupt("return");
          case 12:
            onSubmitLogger({
              values: values
            });
            onFinish && onFinish(values, []);
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
  };
  var handleFinishFailed = function handleFinishFailed(params) {
    return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var values;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            values = transFormValues(params.values);
            onSubmitLogger(Object.assign(Object.assign({}, params), {
              values: values
            }));
            if (onFinishFailed) {
              _context3.next = 4;
              break;
            }
            return _context3.abrupt("return");
          case 4:
            onFinishFailed(Object.assign(Object.assign({}, params), {
              values: values
            }));
          case 5:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
  };
  var operlabelCol = (_a = getFormItemLayout(column, {}, {
    labelWidth: labelWidth
  })) === null || _a === void 0 ? void 0 : _a.labelCol;
  var actionBtns = [];
  if (!((_b = footer === null || footer === void 0 ? void 0 : footer.reset) === null || _b === void 0 ? void 0 : _b.hide)) {
    actionBtns.push( /*#__PURE__*/React.createElement(_Button, Object.assign({
      key: 'reset'
    }, footer === null || footer === void 0 ? void 0 : footer.reset, {
      onClick: function onClick() {
        return form.resetFields();
      }
    }), ((_c = footer === null || footer === void 0 ? void 0 : footer.reset) === null || _c === void 0 ? void 0 : _c.text) || t('reset')));
  }
  if (!((_d = footer === null || footer === void 0 ? void 0 : footer.submit) === null || _d === void 0 ? void 0 : _d.hide)) {
    actionBtns.push( /*#__PURE__*/React.createElement(_Button, Object.assign({
      key: 'submit',
      type: 'primary',
      onClick: form.submit
    }, footer === null || footer === void 0 ? void 0 : footer.submit), ((_e = footer === null || footer === void 0 ? void 0 : footer.submit) === null || _e === void 0 ? void 0 : _e.text) || t('submit')));
  }
  return /*#__PURE__*/React.createElement(_Form, Object.assign({
    className: classNames('fr-form', _defineProperty({}, className, !!className)),
    labelWrap: true
  }, formProps, {
    disabled: disabled,
    form: form,
    onFinish: handleFinish,
    onFinishFailed: handleFinishFailed,
    onValuesChange: handleValuesChange
  }), /*#__PURE__*/React.createElement(_Row, {
    gutter: displayType === 'row' ? 16 : 24
  }, /*#__PURE__*/React.createElement(RenderCore, {
    schema: schema
  }), operateExtra), schema && !!footer && ( /*#__PURE__*/React.createElement(_Row, {
    gutter: displayType === 'row' ? 16 : 24
  }, /*#__PURE__*/React.createElement(_Col, {
    span: 24 / column
  }, /*#__PURE__*/React.createElement(_Form.Item, {
    label: displayType !== 'column' ? 'hideLabel' : null,
    labelCol: operlabelCol,
    className: 'fr-hide-label'
  }, isFunction(footer) ? ( /*#__PURE__*/React.createElement(_Space, null, footer(actionBtns))) : ( /*#__PURE__*/React.createElement(_Space, null, actionBtns)))))));
};
export default FormCore;