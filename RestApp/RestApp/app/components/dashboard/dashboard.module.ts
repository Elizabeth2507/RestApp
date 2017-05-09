import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboardroutes.config';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        RouterModule.forChild(MODULE_ROUTES)
    ],
    declarations: [MODULE_COMPONENTS],
    
})

export class DashboardModule { }