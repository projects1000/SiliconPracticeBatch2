import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {
  role: 'Admin' | 'Customer' | null = null;
  menus: any[] = [];

  constructor(
    private sharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit() {
    this.sharedService.role$.subscribe((r) => {
      this.role = r;
      this.buildMenus();
    });
  }

  buildMenus() {
    if (this.role === 'Admin') {
      // 👇 only admin routes
      this.menus = [
        { label: 'Admin Dashboard', route: '/team4/admin-dashboard' },
        { label: 'Employees',       route: '/team4/employees' }
      ];
    } else {
      // customer routes
      this.menus = [
        { label: 'Home',    route: '/team4/customer-dashboard' },
        { label: 'Profile', route: '/team4/customer-dashboard' }
      ];
    }
  }

  onMenuClick(menu: any) {
    this.sharedService.setSelectedMenu(menu.label);
    this.router.navigateByUrl(menu.route);
  }
}
