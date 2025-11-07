import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { HotelBookComponent } from './hotel-book/hotel-book.component';

// Define routes outside the class
const routes: Routes = [
  { path: 'atteandance', component: AttendanceComponent },
    { path: 'hotelbook', component: HotelBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
