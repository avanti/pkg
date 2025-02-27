import PubSub from "./PubSub";

const testCB1 = () => 5;
const testCB2 = () => 4;
const testCB3 = () => 3;

describe("PubSub", () => {
	it("Should be able to register and fire an event", () => {
		const sut = new PubSub();

		const isSubscribed = sut.subscribe("test", testCB1);

		const firedEventArrResult = sut.publish("test");

		expect(firedEventArrResult.length).toBe(1);
		expect(firedEventArrResult[0]).toBe(5);
		expect(isSubscribed).toBe(1);
	});

	it("Should be able to register and fire multiple events", () => {
		const sut = new PubSub();

		sut.subscribe("test", testCB1);
		sut.subscribe("test", testCB2);
		sut.subscribe("test", testCB3);

		const firedEventArrResult = sut.publish("test");

		expect(firedEventArrResult.length).toBe(3);
		expect(firedEventArrResult[0]).toBe(5);
		expect(firedEventArrResult[1]).toBe(4);
		expect(firedEventArrResult[2]).toBe(3);
	});

	it("Should be able to unsubscribe an event", () => {
		const sut = new PubSub();

		sut.subscribe("test", testCB1);
		sut.subscribe("test", testCB2);
		sut.subscribe("test", testCB3);

		sut.unsubscribe("test", testCB1);

		const firedEventArrResult = sut.publish("test");

		expect(firedEventArrResult.length).toBe(2);
		expect(firedEventArrResult[0]).toBe(4);
		expect(firedEventArrResult[1]).toBe(3);
	});
});
