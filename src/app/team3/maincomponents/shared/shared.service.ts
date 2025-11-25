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
    // Team 3 Members
    { name: 'Narayan Sahu', age: 24, role: 'Full Stack Developer', department: 'IT' },
    { name: 'Ashutosh Sahoo', age: 23, role: 'Backend Developer', department: 'IT' },
    { name: 'Subham Satyaprakash Sahoo', age: 18, role: 'Frontend Developer', department: 'IT' },
    
    // Additional Indian Employees
    { name: 'Priya Sharma', age: 28, role: 'Project Manager', department: 'Management' },
    { name: 'Rajesh Kumar', age: 32, role: 'Senior Developer', department: 'IT' },
    { name: 'Anjali Patel', age: 16, role: 'UI/UX Designer', department: 'Design' },
    { name: 'Amit Singh', age: 29, role: 'DevOps Engineer', department: 'Operations' },
    { name: 'Sneha Reddy', age: 15, role: 'QA Engineer', department: 'Testing' },
    { name: 'Vikram Malhotra', age: 35, role: 'Team Lead', department: 'IT' },
    { name: 'Pooja Gupta', age: 17, role: 'Business Analyst', department: 'Analytics' },
    { name: 'Rahul Verma', age: 31, role: 'Database Administrator', department: 'IT' },
    { name: 'Kavita Joshi', age: 24, role: 'Junior Developer', department: 'IT' },
    { name: 'Sanjay Mehta', age: 13, role: 'System Architect', department: 'IT' },
    
    { name: 'Divya Nair', age: 26, role: 'Content Strategist', department: 'Marketing' },
    { name: 'Manish Tiwari', age: 30, role: 'Network Engineer', department: 'IT' },
    { name: 'Lakshmi Iyer', age: 22, role: 'Digital Marketer', department: 'Marketing' },
    { name: 'Arjun Desai', age: 17, role: 'Security Analyst', department: 'IT' }
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
    { id: 1, name: 'narayan sahu', email: 'a@email.com', orders: 5 },
    { id: 2, name: 'subha', email: 'b@email.com', orders: 12 },
    { id: 3, name: 'nakula', email: 'c@email.com', orders: 8 },
    { id: 4, name: 'Rohit Sharma', email: 'rohit@email.com', orders: 15 },
    { id: 5, name: 'Neha Kapoor', email: 'neha@email.com', orders: 8 },
    { id: 6, name: 'Arun Kumar', email: 'arun@email.com', orders: 12 }
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