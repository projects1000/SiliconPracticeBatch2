import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// TEAM 3 MEMBERS
import { SubhamComponent } from './team3/subham/subham.component';
import { AshutoshComponent } from './team3/ashutosh/ashutosh.component';
import { NarayanComponent } from './team3/narayan/narayan.component';

import { Team1Component } from './team1/team1.component';
import { Team2Component } from './team2/team2.component';
import { Team3Component } from './team3/team3.component';
import { Team4Component } from './team4/team4.component';

import { WelcomeComponent } from './welcome/welcome.component';

// TEAM 2 MEMBERS
import { PradyumnaComponent } from './team2/pradyumna/pradyumna.component';
import { BhowmickComponent } from './team2/bhowmick/bhowmick.component';
import { OmpriyaComponent } from './team2/ompriya/ompriya.component';
import { DebeseeComponent } from './team2/debesee/debesee.component';
import { BhagyashreeComponent } from './team2/bhagyashree/bhagyashree.component';
import { ChinmayaComponent } from './team2/chinmaya/chinmaya.component';

// TEAM 1 MEMBERS
import { AryaComponent } from './team1/arya/arya.component';
import { SubhraComponent } from './team1/subhra/subhra.component';
import { JigyansaComponent } from './team1/jigyansa/jigyansa.component';
import { PrathanaComponent } from './team1/prathana/prathana.component';
import { TanishComponent } from './team4/tanish/tanish.component';
import { LokeshComponent } from './team4/lokesh/lokesh.component';
import { RudraComponent } from './team4/rudra/rudra.component';
import { DebaComponent } from './team4/deba/deba.component';

// PROJECT team3 components
import { LoginComponent } from './team3/maincomponents/login/login.component';
import { MainComponent } from './team3/maincomponents/main/main.component';
import { AdminDashboardComponent } from './team3/maincomponents/admin/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './team3/maincomponents/customer/customer-dashboard/customer-dashboard.component';
import { EmployeeManagementComponent } from './team3/maincomponents/employee/employee-management/employee-management.component';
import { PageNotFoundComponent } from './team3/maincomponents/page-not-found/page-not-found.component';

// GUARDS
import { AuthGuard } from './team3/maincomponents/guards/auth.guard';
import { RoleGuard } from './team3/maincomponents/guards/role.guard';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children: [
      {
        path: 'team1',
        component: Team1Component,
        children: [
          { path: 'arya', component: AryaComponent },
          { path: 'subhra', component: SubhraComponent },
          { path: 'jigyansa', component: JigyansaComponent },
          { path: 'prathana', component: PrathanaComponent },
        ]
      },

      {
        path: 'team2',
        component: Team2Component,
        children: [
          { path: 'pradyumna', component: PradyumnaComponent },
          { path: 'bhowmick', component: BhowmickComponent },
          { path: 'ompriya', component: OmpriyaComponent },
          { path: 'debesee', component: DebeseeComponent },
          { path: 'bhagyashree', component: BhagyashreeComponent },
          { path: 'chinmaya', component: ChinmayaComponent },
          { path: '', redirectTo: 'pradyumna', pathMatch: 'full' }
        ]
      },

      //team3 routes

      {
        path: 'team3',
        component: Team3Component,
        children: [
          { path: 'subham', component: SubhamComponent },
          { path: 'ashutosh', component: AshutoshComponent },
          { path: 'narayan', component: NarayanComponent },
          
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
          
          { path: '', redirectTo: 'narayan', pathMatch: 'full' }
        ]
      },

      // ⭐ TEAM 4 ADDED PROPERLY ⭐
      {
        path: 'team4',
        component: Team4Component,
        children: [
          { path: 'tanish', component: TanishComponent },
          { path: 'lokesh', component: LokeshComponent },
          { path: 'rudra', component: RudraComponent },
          { path: 'deba', component: DebaComponent },
          { path: '', redirectTo: 'tanish', pathMatch: 'full' }
        ]
      },

      { path: '', redirectTo: 'team1', pathMatch: 'full' }
    ]
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }