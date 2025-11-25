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

// Team 3 members components
import { SubhamComponent } from './team3/subham/subham.component';
import { AshutoshComponent } from './team3/ashutosh/ashutosh.component';
import { NarayanComponent } from './team3/narayan/narayan.component';

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

// 🚀 ANGULAR INTERNSHIP PROJECT COMPONENTS - Individual imports
import { LoginComponent } from './team3/maincomponents/login/login.component';
import { MainComponent } from './team3/maincomponents/main/main.component';
import { AdminDashboardComponent } from './team3/maincomponents/admin/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './team3/maincomponents/customer/customer-dashboard/customer-dashboard.component';
import { EmployeeManagementComponent } from './team3/maincomponents/employee/employee-management/employee-management.component';
import { PageNotFoundComponent } from './team3/maincomponents/page-not-found/page-not-found.component';
import { TopBarComponent } from './team3/maincomponents/top-bar/top-bar.component';

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

    // Team 3 members components
    SubhamComponent,
    AshutoshComponent,
    NarayanComponent,

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

    // 🚀 ANGULAR INTERNSHIP PROJECT COMPONENTS
    LoginComponent,
    MainComponent,
    AdminDashboardComponent,
    CustomerDashboardComponent,
    EmployeeManagementComponent,
    PageNotFoundComponent,
    TopBarComponent
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