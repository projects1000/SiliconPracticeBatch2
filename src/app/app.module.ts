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
import { LokeshComponent } from './team3/lokesh/lokesh.component';
import { SubhamComponent } from './team3/subham/subham.component';
import { AshutoshComponent } from './team3/ashutosh/ashutosh.component';
import { TanishComponent } from './team3/tanish/tanish.component';
import { NarayanComponent } from './team3/narayan/narayan.component';   // ✅ Import here

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
    // extra 
 // team 3 members components
    LokeshComponent,
    SubhamComponent,
    AshutoshComponent,
    TanishComponent,
    NarayanComponent
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
