import { Component, OnInit } from '@angular/core';
import { FinancialDataService, AppSettings } from '../../service/financial-data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settings: AppSettings = {
    companyName: '',
    financialYear: '',
    currency: 'USD',
    taxRate: 0,
    departments: [],
    roles: []
  }; // ✅ INITIALIZE WITH DEFAULT VALUES
  
  activeTab: string = 'general';
  
  // Form models
  companyName: string = '';
  financialYear: string = '';
  currency: string = 'USD';
  taxRate: number = 0;

  constructor(private financialService: FinancialDataService) {}

  ngOnInit() {
    this.financialService.appSettings$.subscribe(settings => {
      this.settings = settings;
      this.loadFormData();
    });
  }

  loadFormData() {
    this.companyName = this.settings.companyName;
    this.financialYear = this.settings.financialYear;
    this.currency = this.settings.currency;
    this.taxRate = this.settings.taxRate;
  }

  selectTab(tab: string) {
    this.activeTab = tab;
  }

  saveGeneralSettings() {
    const updatedSettings: AppSettings = {
      ...this.settings,
      companyName: this.companyName,
      financialYear: this.financialYear,
      currency: this.currency,
      taxRate: this.taxRate
    };
    
    this.financialService.updateSettings(updatedSettings);
    alert('General settings saved successfully!');
  }

  saveDepartments() {
    this.financialService.updateSettings(this.settings);
    alert('Department settings saved successfully!');
  }

  addDepartment(deptName: string) {
    if (deptName && !this.settings.departments.includes(deptName)) {
      this.settings.departments.push(deptName);
    }
  }

  removeDepartment(deptName: string) {
    this.settings.departments = this.settings.departments.filter(dept => dept !== deptName);
  }

  addRole(roleName: string) {
    if (roleName && !this.settings.roles.includes(roleName)) {
      this.settings.roles.push(roleName);
    }
  }

  removeRole(roleName: string) {
    this.settings.roles = this.settings.roles.filter(role => role !== roleName);
  }
}