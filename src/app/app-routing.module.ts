import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Team2Component } from './team2/team2.component';
import { Team1Component } from './team1/team1.component';
import { Team3Component } from './team3/team3.component';
import { WelcomeComponent } from './welcome/welcome.component';

// Import Team2 child components
import { PradyumnaComponent } from './team2/pradyumna/pradyumna.component';
import { BhowmickComponent } from './team2/bhowmick/bhowmick.component';
import { OmpriyaComponent } from './team2/ompriya/ompriya.component';
import { DebeseeComponent } from './team2/debesee/debesee.component';
import { BhagyashreeComponent } from './team2/bhagyashree/bhagyashree.component';
import { ChinmayaComponent } from './team2/chinmaya/chinmaya.component';
import { AryaComponent } from './team1/arya/arya.component';
import { SubhraComponent } from './team1/subhra/subhra.component';
import { JigyansaComponent } from './team1/jigyansa/jigyansa.component';
import { PrathanaComponent } from './team1/prathana/prathana.component';


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
        ],
      },

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
