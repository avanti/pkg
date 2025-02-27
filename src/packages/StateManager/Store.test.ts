import Store from "./Store";

interface State {
	qtd: number;
	selectedSku: {
		sku: number;
		image: string;
		price: number;
	};
}

const state: State = {
	qtd: 1,
	selectedSku: {
		sku: 12,
		image: "qualquer string",
		price: 1230,
	},
};

const mutations = {
	addQtd(state: State, qtd: number) {
		state.qtd = qtd;
		return state;
	},
	addOne(state: State, qtd: number) {
		state.qtd = state.qtd + 1;
		return state;
	},
};

const actions = {};

describe("Store", () => {
	it("should be able to access the state", () => {
		const sut = new Store<State>({
			moduleName: "teste",
			state,
			mutations,
			actions,
		});

		expect(sut.state.qtd).toBe(1);
		expect(sut.state.selectedSku).toEqual({
			sku: 12,
			image: "qualquer string",
			price: 1230,
		});
	});

	it("Should be able to listen to changes on state by stateChange Event", () => {
		const sut = new Store<State>({
			moduleName: "teste",
			state,
			mutations,
			actions,
		});

		let val = 0;
		sut.events.subscribe("stateChange", () => {
			val = 1;
			return 1;
		});
		sut.state.qtd = 2;

		expect(val).toBe(1);
	});

	// @TODO: Precisa de mais testes
});
