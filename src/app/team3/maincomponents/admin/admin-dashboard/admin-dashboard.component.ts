import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../service/shared.service';
import { NotificationService } from '../../service/notification.service'; // Add this

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  dashboardData: any;

  constructor(
    private sharedService: SharedService,
    private notificationService: NotificationService // Add this
  ) {}

  ngOnInit() {
    this.dashboardData = {
      totalEmployees: this.sharedService.getEmployees().length,
      totalCustomers: this.sharedService.getCustomerData().length,
      minorEmployees: this.sharedService.getEmployees().filter(emp => emp.age < 18).length,
      adultEmployees: this.sharedService.getEmployees().filter(emp => emp.age >= 18).length

    };

    // Show personalized admin dashboard notification
    const currentUser = this.sharedService.getCurrentUser();
    let adminMessage = `Admin dashboard loaded with ${this.dashboardData.totalEmployees} employees`;
    
    if (currentUser?.username.toLowerCase() === 'narayan') {
      adminMessage = `Team Lead Narayan, you have ${this.dashboardData.totalEmployees} team members to manage`;
    }
    
    this.notificationService.info(adminMessage, 'Admin Dashboard Ready');
  }

  // Test method for admin notifications
  testAdminNotifications() {
    this.notificationService.success('System backup completed successfully!', 'Backup Success');
    this.notificationService.warning(`${this.dashboardData.minorEmployees} employees are under 18`, 'Minor Alert');
    this.notificationService.info('New reports are available for review', 'Reports Ready');
  }

  // Quick actions with notifications
  generateReport() {
    this.notificationService.success('Monthly report generated successfully!', 'Report Generated');
  }

  systemCheck() {
    this.notificationService.info('System health check completed', 'System Status');
  }
}