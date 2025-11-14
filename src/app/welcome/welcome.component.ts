import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  isDropdownOpen = false;

  constructor(private router: Router) {}

  toggleDropdown(event: Event) {
    event.preventDefault();        // stops routerLink from navigating on click
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  goToMember(member: string) {
    this.isDropdownOpen = false;   // close dropdown after click
    this.router.navigate([`/team3/${member}`]);
  }
}
