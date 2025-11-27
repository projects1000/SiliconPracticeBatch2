import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Make sure this is imported
import { RouterModule } from '@angular/router';

// Components
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './customer/customer-dashboard/customer-dashboard.component';
import { EmployeeManagementComponent } from './employee/employee-management/employee-management.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ReportsComponent } from './admin/reports/reports.component';
import { SettingsComponent } from './admin/settings/settings.component';

@NgModule({
  declarations: [
    MainComponent,
    LoginComponent,
    PageNotFoundComponent,
    AdminDashboardComponent,
    CustomerDashboardComponent,
    EmployeeManagementComponent,
    TopBarComponent,
    ReportsComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule, // Make sure this is here
    RouterModule
  ],
  exports: [
    MainComponent,
    LoginComponent
  ]
})
export class MaincomponentsModule { }