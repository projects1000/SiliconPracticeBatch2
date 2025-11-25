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

// PROJECT TEAM 4 COMPONENTS
import { TanishComponent } from './team4/tanish/tanish.component';
import { LokeshComponent } from './team4/lokesh/lokesh.component';
import { RudraComponent } from './team4/rudra/rudra.component';
import { DebaComponent } from './team4/deba/deba.component';

import { ProjectTeam4Component } from './team4/project-team4/project-team4.component';
import { LoginComponent } from './team4/project-team4/login/login.component';
import { LayoutComponent } from './team4/project-team4/layout/layout.component';
import { DashboardComponent } from './team4/project-team4/dashboard/dashboard.component';
import { EmployeeListComponent } from './team4/project-team4/employee-list/employee-list.component';

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

      {
        path: 'team3',
        component: Team3Component,
        children: [
          { path: 'subham', component: SubhamComponent },
          { path: 'ashutosh', component: AshutoshComponent },
          { path: 'narayan', component: NarayanComponent },
          { path: '', redirectTo: 'narayan', pathMatch: 'full' }
        ]
      },

      // ⭐ TEAM 4 ADDED PROPERLY ⭐
      // ... previous teams (team1, team2, team3)

      {
        path: 'team4',
        component: Team4Component,
        children: [
          // Individual Members
          { path: 'tanish', component: TanishComponent },
          { path: 'lokesh', component: LokeshComponent },
          { path: 'rudra', component: RudraComponent },
          { path: 'deba', component: DebaComponent },
          
          // ⭐ THE PROJECT-TEAM4 CONFIGURATION ⭐
          { 
            path: 'project-team4', 
            component: ProjectTeam4Component, // Acts as the shell
            children: [
                // 1. Default redirect to login
                { path: '', redirectTo: 'login', pathMatch: 'full' },
                
                // 2. Login Page
                { path: 'login', component: LoginComponent },
                
                // 3. Admin Section (Protected by Layout)
                { 
                    path: 'admin', 
                    component: LayoutComponent, // Sidebar + Topbar
                    children: [
                        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                        { path: 'dashboard', component: DashboardComponent },
                        { path: 'employees', component: EmployeeListComponent }
                    ]
                }
            ]
          },

          { path: '', redirectTo: 'tanish', pathMatch: 'full' }
        ]
      },

      // ... rest of the file

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
