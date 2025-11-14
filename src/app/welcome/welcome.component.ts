import { Component, HostListener } from '@angular/core';
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
    event.preventDefault();
    event.stopPropagation();
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    const dropdownContainer = target.closest('.dropdown-container');
  
    if (!dropdownContainer && this.isDropdownOpen) {
      this.isDropdownOpen = false;
    }
  }

  selectTeamMember(memberName: string) {
    console.log('Selected team member:', memberName);
    this.isDropdownOpen = false;
  }

  // ✅ FIX: Add this missing function
  openProfile(name: string) {
    this.router.navigate(['/team3/profile', name]);
    this.isDropdownOpen = false;
  }
}
