import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from "./app.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { NavBarModule } from './components/navbar/navbar.module';
import { SideBarModule } from './components/sidebar/sidebar.module';
import { DashboardModule } from './components/dashboard/dashboard.module';




@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        NavBarModule,
        SideBarModule,
        DashboardModule,
        RouterModule.forRoot([])
        //NgbModule.forRoot()
       
    ],

    declarations: [
        AppComponent,
        DashboardComponent
        
     

        
    ],
   
    
    bootstrap: [AppComponent]
})
export class AppModule { }