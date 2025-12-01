// src/app/team4/project-team4/components/customer-dashboard/customer-dashboard.component.ts
import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent {
  customers = [
    { id: 1, name: 'Customer A', plan: 'Gold', balance: 1200 },
    { id: 2, name: 'Customer B', plan: 'Silver', balance: 800 },
    { id: 3, name: 'Customer C', plan: 'Bronze', balance: 300 }
  ];

  constructor(private sharedService: SharedService) {
    this.sharedService.setSelectedMenu('Customer Dashboard');
  }
}
