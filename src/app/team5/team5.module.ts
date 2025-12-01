import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // ✅ This is required

import { Team5Component } from './team5.component';

import { TruptiComponent } from './trupti/trupti.component';
import { RitishComponent } from './ritish/ritish.component';


@NgModule({
  declarations: [
    Team5Component,
    
    TruptiComponent,
    RitishComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule // ✅ This makes <router-outlet> work
  ],
  exports: [
    Team5Component,
    
  ]
})
export class Team5Module { }
