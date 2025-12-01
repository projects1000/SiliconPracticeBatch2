import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

export interface User {
  username: string;
  role: string;
}

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  @Input() currentUser: User | null = null;
  @Input() selectedMenu: string = '';
  @Input() menuItems: any[] = [];     // <-- FIXED: ADDED
  @Output() menuSelect = new EventEmitter<string>(); // <-- FIXED: ADDED

  @Output() logout = new EventEmitter<void>();

  currentTime: string = '';
  isMenuOpen: boolean = false;

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 60000);
  }

  updateTime() {
    this.currentTime = new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  }

  onLogout() {
    this.logout.emit();
    this.isMenuOpen = false;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
   onResize() {
  if (window.innerWidth >= 769) {
    this.isMenuOpen = false;
  }
}

}


