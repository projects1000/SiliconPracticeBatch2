import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  constructor( private router: Router    ){ { 
  alert(  "Welcome welcome component constructor called"  );  
  }

  


  // redirectTest(){

  //    //this.router.navigate(['/library']); 
  // }
  }
  redirectTest(){
   this.router.navigate(['/sal']); 
  }
}
