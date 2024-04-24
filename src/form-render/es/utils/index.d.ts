export declare const _set: {
    <T extends object>(object: T, path: import("lodash").PropertyPath, value: any): T;
    <TResult>(object: object, path: import("lodash").PropertyPath, value: any): TResult;
};
export declare const _get: {
    <TObject extends object, TKey extends keyof TObject>(object: TObject, path: TKey | [TKey]): TObject[TKey];
    <TObject_1 extends object, TKey_1 extends keyof TObject_1>(object: TObject_1, path: TKey_1 | [TKey_1]): TObject_1[TKey_1];
    <TObject_2 extends object, TKey_2 extends keyof TObject_2, TDefault>(object: TObject_2, path: TKey_2 | [TKey_2], defaultValue: TDefault): TDefault | Exclude<TObject_2[TKey_2], undefined>;
    <TObject_3 extends object, TKey1 extends keyof TObject_3, TKey2 extends keyof TObject_3[TKey1]>(object: TObject_3, path: [TKey1, TKey2]): TObject_3[TKey1][TKey2];
    <TObject_4 extends object, TKey1_1 extends keyof TObject_4, TKey2_1 extends keyof TObject_4[TKey1_1]>(object: TObject_4, path: [TKey1_1, TKey2_1]): TObject_4[TKey1_1][TKey2_1];
    <TObject_5 extends object, TKey1_2 extends keyof TObject_5, TKey2_2 extends keyof TObject_5[TKey1_2], TDefault_1>(object: TObject_5, path: [TKey1_2, TKey2_2], defaultValue: TDefault_1): TDefault_1 | Exclude<TObject_5[TKey1_2][TKey2_2], undefined>;
    <TObject_6 extends object, TKey1_3 extends keyof TObject_6, TKey2_3 extends keyof TObject_6[TKey1_3], TKey3 extends keyof TObject_6[TKey1_3][TKey2_3]>(object: TObject_6, path: [TKey1_3, TKey2_3, TKey3]): TObject_6[TKey1_3][TKey2_3][TKey3];
    <TObject_7 extends object, TKey1_4 extends keyof TObject_7, TKey2_4 extends keyof TObject_7[TKey1_4], TKey3_1 extends keyof TObject_7[TKey1_4][TKey2_4]>(object: TObject_7, path: [TKey1_4, TKey2_4, TKey3_1]): TObject_7[TKey1_4][TKey2_4][TKey3_1];
    <TObject_8 extends object, TKey1_5 extends keyof TObject_8, TKey2_5 extends keyof TObject_8[TKey1_5], TKey3_2 extends keyof TObject_8[TKey1_5][TKey2_5], TDefault_2>(object: TObject_8, path: [TKey1_5, TKey2_5, TKey3_2], defaultValue: TDefault_2): TDefault_2 | Exclude<TObject_8[TKey1_5][TKey2_5][TKey3_2], undefined>;
    <TObject_9 extends object, TKey1_6 extends keyof TObject_9, TKey2_6 extends keyof TObject_9[TKey1_6], TKey3_3 extends keyof TObject_9[TKey1_6][TKey2_6], TKey4 extends keyof TObject_9[TKey1_6][TKey2_6][TKey3_3]>(object: TObject_9, path: [TKey1_6, TKey2_6, TKey3_3, TKey4]): TObject_9[TKey1_6][TKey2_6][TKey3_3][TKey4];
    <TObject_10 extends object, TKey1_7 extends keyof TObject_10, TKey2_7 extends keyof TObject_10[TKey1_7], TKey3_4 extends keyof TObject_10[TKey1_7][TKey2_7], TKey4_1 extends keyof TObject_10[TKey1_7][TKey2_7][TKey3_4]>(object: TObject_10, path: [TKey1_7, TKey2_7, TKey3_4, TKey4_1]): TObject_10[TKey1_7][TKey2_7][TKey3_4][TKey4_1];
    <TObject_11 extends object, TKey1_8 extends keyof TObject_11, TKey2_8 extends keyof TObject_11[TKey1_8], TKey3_5 extends keyof TObject_11[TKey1_8][TKey2_8], TKey4_2 extends keyof TObject_11[TKey1_8][TKey2_8][TKey3_5], TDefault_3>(object: TObject_11, path: [TKey1_8, TKey2_8, TKey3_5, TKey4_2], defaultValue: TDefault_3): TDefault_3 | Exclude<TObject_11[TKey1_8][TKey2_8][TKey3_5][TKey4_2], undefined>;
    <T>(object: import("lodash").NumericDictionary<T>, path: number): T;
    <T_1>(object: import("lodash").NumericDictionary<T_1>, path: number): T_1;
    <T_2, TDefault_4>(object: import("lodash").NumericDictionary<T_2>, path: number, defaultValue: TDefault_4): T_2 | TDefault_4;
    <TDefault_5>(object: null, path: import("lodash").PropertyPath, defaultValue: TDefault_5): TDefault_5;
    (object: null, path: import("lodash").PropertyPath): undefined;
    <TObject_12, TPath extends string>(data: TObject_12, path: TPath): string extends TPath ? any : import("lodash").GetFieldType<TObject_12, TPath>;
    <TObject_13, TPath_1 extends string, TDefault_6 = import("lodash").GetFieldType<TObject_13, TPath_1>>(data: TObject_13, path: TPath_1, defaultValue: TDefault_6): TDefault_6 | Exclude<import("lodash").GetFieldType<TObject_13, TPath_1>, null>;
    (object: any, path: import("lodash").PropertyPath, defaultValue?: any): any;
};
export declare const _cloneDeep: <T>(value: T) => T;
export declare const _has: <T>(object: T, path: import("lodash").PropertyPath) => boolean;
export declare const _merge: {
    <TObject, TSource>(object: TObject, source: TSource): TObject & TSource;
    <TObject_1, TSource1, TSource2>(object: TObject_1, source1: TSource1, source2: TSource2): TObject_1 & TSource1 & TSource2;
    <TObject_2, TSource1_1, TSource2_1, TSource3>(object: TObject_2, source1: TSource1_1, source2: TSource2_1, source3: TSource3): TObject_2 & TSource1_1 & TSource2_1 & TSource3;
    <TObject_3, TSource1_2, TSource2_2, TSource3_1, TSource4>(object: TObject_3, source1: TSource1_2, source2: TSource2_2, source3: TSource3_1, source4: TSource4): TObject_3 & TSource1_2 & TSource2_2 & TSource3_1 & TSource4;
    (object: any, ...otherArgs: any[]): any;
};
export declare const _mergeWith: {
    <TObject, TSource>(object: TObject, source: TSource, customizer: (value: any, srcValue: any, key: string, object: any, source: any) => any): TObject & TSource;
    <TObject_1, TSource1, TSource2>(object: TObject_1, source1: TSource1, source2: TSource2, customizer: (value: any, srcValue: any, key: string, object: any, source: any) => any): TObject_1 & TSource1 & TSource2;
    <TObject_2, TSource1_1, TSource2_1, TSource3>(object: TObject_2, source1: TSource1_1, source2: TSource2_1, source3: TSource3, customizer: (value: any, srcValue: any, key: string, object: any, source: any) => any): TObject_2 & TSource1_1 & TSource2_1 & TSource3;
    <TObject_3, TSource1_2, TSource2_2, TSource3_1, TSource4>(object: TObject_3, source1: TSource1_2, source2: TSource2_2, source3: TSource3_1, source4: TSource4, customizer: (value: any, srcValue: any, key: string, object: any, source: any) => any): TObject_3 & TSource1_2 & TSource2_2 & TSource3_1 & TSource4;
    (object: any, ...otherArgs: any[]): any;
};
export declare const _isUndefined: (value: any) => value is undefined;
export declare const _omitBy: {
    <T>(object: import("lodash").Dictionary<T>, predicate?: import("lodash").ValueKeyIteratee<T>): import("lodash").Dictionary<T>;
    <T_1>(object: import("lodash").NumericDictionary<T_1>, predicate?: import("lodash").ValueKeyIteratee<T_1>): import("lodash").NumericDictionary<T_1>;
    <T_2 extends object>(object: T_2, predicate: import("lodash").ValueKeyIteratee<T_2[keyof T_2]>): Partial<T_2>;
};
export declare const _some: {
    <T>(collection: import("lodash").List<T>, predicate?: import("lodash").ListIterateeCustom<T, boolean>): boolean;
    <T_1 extends object>(collection: T_1, predicate?: import("lodash").ObjectIterateeCustom<T_1, boolean>): boolean;
};
export declare const _isMatch: (object: object, source: object) => boolean;
export declare const isObject: (data: any) => boolean;
export declare const isArray: (data: any) => boolean;
export declare const isFunction: (data: any) => boolean;
export declare function isUrl(string: string): boolean;
export declare const isNumber: (str: string | number) => boolean;
export declare const getArray: (arr: any, defaultValue?: any[]) => any[];
export declare function getFormat(format: any): any;
export declare function isObjType(schema: any): boolean;
export declare function isListType(schema: any): boolean;
export declare function isCheckBoxType(schema: any, readOnly: boolean): boolean;
export declare const translation: (configCtx: any) => (key: string) => any;
export declare const hasFuncProperty: (obj: any) => any;
