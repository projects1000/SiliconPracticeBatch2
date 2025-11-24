import { Component } from '@angular/core';
import { UserDataService } from './user-data.service';

@Component({
  selector: 'app-pradyumna',
  templateUrl: './pradyumna.component.html',
  styleUrls: ['./pradyumna.component.css']
})
export class PradyumnaComponent {

  // form fields
  username: string = '';
  password: string = '';
  role: string = '';

  isLoggedIn: boolean = false;
  errorMsg: string = '';

  constructor(private userService: UserDataService) {}

  displayUser: any;
  displayName: string = '';
  displayRole: string = '';

  // Hardcoded users
  users = [
    { username: 'admin', password: 'admin123', role: 'Admin' },
    { username: 'user', password: 'user123', role: 'Customer' }
  ];

  // Employee Data (Admin)
  employees = [
    { name: 'Pradyumna', age: 22, role: 'Frontend Dev', dept: 'IT' },
    { name: 'Chinmaya', age: 17, role: 'Intern', dept: 'HR' },
    { name: 'Om', age: 23, role: 'Backend Dev', dept: 'IT' },
    { name: 'Debesee', age: 19, role: 'UI Designer', dept: 'Design' },
    { name: 'Bhagyashree', age: 16, role: 'Intern', dept: 'IT' }
  ];

  // Customer Orders (Customer)
  customerOrders = [
    { id: 'ORD-1001', product: 'Premium Subscription', amount: 1299, status: 'Completed' },
    { id: 'ORD-1002', product: 'UI Design Package', amount: 2499, status: 'Pending' },
    { id: 'ORD-1003', product: 'Angular Training', amount: 1999, status: 'Completed' },
    { id: 'ORD-1004', product: 'Support Add-on', amount: 799, status: 'Cancelled' }
  ];

  // Login
  onLogin() {
    this.errorMsg = '';

    const match = this.users.find(u =>
      u.username.toLowerCase() === this.username.toLowerCase() &&
      u.password === this.password &&
      u.role === this.role
    );

    if (match) {
      this.isLoggedIn = true;

      const userObj = {
        username: this.username,
        role: this.role
      };

      this.userService.setUser(userObj);
      this.loadUserProfile();
    } else {
      this.errorMsg = "Username / Password / Role Incorrect!";
    }
  }

  // Shared Service Profile Load
  loadUserProfile() {
    this.displayUser = this.userService.getUser();

    if (this.displayUser.role === 'Admin') {
      this.displayName = 'Pradyumna Kumar Behera';
      this.displayRole = 'Admin';
    } else {
      this.displayName = this.displayUser.username;
      this.displayRole = 'Customer';
    }
  }

  // Navigation Menu
  activeMenu: string = 'dashboard';

  switchMenu(menu: string) {
    this.activeMenu = menu;
    this.loadUserProfile();
  }

  // Logout
  logout() {
    this.isLoggedIn = false;
    this.username = '';
    this.password = '';
    this.role = '';
    this.activeMenu = 'dashboard';
  }

  // ---------------------------
  // MODAL POPUP SUPPORT BELOW
  // ---------------------------

  selectedEmployee: any = null;

  openEmployeeDetail(emp: any) {
    this.selectedEmployee = emp;
  }

  closeEmployeeDetail() {
    this.selectedEmployee = null;
  }

}
