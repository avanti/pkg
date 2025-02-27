var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import PubSub from "./PubSub";
var Store = (function () {
    function Store(_a) {
        var _this = this;
        var moduleName = _a.moduleName, actions = _a.actions, mutations = _a.mutations, state = _a.state;
        this.actions = __assign({}, actions);
        this.mutations = __assign({}, mutations);
        this.module = moduleName || "store";
        this.status = "default state";
        this.events = new PubSub();
        this.state = new Proxy(__assign({}, state) || {}, {
            set: function (state, key, value) {
                state[key] = value;
                console.log("module: " + _this.module + " stateChange: " + key + ":", value);
                _this.events.publish("stateChange", _this.state);
                _this.events.publish("stateChange:" + key, _this.state);
                if (_this.status !== "mutation") {
                    console.log("You should use a mutation to set " + key);
                }
                _this.status = "resting";
                return true;
            },
        });
    }
    Store.prototype.dispatch = function (actionKey, payload) {
        if (typeof this.actions[actionKey] !== "function") {
            console.log("Action \"" + actionKey + " doesn't exist.");
            return false;
        }
        console.log("ACTION: " + actionKey);
        this.status = "action";
        this.actions[actionKey](this, payload);
        return true;
    };
    Store.prototype.commit = function (mutationKey, payload) {
        if (typeof this.mutations[mutationKey] !== "function") {
            console.log("Mutation \"" + mutationKey + "\" doesn't exist");
            return false;
        }
        this.status = "mutation";
        var newState = this.mutations[mutationKey](this.state, payload);
        this.state = Object.assign(this.state, newState);
        return true;
    };
    return Store;
}());
export default Store;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFja2FnZXMvU3RhdGVNYW5hZ2VyL1N0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxNQUFNLE1BQU0sVUFBVSxDQUFDO0FBRTlCO0lBUUMsZUFBWSxFQUF5RDtRQUFyRSxpQkF1QkM7WUF2QmEsVUFBVSxnQkFBQSxFQUFFLE9BQU8sYUFBQSxFQUFFLFNBQVMsZUFBQSxFQUFFLEtBQUssV0FBQTtRQUNsRCxJQUFJLENBQUMsT0FBTyxnQkFBUSxPQUFPLENBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxnQkFBUSxTQUFTLENBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsSUFBSSxPQUFPLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxlQUFlLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBRTNCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUksYUFBSyxLQUFLLEtBQU0sRUFBRSxFQUFFO1lBQzdDLEdBQUcsRUFBRSxVQUFDLEtBQVUsRUFBRSxHQUFXLEVBQUUsS0FBVTtnQkFDeEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FDVixhQUFXLEtBQUksQ0FBQyxNQUFNLHNCQUFpQixHQUFHLE1BQUcsRUFDN0MsS0FBSyxDQUNMLENBQUM7Z0JBQ0YsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDL0MsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsaUJBQWUsR0FBSyxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdEQsSUFBSSxLQUFJLENBQUMsTUFBTSxLQUFLLFVBQVUsRUFBRTtvQkFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBb0MsR0FBSyxDQUFDLENBQUM7aUJBQ3ZEO2dCQUNELEtBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO2dCQUN4QixPQUFPLElBQUksQ0FBQztZQUNiLENBQUM7U0FDRCxDQUFDLENBQUM7SUFDSixDQUFDO0lBRU0sd0JBQVEsR0FBZixVQUFnQixTQUFpQixFQUFFLE9BQVk7UUFDOUMsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssVUFBVSxFQUFFO1lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBVyxTQUFTLG9CQUFpQixDQUFDLENBQUM7WUFDbkQsT0FBTyxLQUFLLENBQUM7U0FDYjtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBVyxTQUFXLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2QyxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFTSxzQkFBTSxHQUFiLFVBQWMsV0FBbUIsRUFBRSxPQUFZO1FBQzlDLElBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLFVBQVUsRUFBRTtZQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFhLFdBQVcscUJBQWlCLENBQUMsQ0FBQztZQUN2RCxPQUFPLEtBQUssQ0FBQztTQUNiO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7UUFDekIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUNGLFlBQUM7QUFBRCxDQUFDLEFBdERELElBc0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFB1YlN1YiBmcm9tIFwiLi9QdWJTdWJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmU8VCBleHRlbmRzIG9iamVjdD4ge1xuXHRwcml2YXRlIGFjdGlvbnM6IFJlY29yZDxzdHJpbmcsIChzdG9yZTogU3RvcmU8VD4sIHBheWxvYWQ6IGFueSkgPT4gdm9pZD47XG5cdHByaXZhdGUgbXV0YXRpb25zOiBSZWNvcmQ8c3RyaW5nLCAoc3RhdGU6IFQsIHBheWxvYWQ6IGFueSkgPT4gVD47XG5cdHByaXZhdGUgbW9kdWxlOiBzdHJpbmc7XG5cdHByaXZhdGUgc3RhdHVzOiBcIm11dGF0aW9uXCIgfCBcImFjdGlvblwiIHwgXCJyZXN0aW5nXCIgfCBcImRlZmF1bHQgc3RhdGVcIjtcblx0cHVibGljIGV2ZW50czogUHViU3ViO1xuXHRwdWJsaWMgc3RhdGU6IFQ7XG5cblx0Y29uc3RydWN0b3IoeyBtb2R1bGVOYW1lLCBhY3Rpb25zLCBtdXRhdGlvbnMsIHN0YXRlIH06IFN0b3JlUGFyYW1zPFQ+KSB7XG5cdFx0dGhpcy5hY3Rpb25zID0geyAuLi5hY3Rpb25zIH07XG5cdFx0dGhpcy5tdXRhdGlvbnMgPSB7IC4uLm11dGF0aW9ucyB9O1xuXHRcdHRoaXMubW9kdWxlID0gbW9kdWxlTmFtZSB8fCBcInN0b3JlXCI7XG5cdFx0dGhpcy5zdGF0dXMgPSBcImRlZmF1bHQgc3RhdGVcIjtcblx0XHR0aGlzLmV2ZW50cyA9IG5ldyBQdWJTdWIoKTtcblxuXHRcdHRoaXMuc3RhdGUgPSBuZXcgUHJveHk8VD4oeyAuLi5zdGF0ZSB9IHx8IHt9LCB7XG5cdFx0XHRzZXQ6IChzdGF0ZTogYW55LCBrZXk6IHN0cmluZywgdmFsdWU6IGFueSkgPT4ge1xuXHRcdFx0XHRzdGF0ZVtrZXldID0gdmFsdWU7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFxuXHRcdFx0XHRcdGBtb2R1bGU6ICR7dGhpcy5tb2R1bGV9IHN0YXRlQ2hhbmdlOiAke2tleX06YCxcblx0XHRcdFx0XHR2YWx1ZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHR0aGlzLmV2ZW50cy5wdWJsaXNoKFwic3RhdGVDaGFuZ2VcIiwgdGhpcy5zdGF0ZSk7XG5cdFx0XHRcdHRoaXMuZXZlbnRzLnB1Ymxpc2goYHN0YXRlQ2hhbmdlOiR7a2V5fWAsIHRoaXMuc3RhdGUpO1xuXHRcdFx0XHRpZiAodGhpcy5zdGF0dXMgIT09IFwibXV0YXRpb25cIikge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGBZb3Ugc2hvdWxkIHVzZSBhIG11dGF0aW9uIHRvIHNldCAke2tleX1gKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXR1cyA9IFwicmVzdGluZ1wiO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgZGlzcGF0Y2goYWN0aW9uS2V5OiBzdHJpbmcsIHBheWxvYWQ6IGFueSk6IGJvb2xlYW4ge1xuXHRcdGlmICh0eXBlb2YgdGhpcy5hY3Rpb25zW2FjdGlvbktleV0gIT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0Y29uc29sZS5sb2coYEFjdGlvbiBcIiR7YWN0aW9uS2V5fSBkb2Vzbid0IGV4aXN0LmApO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRjb25zb2xlLmxvZyhgQUNUSU9OOiAke2FjdGlvbktleX1gKTtcblx0XHR0aGlzLnN0YXR1cyA9IFwiYWN0aW9uXCI7XG5cdFx0dGhpcy5hY3Rpb25zW2FjdGlvbktleV0odGhpcywgcGF5bG9hZCk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRwdWJsaWMgY29tbWl0KG11dGF0aW9uS2V5OiBzdHJpbmcsIHBheWxvYWQ6IGFueSk6IGJvb2xlYW4ge1xuXHRcdGlmICh0eXBlb2YgdGhpcy5tdXRhdGlvbnNbbXV0YXRpb25LZXldICE9PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdGNvbnNvbGUubG9nKGBNdXRhdGlvbiBcIiR7bXV0YXRpb25LZXl9XCIgZG9lc24ndCBleGlzdGApO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLnN0YXR1cyA9IFwibXV0YXRpb25cIjtcblx0XHRsZXQgbmV3U3RhdGUgPSB0aGlzLm11dGF0aW9uc1ttdXRhdGlvbktleV0odGhpcy5zdGF0ZSwgcGF5bG9hZCk7XG5cdFx0dGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSwgbmV3U3RhdGUpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RvcmVQYXJhbXM8VCBleHRlbmRzIG9iamVjdD4ge1xuXHRtb2R1bGVOYW1lOiBzdHJpbmc7XG5cblx0YWN0aW9uczogUmVjb3JkPHN0cmluZywgKHN0b3JlOiBTdG9yZTxUPiwgcGF5bG9hZDogYW55KSA9PiB2b2lkPjtcblxuXHRtdXRhdGlvbnM6IFJlY29yZDxzdHJpbmcsIChzdGF0ZTogVCwgcGF5bG9hZDogYW55KSA9PiBUPjtcblxuXHRzdGF0ZTogVDtcbn1cbiJdfQ==