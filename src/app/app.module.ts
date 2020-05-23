import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventComponent } from './event/event.component';
import { UserDetailsService } from './shared/user-details.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.route';
import { ErrorComponent } from './error/error.component';
import { EventRouterActivator } from './shared/event.route.activator.service';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserDetailsService,
    EventRouterActivator],
  bootstrap: [AppComponent]
})
export class AppModule { }
