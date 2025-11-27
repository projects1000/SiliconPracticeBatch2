import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team6',
  templateUrl: './team6.component.html',
  styleUrls: ['./team6.component.css']
})
export class Team6Component {

  constructor(private router: Router) {}
  

  openProfile(name: string) {
    this.router.navigate(['/team6/profile', name]);
  }
}
