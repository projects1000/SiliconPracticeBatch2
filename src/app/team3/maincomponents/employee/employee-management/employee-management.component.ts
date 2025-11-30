import { Component, OnInit } from '@angular/core';
import { Employee } from '../../service/employee.model';
import { SharedService } from '../../service/shared.service';
import { NotificationService } from '../../service/notification.service';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  searchTerm: string = '';
  showEmployeeForm = false;
  selectedEmployee: Employee | null = null;
  isEditMode = false;
  currentUser: any;
  isAdmin: boolean = false;
  isMobile = false;

  constructor(
    private sharedService: SharedService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.loadEmployees();
    this.checkUserRole();
    this.checkDevice();
  }

  checkUserRole() {
    this.currentUser = this.sharedService.getCurrentUser();
    this.isAdmin = this.currentUser?.role === 'admin';
    
    if (!this.isAdmin) {
      this.notificationService.warning(
        'You have view-only access. Only administrators can modify employee data.',
        'Limited Access'
      );
    }
  }

  checkDevice() {
    this.isMobile = window.innerWidth <= 768;

    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 768;
    });
  }

  loadEmployees() {
    this.employees = this.sharedService.getEmployees();
    this.filteredEmployees = this.employees;
  }

  // ✅ Add this missing method
  getAdultCount(): number {
    return this.employees.filter(emp => !this.isMinor(emp.age)).length;
  }

  // ✅ Add new employee - Admin only
  addEmployee() {
    if (!this.isAdmin) {
      this.notificationService.error(
        'Only administrators can add new employees',
        'Access Denied'
      );
      return;
    }
    
    this.selectedEmployee = null;
    this.isEditMode = false;
    this.showEmployeeForm = true;
  }

  // ✅ Edit existing employee - Admin only
  editEmployee(employee: Employee) {
    if (!this.isAdmin) {
      this.notificationService.error(
        'Only administrators can edit employee details',
        'Access Denied'
      );
      return;
    }
    
    this.selectedEmployee = employee;
    this.isEditMode = true;
    this.showEmployeeForm = true;
  }

  // ✅ Delete employee - Admin only (WITH RED ALERT NOTIFICATION)
  deleteEmployee(employee: Employee) {
    if (!this.isAdmin) {
      this.notificationService.error(
        'Only administrators can delete employees',
        'Access Denied'
      );
      return;
    }

    if (confirm(`Are you sure you want to delete ${employee.name}? This action cannot be undone.`)) {
      const success = this.sharedService.deleteEmployee(employee.id);
      if (success) {
        this.loadEmployees();
        
        // ✅ Show RED ALERT notification for employee deletion
        this.notificationService.employeeDelete(employee.name);
        
      } else {
        this.notificationService.error(
          'Failed to delete employee',
          'Error'
        );
      }
    }
  }

  // ✅ Handle form save
  onEmployeeSaved(employee: Employee) {
    this.showEmployeeForm = false;
    this.loadEmployees();
    
    // Show success notification based on mode
    if (this.isEditMode) {
      this.notificationService.success(
        `${employee.name} has been updated successfully`,
        'Employee Updated'
      );
    } else {
      this.notificationService.success(
        `${employee.name} has been added successfully`,
        'Employee Added'
      );
    }
  }

  // ✅ Handle form cancel
  onFormCancel() {
    this.showEmployeeForm = false;
    this.selectedEmployee = null;
  }

  // ✅ View employee details (available for all users)
  viewEmployee(employee: Employee) {
    this.notificationService.info(
      `Viewing details for ${employee.name}`,
      'Employee Details'
    );
  }

  // Existing methods
  isMinor(age: number): boolean {
    return age < 18;
  }

  getMinorCount(): number {
    return this.employees.filter(emp => this.isMinor(emp.age)).length;
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
      emp.role.toLowerCase().includes(term) ||
      emp.email.toLowerCase().includes(term)
    );

    if (this.filteredEmployees.length === 0 && this.searchTerm.length > 0) {
      this.notificationService.warning(
        `No employees found for "${this.searchTerm}"`,
        'No Results'
      );
    }
  }

  getRowClass(employee: Employee) {
    return {
      'minor-row': this.isMinor(employee.age),
      'adult-row': !this.isMinor(employee.age)
    };
  }

  // Export data (Admin only)
  exportEmployeeData() {
    if (!this.isAdmin) {
      this.notificationService.error(
        'Only administrators can export employee data',
        'Access Denied'
      );
      return;
    }

    const exportedData = this.sharedService.exportEmployeesData();
    this.notificationService.success(
      `Employee data exported successfully (${exportedData.length} records)`,
      'Export Complete'
    );
  }

  // Import data (Admin only)
  importEmployeeData(event: any) {
    if (!this.isAdmin) {
      this.notificationService.error(
        'Only administrators can import employee data',
        'Access Denied'
      );
      return;
    }

    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        try {
          const importedData = JSON.parse(e.target.result);
          const success = this.sharedService.importEmployeesData(importedData);
          if (success) {
            this.loadEmployees();
          }
        } catch (error) {
          this.notificationService.error(
            'Invalid file format. Please upload a valid JSON file.',
            'Import Failed'
          );
        }
      };
      reader.readAsText(file);
    }
  }

  // Reset to default data (Admin only)
  resetToDefaultData() {
    if (!this.isAdmin) {
      this.notificationService.error(
        'Only administrators can reset data',
        'Access Denied'
      );
      return;
    }

    if (confirm('Are you sure you want to reset all employee data to default? This action cannot be undone.')) {
      this.sharedService.resetToDefaultData();
      this.loadEmployees();
    }
  }
}