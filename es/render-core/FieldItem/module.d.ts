import React from 'react';
export declare const getPath: (path: any) => any;
export declare const getLabel: (schema: any, displayType: string, widgets: any, addons: any) => any;
export declare const getExtraView: (extraKey: string, schema: any, widgets: any) => React.JSX.Element;
export declare const getParamValue: (formCtx: any, upperCtx: any, schema: any) => (valueKey: string, isTop?: boolean) => any;
export declare const getFieldProps: (schema: any, { widgets, methods, form, dependValues, globalProps, path, rootPath, fieldRef }: {
    widgets: any;
    methods: any;
    form: any;
    dependValues: any;
    globalProps: any;
    path: any;
    rootPath: any;
    fieldRef: any;
}) => any;
export declare const getDependValues: (formData: any, dependPath: string, props: any, dependencieItem: any[]) => any;
