import PubSub from "./PubSub";
export default class Store<T extends object> {
    private actions;
    private mutations;
    private module;
    private status;
    events: PubSub;
    state: T;
    constructor({ moduleName, actions, mutations, state }: StoreParams<T>);
    dispatch(actionKey: string, payload: any): boolean;
    commit(mutationKey: string, payload: any): boolean;
}
export interface StoreParams<T extends object> {
    moduleName: string;
    actions: Record<string, (store: Store<T>, payload: any) => void>;
    mutations: Record<string, (state: T, payload: any) => T>;
    state: T;
}
//# sourceMappingURL=Store.d.ts.map