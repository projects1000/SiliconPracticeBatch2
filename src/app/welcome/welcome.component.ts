import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

activeTeam: string | null = null;

toggleTeam(team: string) {
  this.activeTeam = this.activeTeam === team ? null : team;
}


  isTeam2Active = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isTeam2Active = event.url.startsWith('/team2');
      }
    });
  }

  openMember(event: any) {
    const member = event.target.value;
    if (member) {
      this.router.navigate(['/team2', member]);
    }
  }
}
