import { Component, OnInit } from '@angular/core';
import { SharedService, Employee } from '../../shared/shared.service';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  searchTerm: string = '';

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.employees = this.sharedService.getEmployees();
    this.filteredEmployees = this.employees;
  }

  isMinor(age: number): boolean {
    return age < 18;
  }

  getMinorCount(): number {
    return this.employees.filter(emp => this.isMinor(emp.age)).length;
  }

  getAdultCount(): number {
    return this.employees.filter(emp => !this.isMinor(emp.age)).length;
  }

  onSearchChange() {
    if (!this.searchTerm) {
      this.filteredEmployees = this.employees;
      return;
    }

    const term = this.searchTerm.toLowerCase();
    this.filteredEmployees = this.employees.filter(emp =>
      emp.name.toLowerCase().includes(term) ||
      emp.department.toLowerCase().includes(term) ||
      emp.role.toLowerCase().includes(term)
    );
  }

  getRowClass(employee: Employee) {
    return {
      'minor-row': this.isMinor(employee.age),
      'adult-row': !this.isMinor(employee.age)
    };
  }
}