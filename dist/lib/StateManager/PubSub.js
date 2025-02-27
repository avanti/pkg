var PubSub = (function () {
    function PubSub() {
        this.events = {};
    }
    PubSub.prototype.subscribe = function (event, callback) {
        if (!this.events.hasOwnProperty(event)) {
            this.events[event] = [];
        }
        return this.events[event].push(callback);
    };
    PubSub.prototype.publish = function (event, data) {
        if (data === void 0) { data = {}; }
        if (!this.events.hasOwnProperty(event)) {
            return [];
        }
        return this.events[event].map(function (callback) { return callback(event, data); });
    };
    PubSub.prototype.unsubscribe = function (event, cb) {
        this.events[event] = this.events[event].filter(function (fn) { return fn !== cb; });
    };
    return PubSub;
}());
export default PubSub;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHViU3ViLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhY2thZ2VzL1N0YXRlTWFuYWdlci9QdWJTdWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFBQTtRQUNTLFdBQU0sR0FBWSxFQUFFLENBQUM7SUFtQjlCLENBQUM7SUFqQk8sMEJBQVMsR0FBaEIsVUFBaUIsS0FBYSxFQUFFLFFBQWtCO1FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUN4QjtRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVNLHdCQUFPLEdBQWQsVUFBZSxLQUFhLEVBQUUsSUFBUztRQUFULHFCQUFBLEVBQUEsU0FBUztRQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdkMsT0FBTyxFQUFFLENBQUM7U0FDVjtRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxRQUFRLElBQUssT0FBQSxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVNLDRCQUFXLEdBQWxCLFVBQW1CLEtBQWEsRUFBRSxFQUFZO1FBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxFQUFFLElBQUssT0FBQSxFQUFFLEtBQUssRUFBRSxFQUFULENBQVMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFDRixhQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFB1YlN1YiB7XG5cdHByaXZhdGUgZXZlbnRzOiBJRXZlbnRzID0ge307XG5cblx0cHVibGljIHN1YnNjcmliZShldmVudDogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pIHtcblx0XHRpZiAoIXRoaXMuZXZlbnRzLmhhc093blByb3BlcnR5KGV2ZW50KSkge1xuXHRcdFx0dGhpcy5ldmVudHNbZXZlbnRdID0gW107XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmV2ZW50c1tldmVudF0ucHVzaChjYWxsYmFjayk7XG5cdH1cblxuXHRwdWJsaWMgcHVibGlzaChldmVudDogc3RyaW5nLCBkYXRhID0ge30pIHtcblx0XHRpZiAoIXRoaXMuZXZlbnRzLmhhc093blByb3BlcnR5KGV2ZW50KSkge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5ldmVudHNbZXZlbnRdLm1hcCgoY2FsbGJhY2spID0+IGNhbGxiYWNrKGV2ZW50LCBkYXRhKSk7XG5cdH1cblxuXHRwdWJsaWMgdW5zdWJzY3JpYmUoZXZlbnQ6IHN0cmluZywgY2I6IEZ1bmN0aW9uKTogdm9pZCB7XG5cdFx0dGhpcy5ldmVudHNbZXZlbnRdID0gdGhpcy5ldmVudHNbZXZlbnRdLmZpbHRlcigoZm4pID0+IGZuICE9PSBjYik7XG5cdH1cbn1cblxuaW50ZXJmYWNlIElFdmVudHMge1xuXHRba2V5OiBzdHJpbmddOiBGdW5jdGlvbltdO1xufVxuIl19