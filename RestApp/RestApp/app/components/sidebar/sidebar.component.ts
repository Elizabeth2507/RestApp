import { Component, OnInit } from "@angular/core";
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ROUTES } from './sidebarroutes.config';

@Component({
    moduleId: module.id,
    selector: "sideBar",
    templateUrl: './sidebar.component.html'

})
export class SideBarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {

        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }


}