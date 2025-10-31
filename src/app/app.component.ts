import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
// Variable Declarations
  title = 'Silicon Management Module';
  name = '4thyearstudent';

  stateName : string = 'Odisha';

  showSubmitButton : boolean = false;

  displayVar : boolean = true;

  colorName : string = 'red';

  bgColor : string = 'blue';

  makeDisable : boolean = true;


  //methods if any

  showMessage(){  
    alert('Button Clicked Successfully');
  }


}
