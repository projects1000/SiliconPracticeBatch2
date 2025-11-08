import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { HotelBookComponent } from './hotel-book/hotel-book.component';
import { SalaryComponent } from './salary/salary.component';
import { LibraryComponent } from './library/library.component';
import { AdmissionComponent } from './admission/admission.component';
import { WelcomeComponent } from './welcome/welcome.component';

// Define routes outside the class
const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'atteandance', component: AttendanceComponent },
    { path: 'hotelbook', component: HotelBookComponent },
    { path: 'sal', component: SalaryComponent },
    { path: 'library', component: LibraryComponent },
    { path: 'adm', component: AdmissionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
