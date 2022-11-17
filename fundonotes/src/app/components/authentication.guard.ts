import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardserviceService } from '../Services/authguardservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  constructor(private AuthguardserviceService:AuthguardserviceService , private router: Router) {} 
  canActivate():boolean 
  {
   if (!this.AuthguardserviceService.gettoken()) {  
     this.router.navigateByUrl("/login");  
 }  
 return this.AuthguardserviceService.gettoken();  
}
}
