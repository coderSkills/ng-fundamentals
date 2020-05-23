import { Routes } from '@angular/router'
import { EventListComponent } from './event-list/event-list.component';
import { EventComponent } from './event/event.component';
import { ErrorComponent } from './error/error.component';
import { EventRouterActivator } from './shared/event.route.activator.service';

export const appRoutes: Routes = [
    {path: 'events', component: EventListComponent},
    {path: 'event/:id', component: EventComponent, canActivate: [EventRouterActivator]},
    {path: '404', component: ErrorComponent},
    {path: '', redirectTo: '/events', pathMatch: 'full'}
]