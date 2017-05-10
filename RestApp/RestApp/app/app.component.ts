import { Component, AfterViewInit } from "@angular/core";
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';

declare var $: any;
@Component({
    moduleId: module.id,
    selector: "my-app",
    templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {
   // DynamicValue: string =
   // "Running on IIS with ASP.NET 4.5 in Visual Studio 2015";

    ngAfterViewInit() {
        $.getScript('../Scripts/_scripts/tempscripts.js');
        $.getScript('../Scripts/_scripts/tempsproduct.js');
        $.getScript('../Scripts/_scripts/tempsemployees.js');
    }
}