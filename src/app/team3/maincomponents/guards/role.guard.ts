import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(
    private sharedService: SharedService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const currentUser = this.sharedService.getCurrentUser();
    const requiredRole = route.data['role'];
    
    if (currentUser && currentUser.role === requiredRole) {
      return true;
    } else {
      if (currentUser) {
        if (currentUser.role === 'admin') {
          this.router.navigate(['/team3/app/admin/dashboard']);
        } else {
          this.router.navigate(['/team3/app/customer/dashboard']);
        }
      } else {
        this.router.navigate(['/team3/login']);
      }
      return false;
    }
  }
}