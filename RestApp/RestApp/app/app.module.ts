import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app.component";
import { NavigationBrandComponent } from './components/navigationbrand/navigationbrand.component';
import { NavigationToggleComponent } from './components/navigationtoggle/navigationtoggle.component';
import { SearchComponent } from './components/search/search.component';
import { NotificationListComponent } from './components/notificationlist/notificationlist.component';
import { MessagesListComponent } from './components/messageslist/messageslist.component';
import { ProfileDropdownComponent } from './components/profiledropdown/profiledropdown.component';
import { ShutdownComponent } from './components/shutdown/shutdown.component';
import { UserStatusComponent } from './components/userstatus/userstatus.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],

    declarations: [
        AppComponent,
        NavigationBrandComponent,
        NavigationToggleComponent,
        SearchComponent,
        NotificationListComponent,
        MessagesListComponent,
        ProfileDropdownComponent,
        ShutdownComponent,
        UserStatusComponent

    ],

    bootstrap: [AppComponent]
})
export class AppModule { }