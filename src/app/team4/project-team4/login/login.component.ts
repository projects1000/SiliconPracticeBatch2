import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  role: string = 'Admin';

  constructor(private router: Router) {}

  onLogin() {
    if(this.role === 'Admin') {
        // Navigate relative to the current module structure
        this.router.navigate(['/team4/project-team4/admin/dashboard']);
    } else {
        alert("Customer Dashboard not implemented in this demo!");
    }
  }
}