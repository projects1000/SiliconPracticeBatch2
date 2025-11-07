import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HotelBookComponent } from './hotel-book/hotel-book.component';
import { AttendanceComponent } from './attendance/attendance.component';   // ✅ Import here

@NgModule({
  declarations: [
    AppComponent,
    HotelBookComponent,
    AttendanceComponent
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
