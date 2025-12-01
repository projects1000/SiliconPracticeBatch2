// src/app/team4/project-team4/project-team4-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SharedService } from './services/shared.service';
import { inject } from '@angular/core';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'admin-dashboard',
        component: AdminDashboardComponent,
        canActivate: [
          () => {
            const role = inject(SharedService).getRole();
            return role === 'Admin';
          },
        ],
      },
      {
        path: 'employees',                       // 👈 NEW: employee page
        component: EmployeeListComponent,
        canActivate: [() => inject(SharedService).getRole() === 'Admin']
      },

      {
        path: 'customer-dashboard',
        component: CustomerDashboardComponent,
        canActivate: [
          () => {
            const role = inject(SharedService).getRole();
            return role === 'Customer';
          },
        ],
      },

      { path: '', redirectTo: 'customer-dashboard', pathMatch: 'full' },
      { path: 'page-not-found', component: PageNotFoundComponent },
      { path: '**', component: PageNotFoundComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectTeam4RoutingModule {}
