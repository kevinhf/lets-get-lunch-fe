import { Injectable } from '@angular/core';
import { 
  CanActivate, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot, 
  UrlTree,
  Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

  import { Observable } from 'rxjs';
import { throwIfEmpty } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {
  
  constructor(private authService: AuthService, private router: Router){

  }
  
  canActivate(): Observable<boolean> | Promise<boolean>| boolean {
    
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      //TODO Redirect to Login
      this.router.navigate(['/']);
      return false;
    }

  }
  
}
