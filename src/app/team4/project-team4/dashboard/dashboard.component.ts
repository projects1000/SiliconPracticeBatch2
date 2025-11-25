import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service'; // Note: Adjust path if needed

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stats: any = {};

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.stats = this.dataService.dashboardStats;
  }
}