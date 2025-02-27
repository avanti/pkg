var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import isPage from "./isPage";
var Container = (function () {
    function Container(_a) {
        var appName = _a.appName, components = _a.components, pages = _a.pages, services = _a.services, config = _a.config, ruler = _a.ruler;
        this.appName = appName;
        this.config = config;
        this.pageComponents = pages ? __spreadArrays(pages) : [];
        this.components = components ? __spreadArrays(components) : [];
        this.services = services ? __spreadArrays(services) : [];
        this.serviceMap = {};
        this.instances = {};
        this.componentsConfig = {};
        this.ruler = ruler ? ruler : new isPage();
        this.ctx = this.createContext.call(this);
    }
    Container.prototype.createContext = function () {
        return {
            config: this.config,
            getService: this.getService.bind(this),
        };
    };
    Container.prototype.instantiateComponent = function (Component) {
        try {
            if (typeof Component === "function") {
                if (this.componentsConfig[Component.name]) {
                    this.instances[Component.name] = new Component(this.ctx, this.componentsConfig[Component.name]);
                }
                else {
                    this.instances[Component.name] = new Component(this.ctx);
                }
                return Component.name;
            }
            else {
                console.warn("Not an Constructor", Component);
            }
        }
        catch (error) {
            console.warn(error);
        }
    };
    Container.prototype.instantiateService = function (Service) {
        if (typeof Service === "function") {
            try {
                this.serviceMap[Service.name] = new Service();
            }
            catch (error) {
                console.warn(error);
            }
        }
        else {
            console.warn("Not an Constructor", Service);
        }
    };
    Container.prototype.getService = function (serviceName) {
        if (this.serviceMap[serviceName])
            return this.serviceMap[serviceName];
        return false;
    };
    Container.prototype.buildServices = function () {
        var _this = this;
        this.pageComponents.forEach(function (item) {
            if (typeof item.services !== "undefined") {
                if (item.hasOwnProperty("pageRefs"))
                    if (_this.ruler.is(item.pageRefs)) {
                        item.services.forEach(function (service) {
                            return _this.services.push(service);
                        });
                    }
            }
        });
        return this.services.map(this.instantiateService.bind(this));
    };
    Container.prototype.buildComponents = function () {
        return this.components.map(this.instantiateComponent.bind(this));
    };
    Container.prototype.buildPageComponents = function () {
        var _this = this;
        return this.pageComponents.map(function (item) {
            if (item.hasOwnProperty("pageRefs"))
                if (_this.ruler.is(item.pageRefs)) {
                    item.components.forEach(function (Comp) {
                        return _this.instantiateComponent(Comp);
                    });
                }
        });
    };
    Container.prototype.init = function () {
        var _a;
        this.buildServices.call(this);
        this.buildComponents.call(this);
        this.buildPageComponents.call(this);
        window["m3Apps"] = (_a = {}, _a[this.appName] = this, _a);
    };
    Container.prototype.bind = function (compName, config) {
        this.componentsConfig[compName] = config;
    };
    Container.prototype.start = function () {
        if (document.attachEvent
            ? document.readyState === "complete"
            : document.readyState !== "loading") {
            this.init();
        }
        else {
            document.addEventListener("DOMContentLoaded", this.init.bind(this));
        }
    };
    return Container;
}());
export default Container;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhY2thZ2VzL2NvcmUvQ29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxPQUFPLE1BQU0sTUFBTSxVQUFVLENBQUM7QUFtQzlCO0lBWUMsbUJBQVksRUFPTTtZQU5qQixPQUFPLGFBQUEsRUFDUCxVQUFVLGdCQUFBLEVBQ1YsS0FBSyxXQUFBLEVBQ0wsUUFBUSxjQUFBLEVBQ1IsTUFBTSxZQUFBLEVBQ04sS0FBSyxXQUFBO1FBRUwsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFckIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsQ0FBQyxnQkFBSyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxDQUFDLGdCQUFLLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRXBELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsZ0JBQUssUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFFckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUUzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBRTFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVPLGlDQUFhLEdBQXJCO1FBQ0MsT0FBTztZQUNOLE1BQU0sRUFB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dElELElBc0lDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlzUGFnZSBmcm9tIFwiLi9pc1BhZ2VcIjtcbmltcG9ydCBJUnVsZXIgZnJvbSBcIi4vSVJ1bGVyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRhaW5lclByb3BzIHtcblx0YXBwTmFtZTogc3RyaW5nO1xuXHRjb21wb25lbnRzPzogYW55W107XG5cdHBhZ2VzPzogSVBhZ2VDb21wb25lbnRzW107XG5cdHNlcnZpY2VzPzogYW55W107XG5cdGNvbmZpZz86IGFueTtcblx0cnVsZXI/OiBJUnVsZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBhZ2VDb21wb25lbnRzIHtcblx0cGFnZVJlZnM6IHN0cmluZ1tdO1xuXHRjb21wb25lbnRzOiBhbnlbXTtcblx0c2VydmljZXM/OiBhbnlbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ29udGFpbmVyQ29udGV4dCB7XG5cdGNvbmZpZzogYW55O1xuXHRnZXRTZXJ2aWNlOiA8VD4oc2VydmljZU5hbWU6IHN0cmluZykgPT4gVCB8IGZhbHNlO1xufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG5cdGludGVyZmFjZSBXaW5kb3cge1xuXHRcdG0zQXBwczogUmVjb3JkPHN0cmluZywgQ29udGFpbmVyPjtcblx0fVxuXG5cdGludGVyZmFjZSBEb2N1bWVudCB7XG5cdFx0YXR0YWNoRXZlbnQ6XG5cdFx0XHR8ICgoZXZlbnQ6IHN0cmluZywgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXIpID0+IGJvb2xlYW4gfCBmYWxzZSlcblx0XHRcdHwgdW5kZWZpbmVkO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhaW5lciB7XG5cdHByaXZhdGUgcnVsZXI6IElSdWxlcjtcblx0cHJpdmF0ZSBhcHBOYW1lOiBzdHJpbmc7XG5cdHByaXZhdGUgY29uZmlnOiBhbnk7XG5cdHByaXZhdGUgY29tcG9uZW50c0NvbmZpZzogYW55O1xuXHRwcml2YXRlIGNvbXBvbmVudHM6IGFueVtdO1xuXHRwcml2YXRlIHBhZ2VDb21wb25lbnRzOiBJUGFnZUNvbXBvbmVudHNbXTtcblx0cHJpdmF0ZSBzZXJ2aWNlczogYW55W107XG5cdHByaXZhdGUgc2VydmljZU1hcDogUmVjb3JkPHN0cmluZywgYW55Pjtcblx0cHJpdmF0ZSBpbnN0YW5jZXM6IFJlY29yZDxzdHJpbmcsIG9iamVjdD47XG5cdHByaXZhdGUgY3R4OiBJQ29udGFpbmVyQ29udGV4dDtcblxuXHRjb25zdHJ1Y3Rvcih7XG5cdFx0YXBwTmFtZSxcblx0XHRjb21wb25lbnRzLFxuXHRcdHBhZ2VzLFxuXHRcdHNlcnZpY2VzLFxuXHRcdGNvbmZpZyxcblx0XHRydWxlcixcblx0fTogSUNvbnRhaW5lclByb3BzKSB7XG5cdFx0dGhpcy5hcHBOYW1lID0gYXBwTmFtZTtcblx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcblxuXHRcdHRoaXMucGFnZUNvbXBvbmVudHMgPSBwYWdlcyA/IFsuLi5wYWdlc10gOiBbXTtcblx0XHR0aGlzLmNvbXBvbmVudHMgPSBjb21wb25lbnRzID8gWy4uLmNvbXBvbmVudHNdIDogW107XG5cblx0XHR0aGlzLnNlcnZpY2VzID0gc2VydmljZXMgPyBbLi4uc2VydmljZXNdIDogW107XG5cdFx0dGhpcy5zZXJ2aWNlTWFwID0ge307XG5cblx0XHR0aGlzLmluc3RhbmNlcyA9IHt9O1xuXHRcdHRoaXMuY29tcG9uZW50c0NvbmZpZyA9IHt9O1xuXG5cdFx0dGhpcy5ydWxlciA9IHJ1bGVyID8gcnVsZXIgOiBuZXcgaXNQYWdlKCk7XG5cblx0XHR0aGlzLmN0eCA9IHRoaXMuY3JlYXRlQ29udGV4dC5jYWxsKHRoaXMpO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVDb250ZXh0KCk6IElDb250YWluZXJDb250ZXh0IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29uZmlnOiB0aGlzLmNvbmZpZyxcblx0XHRcdGdldFNlcnZpY2U6IHRoaXMuZ2V0U2VydmljZS5iaW5kKHRoaXMpLFxuXHRcdH07XG5cdH1cblxuXHRwcml2YXRlIGluc3RhbnRpYXRlQ29tcG9uZW50KENvbXBvbmVudDogYW55KSB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmICh0eXBlb2YgQ29tcG9uZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0aWYgKHRoaXMuY29tcG9uZW50c0NvbmZpZ1tDb21wb25lbnQubmFtZV0pIHtcblx0XHRcdFx0XHR0aGlzLmluc3RhbmNlc1tDb21wb25lbnQubmFtZV0gPSBuZXcgQ29tcG9uZW50KFxuXHRcdFx0XHRcdFx0dGhpcy5jdHgsXG5cdFx0XHRcdFx0XHR0aGlzLmNvbXBvbmVudHNDb25maWdbQ29tcG9uZW50Lm5hbWVdXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmluc3RhbmNlc1tDb21wb25lbnQubmFtZV0gPSBuZXcgQ29tcG9uZW50KHRoaXMuY3R4KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gQ29tcG9uZW50Lm5hbWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oXCJOb3QgYW4gQ29uc3RydWN0b3JcIiwgQ29tcG9uZW50KTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS53YXJuKGVycm9yKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGluc3RhbnRpYXRlU2VydmljZShTZXJ2aWNlOiBhbnkpIHtcblx0XHRpZiAodHlwZW9mIFNlcnZpY2UgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dGhpcy5zZXJ2aWNlTWFwW1NlcnZpY2UubmFtZV0gPSBuZXcgU2VydmljZSgpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKGVycm9yKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS53YXJuKFwiTm90IGFuIENvbnN0cnVjdG9yXCIsIFNlcnZpY2UpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZ2V0U2VydmljZTxUPihzZXJ2aWNlTmFtZTogc3RyaW5nKTogVCB8IGZhbHNlIHtcblx0XHRpZiAodGhpcy5zZXJ2aWNlTWFwW3NlcnZpY2VOYW1lXSkgcmV0dXJuIHRoaXMuc2VydmljZU1hcFtzZXJ2aWNlTmFtZV07XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cHJpdmF0ZSBidWlsZFNlcnZpY2VzKCkge1xuXHRcdHRoaXMucGFnZUNvbXBvbmVudHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0aWYgKHR5cGVvZiBpdGVtLnNlcnZpY2VzICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdGlmIChpdGVtLmhhc093blByb3BlcnR5KFwicGFnZVJlZnNcIikpXG5cdFx0XHRcdFx0aWYgKHRoaXMucnVsZXIuaXMoaXRlbS5wYWdlUmVmcykpIHtcblx0XHRcdFx0XHRcdGl0ZW0uc2VydmljZXMuZm9yRWFjaCgoc2VydmljZSkgPT5cblx0XHRcdFx0XHRcdFx0dGhpcy5zZXJ2aWNlcy5wdXNoKHNlcnZpY2UpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiB0aGlzLnNlcnZpY2VzLm1hcCh0aGlzLmluc3RhbnRpYXRlU2VydmljZS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdHByaXZhdGUgYnVpbGRDb21wb25lbnRzKCkge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvbmVudHMubWFwKHRoaXMuaW5zdGFudGlhdGVDb21wb25lbnQuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRwcml2YXRlIGJ1aWxkUGFnZUNvbXBvbmVudHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMucGFnZUNvbXBvbmVudHMubWFwKChpdGVtKSA9PiB7XG5cdFx0XHRpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eShcInBhZ2VSZWZzXCIpKVxuXHRcdFx0XHRpZiAodGhpcy5ydWxlci5pcyhpdGVtLnBhZ2VSZWZzKSkge1xuXHRcdFx0XHRcdGl0ZW0uY29tcG9uZW50cy5mb3JFYWNoKChDb21wKSA9PlxuXHRcdFx0XHRcdFx0dGhpcy5pbnN0YW50aWF0ZUNvbXBvbmVudChDb21wKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyBpbml0KCkge1xuXHRcdHRoaXMuYnVpbGRTZXJ2aWNlcy5jYWxsKHRoaXMpO1xuXHRcdHRoaXMuYnVpbGRDb21wb25lbnRzLmNhbGwodGhpcyk7XG5cdFx0dGhpcy5idWlsZFBhZ2VDb21wb25lbnRzLmNhbGwodGhpcyk7XG5cblx0XHR3aW5kb3dbXCJtM0FwcHNcIl0gPSB7IFt0aGlzLmFwcE5hbWVdOiB0aGlzIH07XG5cdH1cblxuXHRwdWJsaWMgYmluZChjb21wTmFtZTogc3RyaW5nLCBjb25maWc6IGFueSkge1xuXHRcdHRoaXMuY29tcG9uZW50c0NvbmZpZ1tjb21wTmFtZV0gPSBjb25maWc7XG5cdH1cblxuXHRwdWJsaWMgc3RhcnQoKSB7XG5cdFx0aWYgKFxuXHRcdFx0ZG9jdW1lbnQuYXR0YWNoRXZlbnRcblx0XHRcdFx0PyBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCJcblx0XHRcdFx0OiBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIlxuXHRcdCkge1xuXHRcdFx0dGhpcy5pbml0KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHRoaXMuaW5pdC5iaW5kKHRoaXMpKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==