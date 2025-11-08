import { Component } from '@angular/core';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent {
  constructor(  ){ 
  alert(  "Salary constrtor called"  );  
  }
}
