import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  serviceData: string = "This is service data";
  firsNo: number = 10;
  getMessage(): string {
    return "Hello from DataService!";
  }

  constructor() {   }
}
