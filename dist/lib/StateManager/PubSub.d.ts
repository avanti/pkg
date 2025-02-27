export default class PubSub {
    private events;
    subscribe(event: string, callback: Function): number;
    publish(event: string, data?: {}): any[];
    unsubscribe(event: string, cb: Function): void;
}
//# sourceMappingURL=PubSub.d.ts.map