import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { SharedService, User } from '../shared/shared.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @Input() currentUser: User | null = null;
  @Input() selectedMenu: string = '';
  @Output() logout = new EventEmitter<void>();
  
  currentTime: string = '';

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
  }
}