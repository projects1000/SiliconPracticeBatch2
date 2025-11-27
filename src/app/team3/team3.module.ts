import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Add ReactiveFormsModule
import { RouterModule } from '@angular/router';

import { Team3RoutingModule } from './team3-routing.module';
// Team 3 Container Component
import { Team3Component } from './team3.component';
// Team 3 Member Components
import { SubhamComponent } from './subham/subham.component';
import { AshutoshComponent } from './ashutosh/ashutosh.component';
import { NarayanComponent } from './narayan/narayan.component';
// Angular Components
import { LoginComponent } from './maincomponents/login/login.component';
import { MainComponent } from './maincomponents/main/main.component';
import { AdminDashboardComponent } from './maincomponents/admin/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './maincomponents/customer/customer-dashboard/customer-dashboard.component';
import { EmployeeManagementComponent } from './maincomponents/employee/employee-management/employee-management.component';
import { PageNotFoundComponent } from './maincomponents/page-not-found/page-not-found.component';
import { TopBarComponent } from './maincomponents/top-bar/top-bar.component';
import { NotificationComponent } from './maincomponents/notification/notification.component';
import { EmployeeFormComponent } from './maincomponents/employee/employee-form/employee-form.component';

@NgModule({
  declarations: [
    // Team 3 Container
    Team3Component,
    
    // Team 3 Members
    SubhamComponent,
    AshutoshComponent,
    NarayanComponent,
    
    // Project Components
    LoginComponent,
    MainComponent,
    AdminDashboardComponent,
    CustomerDashboardComponent,
    EmployeeManagementComponent,
    PageNotFoundComponent,
    TopBarComponent,
    NotificationComponent,
    EmployeeFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    Team3RoutingModule,
    ReactiveFormsModule // ✅ Add this line - this fixes the formGroup error
  ],
  exports: [
    Team3Component
  ]
})
export class Team3Module { }