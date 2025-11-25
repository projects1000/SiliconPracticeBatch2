import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  activeTeam: string | null = null;

  // Team 2 dropdown check
  isTeam2Active = false;

  constructor(private router: Router) {
    // Detect if Team2 route is active
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isTeam2Active = event.url.startsWith('/team2');
      }
    });
  }

  // Expand/Collapse Team 1 & Team 3
  toggleTeam(team: string) {
    this.activeTeam = this.activeTeam === team ? null : team;
  }

  // Team 2 SELECT-DROPDOWN navigation
  openMember(event: any) {
    const member = event.target.value;
    if (member) {
      this.router.navigate(['/team2', member]);
    }
  }
}