import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from './sidebar.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [RouterModule, CommonModule],
    declarations: [SideBarComponent],
    exports: [SideBarComponent]
})

export class SideBarModule { }