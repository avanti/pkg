import PubSub from "./PubSub";

export default class Store<T extends object> {
	private actions: Record<string, (store: Store<T>, payload: any) => void>;
	private mutations: Record<string, (state: T, payload: any) => T>;
	private module: string;
	private status: "mutation" | "action" | "resting" | "default state";
	public events: PubSub;
	public state: T;

	constructor({ moduleName, actions, mutations, state }: StoreParams<T>) {
		this.actions = { ...actions };
		this.mutations = { ...mutations };
		this.module = moduleName || "store";
		this.status = "default state";
		this.events = new PubSub();

		this.state = new Proxy<T>({ ...state } || {}, {
			set: (state: any, key: string, value: any) => {
				state[key] = value;
				console.log(
					`module: ${this.module} stateChange: ${key}:`,
					value
				);
				this.events.publish("stateChange", this.state);
				this.events.publish(`stateChange:${key}`, this.state);
				if (this.status !== "mutation") {
					console.log(`You should use a mutation to set ${key}`);
				}
				this.status = "resting";
				return true;
			},
		});
	}

	public dispatch(actionKey: string, payload: any): boolean {
		if (typeof this.actions[actionKey] !== "function") {
			console.log(`Action "${actionKey} doesn't exist.`);
			return false;
		}
		console.log(`ACTION: ${actionKey}`);
		this.status = "action";
		this.actions[actionKey](this, payload);
		return true;
	}

	public commit(mutationKey: string, payload: any): boolean {
		if (typeof this.mutations[mutationKey] !== "function") {
			console.log(`Mutation "${mutationKey}" doesn't exist`);
			return false;
		}
		this.status = "mutation";
		let newState = this.mutations[mutationKey](this.state, payload);
		this.state = Object.assign(this.state, newState);
		return true;
	}
}

export interface StoreParams<T extends object> {
	moduleName: string;

	actions: Record<string, (store: Store<T>, payload: any) => void>;

	mutations: Record<string, (state: T, payload: any) => T>;

	state: T;
}
