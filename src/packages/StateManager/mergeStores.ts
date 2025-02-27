import { StoreParams } from "./Store";

export default function mergeStores(...storesObj: StoreParams<any>[]) {
	const store: StoreParams<any> | any = {};
	storesObj.forEach((s) => {
		store.state = { ...store.state, ...s.state };
		store.mutations = { ...store.mutations, ...s.mutations };
		store.actions = { ...store.actions, ...s.actions };
	});

	return store;
}
