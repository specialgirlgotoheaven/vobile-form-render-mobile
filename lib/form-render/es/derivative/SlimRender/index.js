"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _formCore = _interopRequireDefault(require("../../form-core"));
var _withProvider = _interopRequireDefault(require("../../withProvider"));
var _html = _interopRequireDefault(require("../../widgets/fields/html"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = exports.default = (0, _withProvider.default)(_formCore.default, {
  Html: _html.default
});