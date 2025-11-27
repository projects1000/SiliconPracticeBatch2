import { Component, OnInit } from '@angular/core';
import { FinancialDataService, FinancialData, DepartmentFinancial } from '../../service/financial-data.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  financialData: FinancialData = {
    totalRevenue: 0,
    totalSalary: 0,
    netProfit: 0,
    profitMargin: 0,
    departments: []
  }; // ✅ INITIALIZE WITH DEFAULT VALUES
  
  selectedDepartment: string = 'all';

  constructor(private financialService: FinancialDataService) {}

  ngOnInit() {
    this.financialService.financialData$.subscribe(data => {
      this.financialData = data;
    });
  }

  getDepartmentProfitability(dept: DepartmentFinancial): string {
    if (dept.profit > 0) return 'profit';
    if (dept.profit < 0) return 'loss';
    return 'neutral';
  }

  getFilteredDepartments(): DepartmentFinancial[] {
    if (this.selectedDepartment === 'all') {
      return this.financialData.departments;
    }
    return this.financialData.departments.filter(dept => 
      dept.name.toLowerCase() === this.selectedDepartment.toLowerCase()
    );
  }

  getProfitMakingDepartments(): DepartmentFinancial[] {
    return this.financialData.departments.filter(dept => dept.profit > 0);
  }

  getLossMakingDepartments(): DepartmentFinancial[] {
    return this.financialData.departments.filter(dept => dept.profit < 0);
  }
}