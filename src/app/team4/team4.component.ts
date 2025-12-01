import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team4',
  templateUrl: './team4.component.html',
  styleUrls: ['./team4.component.css']
})
export class Team4Component {

  constructor(private router: Router) {}
  

  openProfile(name: string) {
    this.router.navigate(['/team4/profile', name]);
  }
}
