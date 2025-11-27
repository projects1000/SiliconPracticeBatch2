import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Hardcoded Data matching your screenshots
  dashboardStats = { employees: 8, revenue: 45231, orders: 12, growth: 12.5 };
  
  private employees = [
    { id: 1, name: 'John Smith', age: 32, role: 'Senior Developer', dept: 'Engineering', status: 'Active' },
    { id: 2, name: 'Sarah Johnson', age: 17, role: 'Intern', dept: 'Marketing', status: 'Minor' },
    { id: 3, name: 'Michael Brown', age: 45, role: 'Manager', dept: 'Sales', status: 'Active' },
    { id: 4, name: 'Emma Wilson', age: 16, role: 'Junior Intern', dept: 'HR', status: 'Minor' }
  ];

  getEmployees() { return this.employees; }
}