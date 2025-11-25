import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaincomponentsRoutingModule } from './maincomponents-routing.module';

// Components
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './customer/customer-dashboard/customer-dashboard.component';
import { EmployeeManagementComponent } from './employee/employee-management/employee-management.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    // Main Layout Components
    MainComponent,
    LoginComponent,
    PageNotFoundComponent,
    
    // Dashboard Components
    AdminDashboardComponent,
    CustomerDashboardComponent,
    EmployeeManagementComponent,
    
    // Shared Components
    TopBarComponent
    // Team 3 Profile Components REMOVED - No comma needed here since it's the last item
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaincomponentsRoutingModule
  ],
  exports: [
    MainComponent,
    LoginComponent,
    PageNotFoundComponent,
    TopBarComponent
  ]
})
export class MaincomponentsModule { }