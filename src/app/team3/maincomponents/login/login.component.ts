import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService, User } from '../shared/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  role: 'admin' | 'customer' = 'customer';
  isLoading = false;

  constructor(
    private sharedService: SharedService,
    private router: Router
  ) {}

  login() {
    if (this.username.trim() && !this.isLoading) {
      this.isLoading = true;
      
      const user: User = {
        username: this.username,
        role: this.role
      };
      
      this.sharedService.setCurrentUser(user);
      
      // Simulate API call delay
      setTimeout(() => {
        this.isLoading = false;
        
        if (this.role === 'admin') {
          this.router.navigate(['/team3/project/app/admin/dashboard']);
        } else {
          this.router.navigate(['/team3/project/app/customer/dashboard']);
        }
      }, 1000);
    }
  }
}