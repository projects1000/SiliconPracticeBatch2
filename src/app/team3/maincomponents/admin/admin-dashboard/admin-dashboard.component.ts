import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  dashboardData: any;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.dashboardData = {
      totalEmployees: this.sharedService.getEmployees().length,
      totalCustomers: this.sharedService.getCustomerData().length,
      minorEmployees: this.sharedService.getEmployees().filter(emp => emp.age < 18).length
    };
  }
}