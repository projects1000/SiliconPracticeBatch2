import { Component } from '@angular/core';
import { SharedService } from '../../service/shared.service';
import { NotificationService } from '../../service/notification.service';
import { Employee } from '../../service/employee.model';

@Component({
  selector: 'app-data-management',
  templateUrl: './data-management.component.html',
  styleUrls: ['./data-management.component.css']
})
export class DataManagementComponent {
  currentUser: any;
  isAdmin: boolean = false;

  constructor(
    private sharedService: SharedService,
    private notificationService: NotificationService
  ) {
    this.currentUser = this.sharedService.getCurrentUser();
    this.isAdmin = this.currentUser?.role === 'admin';
  }

  exportData() {
    const employees = this.sharedService.exportEmployeesData();
    const dataStr = JSON.stringify(employees, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `employees_backup_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    this.notificationService.success(
      `Exported ${employees.length} employees successfully`, 
      'Export Complete'
    );
  }

  importData(event: any) {
    if (!this.isAdmin) {
      this.notificationService.error('Only administrators can import data', 'Access Denied');
      return;
    }

    const file = event.target.files[0];
    if (!file) return;

    // Reset file input
    event.target.value = '';

    const reader = new FileReader();
    reader.onload = (e: any) => {
      try {
        const importedData = JSON.parse(e.target.result);
        
        // Validate and import data
        const success = this.sharedService.importEmployeesData(importedData);
        
        if (success) {
          this.notificationService.success(
            `Imported ${importedData.length} employees successfully`, 
            'Import Complete'
          );
        } else {
          this.notificationService.error(
            'Failed to import data. Please check the file format.',
            'Import Failed'
          );
        }
      } catch (error) {
        this.notificationService.error(
          'Invalid file format. Please upload a valid JSON file.',
          'Import Failed'
        );
      }
    };
    
    reader.onerror = () => {
      this.notificationService.error(
        'Error reading file. Please try again.',
        'File Error'
      );
    };
    
    reader.readAsText(file);
  }

  resetData() {
    if (confirm('⚠️ Are you sure you want to reset ALL data to default values?\n\nThis will:' +
                '\n• Delete all current employees' +
                '\n• Restore default employee data' +
                '\n• This action cannot be undone!')) {
      this.sharedService.resetToDefaultData();
      this.notificationService.info(
        'All data has been reset to default values', 
        'Reset Complete'
      );
    }
  }

  // Additional method to clear all data
  clearAllData() {
    if (confirm('🚨 DANGER ZONE!\n\nAre you sure you want to CLEAR ALL data?' +
                '\n\nThis will:' +
                '\n• Delete ALL employees permanently' +
                '\n• Remove all customer data' +
                '\n• This is irreversible!')) {
      localStorage.clear();
      location.reload(); // Reload the page to reinitialize data
    }
  }

  // Get storage information
  getStorageInfo() {
    const employees = this.sharedService.getEmployees();
    const customers = this.sharedService.getCustomerData();
    
    return {
      employeeCount: employees.length,
      customerCount: customers.length,
      storageUsed: this.getStorageSize()
    };
  }

  private getStorageSize(): string {
    let total = 0;
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        total += localStorage[key].length;
      }
    }
    return (total / 1024).toFixed(2) + ' KB';
  }
}