import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthencationGuard implements CanActivate {
  constructor(
   
    private router: Router,
    
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //     if(localStorage.getItem("userid")){
  //       return true;

  //     }
  //     this.router.navigateByUrl("/index");
  //     return false;
  // }
  let user = JSON.parse(localStorage.getItem('userid'));
    if (!user || user === null) {
      this.router.navigate(['/index']);
      return true
    }
    else if (user) {
      if (!Object.keys(user).length) {
        this.router.navigate(['/index']);
        return true
      }
    }
    return true
  }
  
}
