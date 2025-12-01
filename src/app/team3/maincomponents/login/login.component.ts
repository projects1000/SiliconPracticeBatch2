import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService, User } from '../service/shared.service';
import { NotificationService } from '../service/notification.service'; // Add this

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
    private router: Router,
    private notificationService: NotificationService // Add this
  ) {}

  login() {
    this.errorMessage = '';
    
    if (!this.username.trim()) {
      this.errorMessage = 'Please enter a username';
      this.notificationService.error('Please enter a username', 'Login Failed');
      return;
    }

    this.isLoading = true;

    // Validate user against specific usernames
    const authResult = this.sharedService.authenticateUser(this.username, this.role);
    
    if (!authResult.success) {
      this.errorMessage = authResult.message || 'Invalid credentials';
      this.notificationService.error(authResult.message || 'Invalid credentials', 'Login Failed');
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
      
      // Show personalized welcome message based on user
      let welcomeMessage = `Welcome back, ${this.username}!`;
      
      // Special messages for team members
      if (this.username.toLowerCase() === 'narayan') {
        welcomeMessage = 'Welcome Team Lead Narayan! 🚀';
      } else if (this.username.toLowerCase() === 'subham') {
        welcomeMessage = 'Welcome Frontend Expert Subham! 💻';
      } else if (this.username.toLowerCase() === 'ashutosh') {
        welcomeMessage = 'Welcome Backend Specialist Ashutosh! 🔧';
      }
      
      this.notificationService.success(welcomeMessage, 'Login Successful');
      
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