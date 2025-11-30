import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../service/shared.service';
import { Employee } from '../../service/employee.model';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  employees: Employee[] = [];
  departments: string[] = [];

  selectedDepartment: string = 'all';

  financialData = {
    totalRevenue: 0,
    totalSalary: 0,
    netProfit: 0,
    profitMargin: 0
  };

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.employees = this.sharedService.getEmployees();  // ✔ Sorted employees
    this.departments = this.sharedService.getDepartments(); // ✔ Loaded enum values

    this.calculateFinancials();
  }

  /** When user selects a department */
  onDepartmentChange(event: any) {
    const dept = event.target.value;
    this.selectedDepartment = dept;
    this.calculateFinancials();
  }

  /** Calculate salary, revenue, profit */
  calculateFinancials() {
    const filtered = this.selectedDepartment === "all"
      ? this.employees
      : this.employees.filter(emp => emp.department === this.selectedDepartment);

    // Total salary
    this.financialData.totalSalary = filtered.reduce(
      (sum, emp) => sum + (emp.salary || 0),
      0
    );

    // Fake revenue logic
    this.financialData.totalRevenue = this.financialData.totalSalary * 2.5;

    // Profit
    this.financialData.netProfit =
      this.financialData.totalRevenue - this.financialData.totalSalary;

    // Margin
    this.financialData.profitMargin = Number(
      (
        (this.financialData.netProfit / this.financialData.totalRevenue) *
        100
      ).toFixed(2)
    );
  }
}
