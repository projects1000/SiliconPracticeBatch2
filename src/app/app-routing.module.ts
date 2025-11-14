import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';

import { Team1Component } from './team1/team1.component';
import { Team2Component } from './team2/team2.component';

import { Team3Component } from './team3/team3.component';

// TEAM 3 MEMBERS
import { LokeshComponent } from './team3/lokesh/lokesh.component';
import { SubhamComponent } from './team3/subham/subham.component';
import { AshutoshComponent } from './team3/ashutosh/ashutosh.component';
import { TanishComponent } from './team3/tanish/tanish.component';
import { NarayanComponent } from './team3/narayan/narayan.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children: [
      { path: 'team1', component: Team1Component },
      { 
        path: 'team2',
        component: Team2Component
      },

      
      {
        path: 'team3',
        component: Team3Component,
        children: [
          { path: 'lokesh', component: LokeshComponent },
          { path: 'subham', component: SubhamComponent },
          { path: 'ashutosh', component: AshutoshComponent },
          { path: 'tanish', component: TanishComponent },
          { path: 'narayan', component: NarayanComponent },
          // Default route for Team3
          { path: '', redirectTo: 'narayan', pathMatch: 'full' }
        ]
      },

      // Default on welcome page
      { path: '', redirectTo: 'team1', pathMatch: 'full' }
    ]
  },

  // Wildcard (keep last)
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
