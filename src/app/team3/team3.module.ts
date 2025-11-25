import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Team3RoutingModule } from './team3-routing.module';
import { Team3Component } from './team3.component';
import { SubhamComponent } from './subham/subham.component';
import { AshutoshComponent } from './ashutosh/ashutosh.component';
import { NarayanComponent } from './narayan/narayan.component';

// Import Maincomponents Module
import { MaincomponentsModule } from './maincomponents/maincomponents.module';

@NgModule({
  declarations: [
    Team3Component,
    SubhamComponent,
    AshutoshComponent,
    NarayanComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    Team3RoutingModule,
    MaincomponentsModule
  ]
})
export class Team3Module { }