import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Team2Component } from './team2/team2.component';
import { Team1Component } from './team1/team1.component';
import { Team3Component } from './team3/team3.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfileComponent } from './team3/profile/profile.component';  // new add for profile 

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children: [
      
      { path: 'team1', component: Team1Component },
      { path: 'team2', component: Team2Component },
      { path: 'team3', component: Team3Component },

      //  Add dynamic profile route inside Welcome children ok 
      { path: 'team3/profile/:name', component: ProfileComponent },

      { path: '', redirectTo: 'team1', pathMatch: 'full' },
    ],
  },

  // Wildcard (keep it last)
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
