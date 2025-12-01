import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService, User, MenuItem } from '../service/shared.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  currentUser: User | null = null;
  menuItems: MenuItem[] = [];
  selectedMenu: string = 'Dashboard';

  isSideMenuOpen: boolean = false;

  toggleSideMenu() {
    this.isSideMenuOpen = !this.isSideMenuOpen;
  }

  constructor(
    private sharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit() {
    // Load user and menu items
    this.sharedService.currentUser$.subscribe(user => {
      this.currentUser = user;
      if (user) {
        this.menuItems = this.sharedService.getMenuItemsByRole(user.role);

        if (this.menuItems.length > 0) {
          this.selectedMenu = this.menuItems[0].label;
        }
      }
    });

    // Update active menu on change
    this.sharedService.selectedMenuItem$.subscribe(item => {
      if (item) {
        this.selectedMenu = item;
      }
    });
  }

  // Triggered when mobile header menu selects an item
  onMenuItemSelectByTop(label: string) {
    const item = this.menuItems.find(i => i.label === label);
    if (item) this.onMenuItemSelect(item);
  }

  // Normal left sidebar click
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
