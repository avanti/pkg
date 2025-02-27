import IRuler from "./IRuler";
export interface IContainerProps {
    appName: string;
    components?: any[];
    pages?: IPageComponents[];
    services?: any[];
    config?: any;
    ruler?: IRuler;
}
export interface IPageComponents {
    pageRefs: string[];
    components: any[];
    services?: any[];
}
export interface IContainerContext {
    config: any;
    getService: <T>(serviceName: string) => T | false;
}
declare global {
    interface Window {
        m3Apps: Record<string, Container>;
    }
    interface Document {
        attachEvent: ((event: string, listener: EventListener) => boolean | false) | undefined;
    }
}
export default class Container {
    private ruler;
    private appName;
    private config;
    private componentsConfig;
    private components;
    private pageComponents;
    private services;
    private serviceMap;
    private instances;
    private ctx;
    constructor({ appName, components, pages, services, config, ruler, }: IContainerProps);
    private createContext;
    private instantiateComponent;
    private instantiateService;
    private getService;
    private buildServices;
    private buildComponents;
    private buildPageComponents;
    init(): void;
    bind(compName: string, config: any): void;
    start(): void;
}
//# sourceMappingURL=Container.d.ts.map