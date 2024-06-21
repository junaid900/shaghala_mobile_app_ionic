import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { getUser } from '../session.helper';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(route, state);
    console.log("check admin status");
    console.log(getUser());
    if (getUser().is_phone_verified) {
      console.log("status received");
      if (getUser().is_phone_verified != "Yes") {
        console.log("status not verified");
        this.router.navigate(['edit-account'], { queryParams: { message: "Please fill out your information.\n Phone verification Required*" } });
      } else {
        console.log("status verified");
        //     if (getUser().type == 'Company') {
        //       if (getUser().is_subscribed) {
        //         return true;
        //       } else {
        //         this.router.navigate(['payment'], { queryParams: { message: "Subscription required to start" } });
        //       }
        //     } else {
        //       return true;
        //     }
        //   }
        // } else {
        console.log('next');
        return true;
        // }
      }
    }else{
      return true;
    }
  }

}
