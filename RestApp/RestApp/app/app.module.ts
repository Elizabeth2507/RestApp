import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app.component";
import { NavigationBrandComponent } from './components/navigationbrand/navigationbrand.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],

    declarations: [
        AppComponent,
        NavigationBrandComponent
    ],

    bootstrap: [AppComponent]
})
export class AppModule { }