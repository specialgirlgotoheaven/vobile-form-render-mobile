"use strict";

function _typeof2(o) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof2(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("antd/es/button/style");
var _button = _interopRequireDefault(require("antd/es/button"));
require("antd/es/form/style");
var _form = _interopRequireDefault(require("antd/es/form"));
require("antd/es/message/style");
var _message2 = _interopRequireDefault(require("antd/es/message"));
require("antd/es/config-provider/style");
var _configProvider = _interopRequireDefault(require("antd/es/config-provider"));
var _tslib = require("tslib");
var _react = _interopRequireWildcard(require("react"));
var _utils = require("../../utils");
var _mapping = require("../../models/mapping");
var _validates = require("../../models/validates");
var _modules = require("./modules");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof2(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
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
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
var _default = exports.default = function _default(props) {
  var _a, _b;
  var form = props.form,
    schema = props.schema,
    path = props.path,
    parentLitPath = props.parentLitPath,
    renderCore = props.renderCore,
    rootPath = props.rootPath,
    methods = props.methods,
    upperCtx = props.upperCtx,
    formCtx = props.formCtx,
    configContext = props.configContext,
    setListData = props.setListData;
  var widgets = configContext.widgets,
    globalConfig = configContext.globalConfig;
  var configCtx = (0, _react.useContext)(_configProvider.default.ConfigContext);
  var t = (0, _utils.translation)(configCtx);
  var defaultAddBtnProps = {
    type: 'dashed',
    block: true,
    children: t('add_item')
  };
  var defaultDelConfirmProps = {
    title: t('confirm_delete'),
    okText: t('confirm'),
    cancelText: t('cancel')
  };
  var defaultActionColumnProps = {
    colHeaderText: t('operate')
  };
  var widgetName = schema.widget || 'cardList';
  var Widget = (0, _mapping.getWidget)(widgetName, widgets);
  var listProps = schema.props,
    removeBtn = schema.removeBtn,
    _schema$rules = schema.rules,
    rules = _schema$rules === void 0 ? [] : _schema$rules,
    otherSchema = (0, _tslib.__rest)(schema, ["props", "removeBtn", "rules"]);
  var _c = listProps || {},
    addBtnProps = _c.addBtnProps,
    delConfirmProps = _c.delConfirmProps,
    actionColumnProps = _c.actionColumnProps,
    hideAdd = _c.hideAdd,
    hideCopy = _c.hideCopy,
    hideMove = _c.hideMove,
    hideDelete = _c.hideDelete,
    onAdd = _c.onAdd,
    onRemove = _c.onRemove,
    onMove = _c.onMove,
    onCopy = _c.onCopy,
    otherListProps = (0, _tslib.__rest)(_c, ["addBtnProps", "delConfirmProps", "actionColumnProps", "hideAdd", "hideCopy", "hideMove", "hideDelete", "onAdd", "onRemove", "onMove", "onCopy"]);
  var getValueFromKey = (0, _modules.getParamValue)(formCtx, upperCtx, schema);
  var readOnly = getValueFromKey('readOnly');
  var preRootPath = _toConsumableArray(rootPath || []).splice(0, rootPath.length - 1);
  var displayType = getValueFromKey('displayType');
  if (hideMove === undefined && ((_a = globalConfig === null || globalConfig === void 0 ? void 0 : globalConfig.listOperate) === null || _a === void 0 ? void 0 : _a.hideMove)) {
    hideMove = globalConfig === null || globalConfig === void 0 ? void 0 : globalConfig.listOperate.hideMove;
  }
  var listData = form.getFieldValue([].concat(_toConsumableArray(preRootPath), _toConsumableArray(path))) || [];
  if ((otherSchema === null || otherSchema === void 0 ? void 0 : otherSchema.min) > 0 && listData.length <= (otherSchema === null || otherSchema === void 0 ? void 0 : otherSchema.min)) {
    hideDelete = true;
  }
  if ((otherSchema === null || otherSchema === void 0 ? void 0 : otherSchema.max) > 0 && (otherSchema === null || otherSchema === void 0 ? void 0 : otherSchema.max) <= listData.length) {
    hideAdd = true;
  }
  if (hideAdd) {
    hideCopy = true;
  }
  if (readOnly) {
    hideAdd = true;
    hideCopy = true;
    hideDelete = true;
    hideMove = true;
  }
  var defaultValue = (0, _react.useMemo)(function () {
    var _a;
    var result = (_a = schema.default) !== null && _a !== void 0 ? _a : schema.defaultValue;
    if (result === undefined) {
      result = form.getFieldValue([].concat(_toConsumableArray(preRootPath), _toConsumableArray(path)));
      if (!result && !['drawerList', 'list1'].includes(widgetName)) {
        result = [{}];
      }
    }
    return result;
  }, []);
  (0, _react.useEffect)(function () {
    setListData(defaultValue || []);
  }, []);
  var handleAdd = function handleAdd(add) {
    return function (data) {
      var addFunc = onAdd;
      if (typeof onAdd === 'string') {
        addFunc = methods[onAdd];
      }
      if ((0, _utils.isFunction)(addFunc)) {
        addFunc(function (funData) {
          return add(funData || data);
        }, {
          schema: schema,
          data: data
        });
        return;
      }
      add(data);
    };
  };
  var handleRemove = function handleRemove(remove) {
    return function (index) {
      var removeFunc = onRemove;
      if (typeof onRemove === 'string') {
        removeFunc = methods[onRemove];
      }
      if ((0, _utils.isFunction)(removeFunc)) {
        var data = form.getFieldValue([].concat(_toConsumableArray(preRootPath), _toConsumableArray(path), [index]));
        removeFunc(function () {
          return remove(index);
        }, {
          schema: schema,
          index: index,
          data: data
        });
        return;
      }
      remove(index);
    };
  };
  var handleMove = function handleMove(move) {
    return function (form, to) {
      var moveFunc = onMove;
      if (typeof moveFunc === 'string') {
        moveFunc = methods[onMove];
      }
      if ((0, _utils.isFunction)(moveFunc)) {
        moveFunc(function () {
          return move(form, to);
        }, {
          schema: schema,
          form: form,
          to: to
        });
        return;
      }
      move(form, to);
    };
  };
  var handleCopy = function handleCopy(add, fields) {
    return function (data) {
      if (schema.max && fields.length === schema.max) {
        return _message2.default.warning(t('copy_max_tip'));
      }
      var copyFunc = onCopy;
      if (typeof onCopy === 'string') {
        copyFunc = methods[onCopy];
      }
      if ((0, _utils.isFunction)(copyFunc)) {
        copyFunc(function (funData) {
          return add(funData || data);
        }, {
          schema: schema,
          data: data
        });
        return;
      }
      add(data);
    };
  };
  var handleDelete = function handleDelete() {
    if ((0, _utils.isFunction)(removeBtn === null || removeBtn === void 0 ? void 0 : removeBtn.onClick)) {
      removeBtn.onClick(function () {
        form.setSchemaByPath(path, {
          hidden: true
        });
      });
      return;
    }
    form.setSchemaByPath(path, {
      hidden: true
    });
  };
  var operateBtnType = (_b = globalConfig === null || globalConfig === void 0 ? void 0 : globalConfig.listOperate) === null || _b === void 0 ? void 0 : _b.btnType;
  var ruleList = [];
  if (!readOnly) {
    ruleList = [{
      validator: function validator(_, data) {
        return (0, _tslib.__awaiter)(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var _d;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                setListData(data);
                if (otherSchema === null || otherSchema === void 0 ? void 0 : otherSchema.min) {
                  _context.next = 3;
                  break;
                }
                return _context.abrupt("return");
              case 3:
                if (!(!data || data.length < otherSchema.min)) {
                  _context.next = 5;
                  break;
                }
                return _context.abrupt("return", Promise.reject(new Error(((_d = otherSchema === null || otherSchema === void 0 ? void 0 : otherSchema.message) === null || _d === void 0 ? void 0 : _d.min) || "\u6570\u636E\u957F\u5EA6\u5FC5\u987B\u5927\u4E8E\u7B49\u4E8E".concat(otherSchema.min))));
              case 5:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
      }
    }].concat(_toConsumableArray((0, _validates.transformRules)(rules || [], methods, form)));
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_form.default.List, {
    name: path,
    initialValue: defaultValue,
    rules: ruleList
  }, function (fields, operation, _ref) {
    var errors = _ref.errors;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Widget, Object.assign({}, otherListProps, {
      configContext: configContext,
      form: form,
      schema: otherSchema,
      fields: fields,
      operation: operation,
      path: path,
      listName: path,
      parentLitPath: parentLitPath,
      rootPath: [].concat(_toConsumableArray(preRootPath), _toConsumableArray(path)),
      readOnly: readOnly,
      methods: methods,
      renderCore: renderCore,
      widgets: widgets,
      hideAdd: hideAdd,
      hideCopy: hideCopy,
      hideDelete: hideDelete,
      hideMove: hideMove,
      addItem: handleAdd(operation.add),
      removeItem: handleRemove(operation.remove),
      moveItem: handleMove(operation.move),
      copyItem: handleCopy(operation.add, fields),
      temporary: {
        displayType: displayType
      },
      addBtnProps: Object.assign(Object.assign({}, defaultAddBtnProps), addBtnProps),
      delConfirmProps: Object.assign(Object.assign({}, defaultDelConfirmProps), delConfirmProps),
      actionColumnProps: Object.assign(Object.assign({}, defaultActionColumnProps), actionColumnProps),
      copyBtnProps: {
        children: t('copy'),
        btnType: operateBtnType
      },
      editorBtnProps: {
        children: t('edit'),
        btnType: operateBtnType
      },
      deleteBtnProps: {
        children: t('delete'),
        btnType: operateBtnType
      },
      moveUpBtnProps: {
        children: t('moveUp'),
        btnType: operateBtnType
      },
      moveDownBtnProps: {
        children: t('moveDown'),
        btnType: operateBtnType
      }
    })), (errors === null || errors === void 0 ? void 0 : errors.length) !== 0 && ( /*#__PURE__*/_react.default.createElement("div", {
      style: {
        marginBottom: '12px'
      }
    }, /*#__PURE__*/_react.default.createElement(_form.default.ErrorList, {
      errors: errors
    }))));
  }), removeBtn && ( /*#__PURE__*/_react.default.createElement(_button.default, Object.assign({
    type: 'link',
    danger: true
  }, removeBtn, {
    onClick: handleDelete
  }), (removeBtn === null || removeBtn === void 0 ? void 0 : removeBtn.text) || t('delete'))));
};