import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private sharedService: SharedService,
    private router: Router
  ) {}

  canActivate(): boolean {
    const currentUser = this.sharedService.getCurrentUser();
    
    if (currentUser) {
      return true;
    } else {
      // FIXED: Redirect to Angular project login, not team1
      this.router.navigate(['/team3/project/login']);
      return false;
    }
  }
}