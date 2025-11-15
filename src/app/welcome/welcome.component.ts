import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

activeTeam: string | null = null;
  isDropdownOpen: boolean | undefined;

toggleTeam(team: string) {
  this.activeTeam = this.activeTeam === team ? null : team;
}


  isTeam2Active = false;

  constructor(private router: Router) {

    // Detect if Team2 is active
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isTeam2Active = event.url.startsWith('/team2');
      }
    });

  }

  // TEAM 3 DROPDOWN
  toggleDropdown(event: Event) {
    event.preventDefault();   
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  goToMember(member: string) {
    this.isDropdownOpen = false;
    this.router.navigate([`/team3/${member}`]);
  }

  // TEAM 2 DROPDOWN
  openMember(event: any) {
    const member = event.target.value;
    if (member) {
      this.router.navigate(['/team2', member]);
    }
  }
}
