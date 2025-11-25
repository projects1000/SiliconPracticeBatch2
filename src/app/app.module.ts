import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HotelBookComponent } from './hotel-book/hotel-book.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { StudentComponent } from './student/student.component';
import { SalaryComponent } from './salary/salary.component';
import { LibraryComponent } from './library/library.component';
import { AdmissionComponent } from './admission/admission.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { Team1Component } from './team1/team1.component';
import { Team2Component } from './team2/team2.component';
import { Team4Component } from './team4/team4.component';

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
// Team 4 members components
import { TanishComponent } from './team4/tanish/tanish.component';
import { LokeshComponent } from './team4/lokesh/lokesh.component';
import { RudraComponent } from './team4/rudra/rudra.component';
import { DebaComponent } from './team4/deba/deba.component';

// Team3 Module (Lazy Loading)
import { Team3Module } from './team3/team3.module';

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
    Team1Component,
    Team2Component,
    Team4Component,
    // Team 2 members components
    PradyumnaComponent,
    BhowmickComponent,
    OmpriyaComponent,
    DebeseeComponent,
    BhagyashreeComponent,
    ChinmayaComponent,
    // Team 1 members components
    AryaComponent,
    SubhraComponent,
    JigyansaComponent,
    PrathanaComponent,
    // Team 4 members components
    TanishComponent,
    LokeshComponent,
    RudraComponent,
    DebaComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Team3Module //Team3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }