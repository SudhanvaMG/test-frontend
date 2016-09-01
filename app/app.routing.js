System.register(['@angular/router', "./homepage/homepage.component", "./homepage/loginpage.component", "./homepage/registerpage.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, homepage_component_1, loginpage_component_1, registerpage_component_1;
    var appRoutes, appRoutingProviders, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (homepage_component_1_1) {
                homepage_component_1 = homepage_component_1_1;
            },
            function (loginpage_component_1_1) {
                loginpage_component_1 = loginpage_component_1_1;
            },
            function (registerpage_component_1_1) {
                registerpage_component_1 = registerpage_component_1_1;
            }],
        execute: function() {
            appRoutes = [
                { path: '', component: homepage_component_1.homePageComponent, children: [
                        { path: '', component: loginpage_component_1.loginPageComponent },
                        { path: 'register', component: registerpage_component_1.registerPageComponent }
                    ] }
            ];
            exports_1("appRoutingProviders", appRoutingProviders = []);
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFNTSxTQUFTLEVBT0YsbUJBQW1CLEVBSW5CLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7WUFYZCxTQUFTLEdBQVc7Z0JBQ3RCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUMsUUFBUSxFQUFFO3dCQUMvQyxFQUFDLElBQUksRUFBRyxFQUFFLEVBQUcsU0FBUyxFQUFDLHdDQUFrQixFQUFFO3dCQUMzQyxFQUFDLElBQUksRUFBRyxVQUFVLEVBQUcsU0FBUyxFQUFHLDhDQUFxQixFQUFDO3FCQUMxRCxFQUFFO2FBQ04sQ0FBQztZQUVXLGlDQUFBLG1CQUFtQixHQUFVLEVBRXpDLENBQUEsQ0FBQztZQUVXLHFCQUFBLE9BQU8sR0FBd0IscUJBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUEsQ0FBQyIsImZpbGUiOiJhcHAucm91dGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7aG9tZVBhZ2VDb21wb25lbnR9IGZyb20gXCIuL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtsb2dpblBhZ2VDb21wb25lbnR9IGZyb20gXCIuL2hvbWVwYWdlL2xvZ2lucGFnZS5jb21wb25lbnRcIjtcbmltcG9ydCB7cmVnaXN0ZXJQYWdlQ29tcG9uZW50fSBmcm9tIFwiLi9ob21lcGFnZS9yZWdpc3RlcnBhZ2UuY29tcG9uZW50XCI7XG5cbmNvbnN0IGFwcFJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDogaG9tZVBhZ2VDb21wb25lbnQsY2hpbGRyZW4gOltcbiAgICAgICAge3BhdGggOiAnJyAsIGNvbXBvbmVudDpsb2dpblBhZ2VDb21wb25lbnQgfSxcbiAgICAgICAge3BhdGggOiAncmVnaXN0ZXInICwgY29tcG9uZW50IDogcmVnaXN0ZXJQYWdlQ29tcG9uZW50fVxuICAgIF0gfVxuXTtcblxuZXhwb3J0IGNvbnN0IGFwcFJvdXRpbmdQcm92aWRlcnM6IGFueVtdID0gW1xuXG5dO1xuXG5leHBvcnQgY29uc3Qgcm91dGluZzogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JSb290KGFwcFJvdXRlcyk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
