import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface FinancialData {
  totalRevenue: number;
  totalSalary: number;
  netProfit: number;
  profitMargin: number;
  departments: DepartmentFinancial[];
}

export interface DepartmentFinancial {
  name: string;
  revenue: number;
  salary: number;
  profit: number;
  employees: number;
}

export interface AppSettings {
  companyName: string;
  financialYear: string;
  currency: string;
  taxRate: number;
  departments: string[];
  roles: string[];
}

@Injectable({
  providedIn: 'root'
})
export class FinancialDataService {
  private financialData = new BehaviorSubject<FinancialData>(this.getDefaultFinancialData());
  private appSettings = new BehaviorSubject<AppSettings>(this.getDefaultSettings());

  financialData$ = this.financialData.asObservable();
  appSettings$ = this.appSettings.asObservable();

  constructor() {}

  // Financial Data Methods
  getFinancialData(): FinancialData {
    return this.financialData.value;
  }

  updateFinancialData(data: FinancialData) {
    this.financialData.next(data);
  }

  // Settings Methods
  getSettings(): AppSettings {
    return this.appSettings.value;
  }

  updateSettings(settings: AppSettings) {
    this.appSettings.next(settings);
  }

  // Default Data
  private getDefaultFinancialData(): FinancialData {
    return {
      totalRevenue: 850000,
      totalSalary: 520000,
      netProfit: 330000,
      profitMargin: 38.8,
      departments: [
        { name: 'IT', revenue: 350000, salary: 180000, profit: 170000, employees: 12 },
        { name: 'Sales', revenue: 300000, salary: 150000, profit: 150000, employees: 8 },
        { name: 'HR', revenue: 80000, salary: 90000, profit: -10000, employees: 6 },
        { name: 'Marketing', revenue: 120000, salary: 100000, profit: 20000, employees: 5 }
      ]
    };
  }

  private getDefaultSettings(): AppSettings {
    return {
      companyName: 'Tech Solutions Inc',
      financialYear: '2024',
      currency: 'USD',
      taxRate: 15,
      departments: ['IT', 'Sales', 'HR', 'Marketing', 'Finance'],
      roles: ['Admin', 'Manager', 'Developer', 'Sales Executive', 'HR Executive']
    };
  }
}