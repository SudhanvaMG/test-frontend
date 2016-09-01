System.register(['@angular/core', '@angular/platform-browser', './app.component', "./app.routing", "./homepage/homepage.component", "./homepage/loginpage.component", "./homepage/registerpage.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, platform_browser_1, app_component_1, app_routing_1, homepage_component_1, loginpage_component_1, registerpage_component_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
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
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            app_routing_1.routing
                        ],
                        declarations: [
                            app_component_1.AppComponent,
                            homepage_component_1.homePageComponent,
                            loginpage_component_1.loginPageComponent,
                            registerpage_component_1.registerPageComponent
                        ],
                        providers: [
                            app_routing_1.appRoutingProviders
                        ],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEwQkE7Z0JBQUE7Z0JBQXlCLENBQUM7Z0JBakIxQjtvQkFBQyxlQUFRLENBQUM7d0JBQ04sT0FBTyxFQUFPOzRCQUNWLGdDQUFhOzRCQUNiLHFCQUFPO3lCQUNWO3dCQUNELFlBQVksRUFBRTs0QkFDViw0QkFBWTs0QkFDWixzQ0FBaUI7NEJBQ2pCLHdDQUFrQjs0QkFDbEIsOENBQXFCO3lCQUN4Qjt3QkFDRCxTQUFTLEVBQUc7NEJBQ1YsaUNBQW1CO3lCQUNwQjt3QkFDRCxTQUFTLEVBQUssQ0FBRSw0QkFBWSxDQUFFO3FCQUNqQyxDQUFDOzs2QkFBQTtnQkFFdUIsZ0JBQUM7WUFBRCxDQUF6QixBQUEwQixJQUFBO1lBQTFCLGlDQUEwQixDQUFBIiwiZmlsZSI6ImFwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSAgZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7cm91dGluZywgYXBwUm91dGluZ1Byb3ZpZGVyc30gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7aG9tZVBhZ2VDb21wb25lbnR9IGZyb20gXCIuL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtsb2dpblBhZ2VDb21wb25lbnR9IGZyb20gXCIuL2hvbWVwYWdlL2xvZ2lucGFnZS5jb21wb25lbnRcIjtcbmltcG9ydCB7cmVnaXN0ZXJQYWdlQ29tcG9uZW50fSBmcm9tIFwiLi9ob21lcGFnZS9yZWdpc3RlcnBhZ2UuY29tcG9uZW50XCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiAgICAgIFtcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcbiAgICAgICAgcm91dGluZ1xuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgaG9tZVBhZ2VDb21wb25lbnQsXG4gICAgICAgIGxvZ2luUGFnZUNvbXBvbmVudCxcbiAgICAgICAgcmVnaXN0ZXJQYWdlQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnMgOiBbXG4gICAgICBhcHBSb3V0aW5nUHJvdmlkZXJzXG4gICAgXSxcbiAgICBib290c3RyYXA6ICAgIFsgQXBwQ29tcG9uZW50IF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
