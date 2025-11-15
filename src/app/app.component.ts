import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Required for ngModel

@Component({
  selector: 'app-root33',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  fathersName : string ="XYZ  BBTTTTTTTTTTTTTTTTT";
  parentReceivedMessage : string ="";

  
  constructor(  ){
    //alert('App component constructor called');
  }



  getMessageFromChild(chaildVariable: string) {
  this.parentReceivedMessage = chaildVariable;
}

}  

