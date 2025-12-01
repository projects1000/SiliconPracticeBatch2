import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee, EmployeeFormData } from '../../service/employee.model'; 
import { SharedService } from '../../service/shared.service';
import { NotificationService } from '../../service/notification.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  @Input() employee: Employee | null = null;
  @Input() isEditMode: boolean = false;
  @Output() save = new EventEmitter<Employee>();
  @Output() cancel = new EventEmitter<void>();

  employeeForm!: FormGroup;
  departments: string[] = [];
  roles: string[] = [];

  constructor(
    private fb: FormBuilder,
    private sharedService: SharedService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.departments = this.sharedService.getDepartments();
    this.roles = this.sharedService.getRoles();
    
    this.initializeForm();
    
    if (this.isEditMode && this.employee) {
      this.populateForm();
    }
  }

  initializeForm() {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      age: ['', [Validators.required, Validators.min(16), Validators.max(65)]],
      role: ['', Validators.required],
      department: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      salary: ['', [Validators.required, Validators.min(0)]],
      joinDate: [''],
      phone: [''],
      address: ['']
    });
  }

  populateForm() {
    if (this.employee) {
      this.employeeForm.patchValue({
        name: this.employee.name,
        age: this.employee.age,
        role: this.employee.role,
        department: this.employee.department,
        email: this.employee.email,
        salary: this.employee.salary || '',
        joinDate: this.employee.joinDate || '',
        phone: this.employee.phone || '',
        address: this.employee.address || ''
      });
    }
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      const formData: EmployeeFormData = this.employeeForm.value;
      
      if (this.isEditMode && this.employee) {
        // Update existing employee
        const updatedEmployee = this.sharedService.updateEmployee(this.employee.id, formData);
        if (updatedEmployee) {
          this.save.emit(updatedEmployee);
          this.notificationService.success('Employee updated successfully!', 'Update Successful');
        }
      } else {
        // Add new employee
        const newEmployee = this.sharedService.addEmployee(formData);
        this.save.emit(newEmployee);
        this.notificationService.success('Employee added successfully!', 'Add Successful');
      }
    } else {
      this.notificationService.error('Please fill all required fields correctly', 'Form Error');
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}