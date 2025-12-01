import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  totalEmployees = 0;
  totalCustomers = 0;   // you can get dynamic customer data later
  minorEmployees = 0;
  adultEmployees = 0;

  constructor(private sharedService: SharedService) {
    this.sharedService.setSelectedMenu('Admin Dashboard');
  }

  ngOnInit(): void {
    this.sharedService.employees$.subscribe((employees) => {
      this.totalEmployees = employees.length;
      this.minorEmployees = employees.filter(e => e.age < 18).length;
      this.adultEmployees = employees.filter(e => e.age >= 18).length;
    });

    // Later you can replace static customers with real data
    this.totalCustomers = 6;
  }
}
