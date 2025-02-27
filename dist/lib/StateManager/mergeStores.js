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
export default function mergeStores() {
    var storesObj = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        storesObj[_i] = arguments[_i];
    }
    var store = {};
    storesObj.forEach(function (s) {
        store.state = __assign(__assign({}, store.state), s.state);
        store.mutations = __assign(__assign({}, store.mutations), s.mutations);
        store.actions = __assign(__assign({}, store.actions), s.actions);
    });
    return store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyZ2VTdG9yZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFja2FnZXMvU3RhdGVNYW5hZ2VyL21lcmdlU3RvcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUEsTUFBTSxDQUFDLE9BQU8sVUFBVSxXQUFXO0lBQUMsbUJBQWdDO1NBQWhDLFVBQWdDLEVBQWhDLHFCQUFnQyxFQUFoQyxJQUFnQztRQUFoQyw4QkFBZ0M7O0lBQ25FLElBQU0sS0FBSyxHQUEyQixFQUFFLENBQUM7SUFDekMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUM7UUFDbkIsS0FBSyxDQUFDLEtBQUsseUJBQVEsS0FBSyxDQUFDLEtBQUssR0FBSyxDQUFDLENBQUMsS0FBSyxDQUFFLENBQUM7UUFDN0MsS0FBSyxDQUFDLFNBQVMseUJBQVEsS0FBSyxDQUFDLFNBQVMsR0FBSyxDQUFDLENBQUMsU0FBUyxDQUFFLENBQUM7UUFDekQsS0FBSyxDQUFDLE9BQU8seUJBQVEsS0FBSyxDQUFDLE9BQU8sR0FBSyxDQUFDLENBQUMsT0FBTyxDQUFFLENBQUM7SUFDcEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLEtBQUssQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZVBhcmFtcyB9IGZyb20gXCIuL1N0b3JlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlU3RvcmVzKC4uLnN0b3Jlc09iajogU3RvcmVQYXJhbXM8YW55PltdKSB7XG5cdGNvbnN0IHN0b3JlOiBTdG9yZVBhcmFtczxhbnk+IHwgYW55ID0ge307XG5cdHN0b3Jlc09iai5mb3JFYWNoKChzKSA9PiB7XG5cdFx0c3RvcmUuc3RhdGUgPSB7IC4uLnN0b3JlLnN0YXRlLCAuLi5zLnN0YXRlIH07XG5cdFx0c3RvcmUubXV0YXRpb25zID0geyAuLi5zdG9yZS5tdXRhdGlvbnMsIC4uLnMubXV0YXRpb25zIH07XG5cdFx0c3RvcmUuYWN0aW9ucyA9IHsgLi4uc3RvcmUuYWN0aW9ucywgLi4ucy5hY3Rpb25zIH07XG5cdH0pO1xuXG5cdHJldHVybiBzdG9yZTtcbn1cbiJdfQ==