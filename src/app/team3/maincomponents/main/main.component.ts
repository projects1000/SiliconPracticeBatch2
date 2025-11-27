import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService, User, MenuItem } from '../service/shared.service';
// Remove this line: import { NotificationComponent } from './notification/notification.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  currentUser: User | null = null;
  menuItems: MenuItem[] = [];
  selectedMenu: string = 'Dashboard';

  constructor(
    private sharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit() {
    this.sharedService.currentUser$.subscribe(user => {
      this.currentUser = user;
      if (user) {
        this.menuItems = this.sharedService.getMenuItemsByRole(user.role);
        if (this.menuItems.length > 0) {
          this.selectedMenu = this.menuItems[0].label;
        }
      }
    });

    this.sharedService.selectedMenuItem$.subscribe(item => {
      if (item) {
        this.selectedMenu = item;
      }
    });
  }

  getIconForLabel(label: string): string {
    const icons: { [key: string]: string } = {
      'Dashboard': '📊',
      'Employees': '👥',
      'Reports': '📈',
      'Profile': '👤',
      'Settings': '⚙️'
    };
    return icons[label] || '📄';
  }

  onMenuItemSelect(item: MenuItem) {
    this.sharedService.setSelectedMenuItem(item.label);
    this.selectedMenu = item.label;
    this.router.navigate([item.route]);
  }

  logout() {
    this.sharedService.logout();
    this.router.navigate(['/team3/project/login']);
  }
}