import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

export interface NavItem {
  label: string;
  route: string;
  roles: string[];
}

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  @Input() menuItems: NavItem[] = [];
  @Output() menuItemSelected = new EventEmitter<string>();
  
  selectedItem: string = '';

  ngOnInit() {
    // Set default selected item
    if (this.menuItems.length > 0) {
      this.selectedItem = this.menuItems[0].label;
    }
  }

  onItemClick(item: NavItem) {
    this.selectedItem = item.label;
    this.menuItemSelected.emit(item.label);
  }

  getIconForLabel(label: string): string {
    const icons: { [key: string]: string } = {
      'Dashboard': '📊',
      'Employees': '👥',
      'Reports': '📈',
      'Profile': '👤',
      'Settings': '⚙️',
      'Customers': '👥',
      'Analytics': '📊',
      'Billing': '💳',
      'Support': '🛟'
    };
    return icons[label] || '📄';
  }
}