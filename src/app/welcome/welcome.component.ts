import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnDestroy {
  activeTeam: 'team1' | 'team2' | 'team3' | 'team4' | 'team5' | 'team6' | null = null;
  currentYear = new Date().getFullYear();
  showMentor = false;

  // 🔹 fullscreen flag
  isFullScreen = false;

  constructor(private router: Router) {}

  toggleTeam(team: 'team1' | 'team2' | 'team3' | 'team4' | 'team5' | 'team6') {
    this.activeTeam = this.activeTeam === team ? null : team;
    this.showMentor = false;
  }

  openTeam(team: 'team1' | 'team2' | 'team3' | 'team4' | 'team5' | 'team6') {
    this.activeTeam = team;
    this.showMentor = false;
  }

  closeTeam() {
    this.activeTeam = null;
  }

  goHome() {
    this.activeTeam = null;
    this.showMentor = false;
    this.exitFullScreen();        // make sure we reset fullscreen
    this.router.navigate(['/']);
  }

  exploreMentor() {
    this.showMentor = !this.showMentor;
  }

  // 🔹 FULLSCREEN TOGGLE
  toggleFullScreen() {
    this.isFullScreen = !this.isFullScreen;

    if (this.isFullScreen) {
      document.body.classList.add('no-page-scroll');
    } else {
      document.body.classList.remove('no-page-scroll');
    }
  }

  // in case user navigates away while fullscreen
  private exitFullScreen() {
    this.isFullScreen = false;
    document.body.classList.remove('no-page-scroll');
  }

  ngOnDestroy() {
    this.exitFullScreen();
  }
}
