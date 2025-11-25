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
import { Team3Component } from './team3/team3.component';
import { Team4Component } from './team4/team4.component';


// team 3 members components
import { SubhamComponent } from './team3/subham/subham.component';
import { AshutoshComponent } from './team3/ashutosh/ashutosh.component';
import { NarayanComponent } from './team3/narayan/narayan.component';   // ✅ Import here

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
import { TruptiComponent } from './team5/trupti/trupti.component';
import { Team5Component } from './team5/team5.component';
import { RitishComponent } from './team5/ritish/ritish.component';   


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
    Team3Component,
    Team4Component,

  
 // team 3 members components
    SubhamComponent,
    AshutoshComponent,
    NarayanComponent,

    PradyumnaComponent,
    BhowmickComponent,
    OmpriyaComponent,
    DebeseeComponent,
    BhagyashreeComponent,

    ChinmayaComponent,
    AryaComponent,
    SubhraComponent,
    JigyansaComponent,
    PrathanaComponent,

    ChinmayaComponent,
      TruptiComponent,
      Team5Component,
      RitishComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
