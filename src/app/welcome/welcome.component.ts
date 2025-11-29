import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  activeTeam: 'team1' | 'team2' | 'team3' | 'team4' | 'team6' | null = null;
  currentYear = new Date().getFullYear();
  showMentor = false;

  constructor(private router: Router) {}

  // click toggle (still works)
  toggleTeam(team: 'team1' | 'team2' | 'team3' | 'team4' | 'team6') {
    this.activeTeam = this.activeTeam === team ? null : team;
    this.showMentor = false;
  }

  // hover open
  openTeam(team: 'team1' | 'team2' | 'team3' | 'team4' | 'team6') {
    this.activeTeam = team;
    this.showMentor = false;
  }

  // close when mouse leaves dropdown menu
  closeTeam() {
    this.activeTeam = null;
  }

  goHome() {
    this.activeTeam = null;
    this.showMentor = false;
    this.router.navigate(['/']);
  }

  exploreMentor() {
    this.showMentor = !this.showMentor;
  }
}
