import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  username: string;
  role: 'admin' | 'customer';
}

export interface Employee {
  name: string;
  age: number;
  role: string;
  department: string;
}

export interface MenuItem {
  label: string;
  route: string;
  roles: string[];
}

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private currentUser = new BehaviorSubject<User | null>(null);
  private selectedMenuItem = new BehaviorSubject<string>('');
  
  currentUser$ = this.currentUser.asObservable();
  selectedMenuItem$ = this.selectedMenuItem.asObservable();

  employees: Employee[] = [
    { name: 'John Doe', age: 25, role: 'Developer', department: 'IT' },
    { name: 'Jane Smith', age: 17, role: 'Intern', department: 'HR' },
    { name: 'Mike Johnson', age: 30, role: 'Manager', department: 'Finance' },
    { name: 'Sarah Wilson', age: 16, role: 'Trainee', department: 'Marketing' },
    { name: 'Robert Brown', age: 22, role: 'Analyst', department: 'Finance' }
  ];

  menuItems: MenuItem[] = [
    { label: 'Dashboard', route: '/team3/project/app/admin/dashboard', roles: ['admin'] },
    { label: 'Dashboard', route: '/team3/project/app/customer/dashboard', roles: ['customer'] },
    { label: 'Employees', route: '/team3/project/app/admin/employees', roles: ['admin'] },
    { label: 'Reports', route: '/team3/project/app/admin/dashboard', roles: ['admin'] },
    { label: 'Profile', route: '/team3/project/app/customer/dashboard', roles: ['customer'] },
    { label: 'Settings', route: '/team3/project/app/admin/dashboard', roles: ['admin'] }
  ];

  customerData = [
    { id: 1, name: 'Customer A', email: 'a@email.com', orders: 5 },
    { id: 2, name: 'Customer B', email: 'b@email.com', orders: 12 },
    { id: 3, name: 'Customer C', email: 'c@email.com', orders: 8 }
  ];

  setCurrentUser(user: User) {
    this.currentUser.next(user);
  }

  getCurrentUser(): User | null {
    return this.currentUser.value;
  }

  setSelectedMenuItem(item: string) {
    this.selectedMenuItem.next(item);
  }

  getEmployees(): Employee[] {
    return this.employees;
  }

  getCustomerData() {
    return this.customerData;
  }

  getMenuItemsByRole(role: string): MenuItem[] {
    return this.menuItems.filter(item => item.roles.includes(role));
  }

  logout() {
  this.currentUser.next(null);
  this.selectedMenuItem.next('');
  // Clear any other session data if needed
}

  
}