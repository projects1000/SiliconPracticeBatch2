// src/app/team4/project-team4/components/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  selectedRole: 'Admin' | 'Customer' | '' = '';

  constructor(
    private sharedService: SharedService,
    private router: Router
  ) {}

  login() {
  if (!this.username || !this.selectedRole) return;

  this.sharedService.setUsername(this.username);  // <-- NEW
  this.sharedService.setRole(this.selectedRole as 'Admin' | 'Customer');

  if (this.selectedRole === 'Admin') {
    this.router.navigate(['/team4/admin-dashboard']);
  } else {
    this.router.navigate(['/team4/customer-dashboard']);
  }
}

}
