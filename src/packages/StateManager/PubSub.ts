export default class PubSub {
	private events: IEvents = {};

	public subscribe(event: string, callback: Function) {
		if (!this.events.hasOwnProperty(event)) {
			this.events[event] = [];
		}
		return this.events[event].push(callback);
	}

	public publish(event: string, data = {}) {
		if (!this.events.hasOwnProperty(event)) {
			return [];
		}
		return this.events[event].map((callback) => callback(event, data));
	}

	public unsubscribe(event: string, cb: Function): void {
		this.events[event] = this.events[event].filter((fn) => fn !== cb);
	}
}

interface IEvents {
	[key: string]: Function[];
}
