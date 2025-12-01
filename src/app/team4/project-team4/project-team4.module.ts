import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectTeam4RoutingModule } from './project-team4-routing.module';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';


@NgModule({
  declarations: [
    LoginComponent,
    LayoutComponent,
    LeftNavComponent,
    TopBarComponent,
    AdminDashboardComponent,
    CustomerDashboardComponent,
    EmployeeListComponent,
    PageNotFoundComponent,
    CustomerProfileComponent
  ],
  imports: [
    CommonModule,
     FormsModule, 
    ProjectTeam4RoutingModule
  ]
})
export class ProjectTeam4Module { }
