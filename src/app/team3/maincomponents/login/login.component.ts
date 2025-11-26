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
  errorMessage = '';

  constructor(
    private sharedService: SharedService,
    private router: Router
  ) {}

  login() {
    this.errorMessage = '';
    
    if (!this.username.trim()) {
      this.errorMessage = 'Please enter a username';
      return;
    }

    this.isLoading = true;

    // Validate user against specific usernames
    const authResult = this.sharedService.authenticateUser(this.username, this.role);
    
    if (!authResult.success) {
      this.errorMessage = authResult.message || 'Invalid credentials';
      this.isLoading = false;
      return;
    }

    // Simulate API call delay
    setTimeout(() => {
      const user: User = {
        username: this.username,
        role: this.role
      };
      
      this.sharedService.setCurrentUser(user);
      
      // Navigate based on role
      if (this.role === 'admin') {
        this.router.navigate(['/team3/project/app/admin/dashboard']);
      } else {
        this.router.navigate(['/team3/project/app/customer/dashboard']);
      }
      
      this.isLoading = false;
    }, 1000);
  }
}