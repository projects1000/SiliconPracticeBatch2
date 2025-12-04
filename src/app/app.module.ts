import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
// Project Components
import { HotelBookComponent } from './hotel-book/hotel-book.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { StudentComponent } from './student/student.component';
import { SalaryComponent } from './salary/salary.component';
import { LibraryComponent } from './library/library.component';
import { AdmissionComponent } from './admission/admission.component';
import { WelcomeComponent } from './welcome/welcome.component';
// Team Modules and Components
import { Team1Component } from './team1/team1.component';
import { Team2Component } from './team2/team2.component';
import { Team4Component } from './team4/team4.component';

import { Team5Component } from './team5/team5.component';



// team 3 members components
import { SubhamComponent } from './team3/subham/subham.component';
import { AshutoshComponent } from './team3/ashutosh/ashutosh.component';
import { NarayanComponent } from './team3/narayan/narayan.component';   // ✅ Import here


import { Team6Component } from './team6/team6.component';
// Team 2 members components

import { PradyumnaComponent } from './team2/pradyumna/pradyumna.component';
import { BhowmickComponent } from './team2/bhowmick/bhowmick.component';
import { OmpriyaComponent } from './team2/ompriya/ompriya.component';
import { DebeseeComponent } from './team2/debesee/debesee.component';
import { BhagyashreeComponent } from './team2/bhagyashree/bhagyashree.component';
import { ChinmayaComponent } from './team2/chinmaya/chinmaya.component';
// Team 1 members components
import { AryaComponent } from './team1/arya/arya.component';
import { SubhraComponent } from './team1/subhra/subhra.component';
import { JigyansaComponent } from './team1/jigyansa/jigyansa.component';
import { PrathanaComponent } from './team1/prathana/prathana.component';

// Team 5 Members & Pages
import { TruptiComponent } from './team5/trupti/trupti.component';
import { RitishComponent } from './team5/ritish/ritish.component';
import { YashComponent } from './team5/yash/yash.component';





import { RajashreeComponent } from './team6/rajashree/rajashree.component';
import { AkashComponent } from './team6/akash/akash.component';   
// Team 4 members components
import { TanishComponent } from './team4/tanish/tanish.component';
import { LokeshComponent } from './team4/lokesh/lokesh.component';
import { RudraComponent } from './team4/rudra/rudra.component';
import { DebaComponent } from './team4/deba/deba.component';
// Team3 Module (Lazy Loading)
import { Team3Module } from './team3/team3.module';
// Note: Team3Module is imported here for eager loading.

@NgModule({
  declarations: [
    AppComponent,
    HotelBookComponent,
    AttendanceComponent,
    StudentComponent,
    SalaryComponent,
    LibraryComponent,
    AdmissionComponent,
    WelcomeComponent,
    // Team Components
    Team1Component,
    Team2Component,
    Team4Component,

    Team5Component,

  



    Team6Component,
    // Team 2 members components

    PradyumnaComponent,
    BhowmickComponent,
    OmpriyaComponent,
    DebeseeComponent,
    BhagyashreeComponent,
    ChinmayaComponent,
    ChinmayaComponent,
    // Team 1 members components
    AryaComponent,
    SubhraComponent,
    JigyansaComponent,
    PrathanaComponent,


    ChinmayaComponent,
    // Team5 members & pages
    TruptiComponent,
    RitishComponent,
    YashComponent,
    


    // Team 4 members components
    TanishComponent,
    LokeshComponent,
    RudraComponent,
    DebaComponent,
    // Team 6 members components
    RajashreeComponent,
    AkashComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

      


    Team3Module, // Eagerly load Team3Module

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }