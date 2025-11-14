import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-team2',
  templateUrl: './team2.component.html',
  styleUrls: ['./team2.component.css']
})
export class Team2Component {

  selectedMember = '';
  isMainTeam2Page = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isMainTeam2Page = (event.url === '/team2');
      }
    });
  }

  openMember() {
    this.router.navigate(['/team2', this.selectedMember]);
  }
}
