import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './customer/customer-dashboard/customer-dashboard.component';
import { EmployeeManagementComponent } from './employee/employee-management/employee-management.component';

// Guards
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'app',
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
      
      // Team 3 Profile Routes REMOVED
      
      { path: '', redirectTo: 'admin/dashboard', pathMatch: 'full' }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaincomponentsRoutingModule { }