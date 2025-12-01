import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Team5Component } from './team5.component';
import { TruptiComponent } from './trupti/trupti.component';
import { RitishComponent } from './ritish/ritish.component';

const routes: Routes = [
  {
    path: '',  // /team5
    component: Team5Component,
    children: [

      { path: 'trupti', component: TruptiComponent },
      { path: 'ritish', component: RitishComponent },

      // Default route inside /team5
      { path: '', redirectTo: 'trupti', pathMatch: 'full' },

      // Any wrong URL → go to Trupti
      { path: '**', redirectTo: 'trupti' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Team5RoutingModule { }
