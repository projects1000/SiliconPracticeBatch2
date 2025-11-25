import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Team1Component } from './team1/team1.component';
import { Team2Component } from './team2/team2.component';
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
// TEAM 4 MEMBERS
import { TanishComponent } from './team4/tanish/tanish.component';
import { LokeshComponent } from './team4/lokesh/lokesh.component';
import { RudraComponent } from './team4/rudra/rudra.component';
import { DebaComponent } from './team4/deba/deba.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children: [
      // TEAM 1
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
       // TEAM 2
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
      // Team 3 (Lazy Loading)
      {
        path: 'team3',
        loadChildren: () => import('./team3/team3.module').then(m => m.Team3Module)
      },
      // TEAM 4
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