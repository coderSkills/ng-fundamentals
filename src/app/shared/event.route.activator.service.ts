import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserDetailsService } from './user-details.service';

@Injectable()
export class EventRouterActivator implements CanActivate {

    constructor(private userDetailsService: UserDetailsService, private router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot){
        const idExists = !!this.userDetailsService.getUser(route.params['id']);
        if (!idExists) {
            this.router.navigate(['/404']);
        }
        return idExists;
    }

}