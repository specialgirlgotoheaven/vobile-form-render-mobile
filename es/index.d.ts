/// <reference types="react" />
export * as widgets from './widgets';
export { default as useForm } from './models/useForm';
export { default as connectForm } from './form-core/connectForm';
export type { default as FR, Schema, FRProps, FormInstance, FormParams, FieldParams, WatchProperties, SchemaType, SchemaBase, ValidateParams, ResetParams, RuleItem, } from './type';
declare const _default: import("react").FC<import("./type").FRProps>;
export default _default;
