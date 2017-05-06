"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var navigationbrand_component_1 = require("./components/navigationbrand/navigationbrand.component");
var navigationtoggle_component_1 = require("./components/navigationtoggle/navigationtoggle.component");
var search_component_1 = require("./components/search/search.component");
var notificationlist_component_1 = require("./components/notificationlist/notificationlist.component");
var messageslist_component_1 = require("./components/messageslist/messageslist.component");
var profiledropdown_component_1 = require("./components/profiledropdown/profiledropdown.component");
var shutdown_component_1 = require("./components/shutdown/shutdown.component");
var userstatus_component_1 = require("./components/userstatus/userstatus.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            navigationbrand_component_1.NavigationBrandComponent,
            navigationtoggle_component_1.NavigationToggleComponent,
            search_component_1.SearchComponent,
            notificationlist_component_1.NotificationListComponent,
            messageslist_component_1.MessagesListComponent,
            profiledropdown_component_1.ProfileDropdownComponent,
            shutdown_component_1.ShutdownComponent,
            userstatus_component_1.UserStatusComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map