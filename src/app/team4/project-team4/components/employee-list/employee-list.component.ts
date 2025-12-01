// src/app/team4/project-team4/components/employee-list/employee-list.component.ts
import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

interface Employee {
  name: string;
  age: number;
  role: string;
  department: string;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees: Employee[] = [
    { name: 'John', age: 25, role: 'Developer', department: 'IT' },
    { name: 'Sara', age: 17, role: 'Intern', department: 'IT' },
    { name: 'Mike', age: 30, role: 'Manager', department: 'HR' },
    { name: 'Tanish', age: 11, role: 'Manager', department: 'HR' },
    { name: 'Riya', age: 16, role: 'Trainee', department: 'Finance' }
  ];

  constructor(private sharedService: SharedService) {
    this.sharedService.setEmployees(this.employees);  // <-- IMPORTANT
  }
}
