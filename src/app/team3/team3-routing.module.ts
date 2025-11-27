import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Team 3 Components
import { Team3Component } from './team3.component';
import { SubhamComponent } from './subham/subham.component';
import { AshutoshComponent } from './ashutosh/ashutosh.component';
import { NarayanComponent } from './narayan/narayan.component';
// Project Components
import { LoginComponent } from './maincomponents/login/login.component';
import { MainComponent } from './maincomponents/main/main.component';
import { AdminDashboardComponent } from './maincomponents/admin/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './maincomponents/customer/customer-dashboard/customer-dashboard.component';
import { EmployeeManagementComponent } from './maincomponents/employee/employee-management/employee-management.component';
import { PageNotFoundComponent } from './maincomponents/page-not-found/page-not-found.component';
// Guards
import { AuthGuard } from './maincomponents/guards/auth.guard';
import { RoleGuard } from './maincomponents/guards/role.guard';
const routes: Routes = [
  {
    path: '', // This will be /team3
    component: Team3Component,
    children: [
      // Team Member Profiles
      { path: 'subham', component: SubhamComponent },
      { path: 'ashutosh', component: AshutoshComponent },
      { path: 'narayan', component: NarayanComponent },
      
      //  Angular Internship Project Routes
      { path: 'project/login', component: LoginComponent },
      {
        path: 'project/app',
        component: MainComponent,
        canActivate: [AuthGuard],
        children: [
          { 
            path: 'admin/dashboard', 
            component: AdminDashboardComponent, 
            canActivate: [RoleGuard], 
            data: { role: 'admin' } 
          },
          { 
            path: 'customer/dashboard', 
            component: CustomerDashboardComponent, 
            canActivate: [RoleGuard], 
            data: { role: 'customer' } 
          },
          { 
            path: 'admin/employees', 
            component: EmployeeManagementComponent, 
            canActivate: [RoleGuard], 
            data: { role: 'admin' } 
          },
          { path: '', redirectTo: 'admin/dashboard', pathMatch: 'full' }
        ]
      },
      { path: 'project', redirectTo: 'project/login', pathMatch: 'full' },
      { path: 'project/**', component: PageNotFoundComponent },
      
      // Default route for /team3
      { path: '', redirectTo: 'narayan', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Team3RoutingModule { }