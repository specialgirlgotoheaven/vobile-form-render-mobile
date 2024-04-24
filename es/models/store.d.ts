type FormStore = {
    schema?: any;
    flattenSchema: any;
    context?: any;
    initialized: boolean;
    isCardMode: boolean;
    init?: (schema: FormStore['schema']) => any;
    setContext: (context: any) => any;
    setIsCardMode: (mode: boolean) => void;
};
export declare const createStore: () => import("zustand").StoreApi<FormStore>;
export {};
