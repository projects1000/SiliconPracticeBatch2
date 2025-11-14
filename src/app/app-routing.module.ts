import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Team2Component } from './team2/team2.component';
import { Team1Component } from './team1/team1.component';
import { Team3Component } from './team3/team3.component';
import { WelcomeComponent } from './welcome/welcome.component';

// Define routes outside the class
const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children: [
      { path: 'team1', component: Team1Component },
      { path: 'team2', component: Team2Component },
      { path: 'team3', component: Team3Component },
      { path: '', redirectTo: 'team1', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: '' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
