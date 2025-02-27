import isPage from "./isPage";
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
		attachEvent:
			| ((event: string, listener: EventListener) => boolean | false)
			| undefined;
	}
}

export default class Container {
	private ruler: IRuler;
	private appName: string;
	private config: any;
	private componentsConfig: any;
	private components: any[];
	private pageComponents: IPageComponents[];
	private services: any[];
	private serviceMap: Record<string, any>;
	private instances: Record<string, object>;
	private ctx: IContainerContext;

	constructor({
		appName,
		components,
		pages,
		services,
		config,
		ruler,
	}: IContainerProps) {
		this.appName = appName;
		this.config = config;

		this.pageComponents = pages ? [...pages] : [];
		this.components = components ? [...components] : [];

		this.services = services ? [...services] : [];
		this.serviceMap = {};

		this.instances = {};
		this.componentsConfig = {};

		this.ruler = ruler ? ruler : new isPage();

		this.ctx = this.createContext.call(this);
	}

	private createContext(): IContainerContext {
		return {
			config: this.config,
			getService: this.getService.bind(this),
		};
	}

	private instantiateComponent(Component: any) {
		try {
			if (typeof Component === "function") {
				if (this.componentsConfig[Component.name]) {
					this.instances[Component.name] = new Component(
						this.ctx,
						this.componentsConfig[Component.name]
					);
				} else {
					this.instances[Component.name] = new Component(this.ctx);
				}
				return Component.name;
			} else {
				console.warn("Not an Constructor", Component);
			}
		} catch (error) {
			console.warn(error);
		}
	}

	private instantiateService(Service: any) {
		if (typeof Service === "function") {
			try {
				this.serviceMap[Service.name] = new Service();
			} catch (error) {
				console.warn(error);
			}
		} else {
			console.warn("Not an Constructor", Service);
		}
	}

	private getService<T>(serviceName: string): T | false {
		if (this.serviceMap[serviceName]) return this.serviceMap[serviceName];
		return false;
	}

	private buildServices() {
		this.pageComponents.forEach((item) => {
			if (typeof item.services !== "undefined") {
				if (item.hasOwnProperty("pageRefs"))
					if (this.ruler.is(item.pageRefs)) {
						item.services.forEach((service) =>
							this.services.push(service)
						);
					}
			}
		});

		return this.services.map(this.instantiateService.bind(this));
	}

	private buildComponents() {
		return this.components.map(this.instantiateComponent.bind(this));
	}

	private buildPageComponents() {
		return this.pageComponents.map((item) => {
			if (item.hasOwnProperty("pageRefs"))
				if (this.ruler.is(item.pageRefs)) {
					item.components.forEach((Comp) =>
						this.instantiateComponent(Comp)
					);
				}
		});
	}

	public init() {
		this.buildServices.call(this);
		this.buildComponents.call(this);
		this.buildPageComponents.call(this);

		window["m3Apps"] = { [this.appName]: this };
	}

	public bind(compName: string, config: any) {
		this.componentsConfig[compName] = config;
	}

	public start() {
		if (
			document.attachEvent
				? document.readyState === "complete"
				: document.readyState !== "loading"
		) {
			this.init();
		} else {
			document.addEventListener("DOMContentLoaded", this.init.bind(this));
		}
	}
}
