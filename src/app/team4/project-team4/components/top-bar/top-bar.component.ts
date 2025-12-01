// src/app/team4/project-team4/components/top-bar/top-bar.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  currentMenu = 'Dashboard';
  role: 'Admin' | 'Customer' | null = null;
  username: string | null = null;


  constructor(
    private sharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sharedService.selectedMenu$.subscribe(menu => {
      this.currentMenu = menu;
    });

    this.sharedService.role$.subscribe(role => {
      this.role = role;
    });

     this.sharedService.username$.subscribe(name => {     // <-- NEW
    this.username = name;
  });
  }

  logout() {
    // clear role info
    this.sharedService.setRole(null as any);
    this.router.navigate(['/team4/login']);
  }
}
