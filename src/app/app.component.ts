import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Required for ngModel

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
// Variable Declarations
  title = 'Silicon Management Module';
  name = '';
  userName ='';
  stateName : string = 'Odisha';

  showSubmitButton : boolean = false;

  displayVar : boolean = true;

  colorName : string = 'red';

  bgColor : string = 'blue';

  makeDisable : boolean = true;

  localPeople : boolean = true;

  cityResult: boolean = false;
  //methods if any

  isSubmitted : boolean = false;
  city :string = '';

  showMessage(any ?: any){  

    //
    // if (this.bgColor === 'red')
    //   {
    //        this.bgColor = 'blue';
    //   }
    //   else{
    //      this.bgColor = 'red';
    //   }
   
    //You can use Ternary Operator also
        this.bgColor = this.bgColor === 'red' ? 'blue' : 'red';

  this.name ='Button Clicked!';


  }


  // Result message for city check

  onSubmit(form: any) {
    
    this.isSubmitted = true
    if (form.value.city  === 'Bhubaneswar') {
      this.cityResult = true;
    } else {
      this.cityResult = false;
    }
  }


}
