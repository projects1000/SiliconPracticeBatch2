import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team3',
  templateUrl: './team3.component.html',
  styleUrls: ['./team3.component.css']
})
export class Team3Component {

  constructor(private router: Router) {}
  

  openProfile(name: string) {
    this.router.navigate(['/team3/profile', name]);
  }
}
