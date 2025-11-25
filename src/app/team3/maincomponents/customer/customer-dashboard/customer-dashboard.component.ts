import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  currentUser: any;
  customerProfile: any;
  customerOrders: any[] = [];

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.currentUser = this.sharedService.getCurrentUser();
    this.loadCustomerProfile();
    this.loadCustomerOrders();
  }

  loadCustomerProfile() {
    // Get individual customer profile based on logged-in username
    const allCustomers = this.sharedService.getCustomerData();
    this.customerProfile = allCustomers.find((customer: any) => 
      customer.name.toLowerCase().includes(this.currentUser.username.toLowerCase()) ||
      customer.email.toLowerCase().includes(this.currentUser.username.toLowerCase())
    );

    // If no specific customer found, create a default profile
    if (!this.customerProfile) {
      this.customerProfile = {
        id: Math.floor(Math.random() * 1000) + 1000,
        name: this.currentUser.username.charAt(0).toUpperCase() + this.currentUser.username.slice(1),
        email: `${this.currentUser.username}@email.com`,
        phone: '+1 (555) 123-4567',
        joinDate: new Date().toLocaleDateString(),
        totalOrders: Math.floor(Math.random() * 20) + 1,
        status: 'Active',
        loyaltyPoints: Math.floor(Math.random() * 1000) + 100
      };
    }
  }

  loadCustomerOrders() {
    // Generate sample orders for the customer
    this.customerOrders = [
      {
        id: `ORD${Math.floor(Math.random() * 10000)}`,
        date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        product: 'Premium Subscription',
        amount: '$99.99',
        status: 'Completed'
      },
      {
        id: `ORD${Math.floor(Math.random() * 10000)}`,
        date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        product: 'Basic Plan',
        amount: '$49.99',
        status: 'Completed'
      },
      {
        id: `ORD${Math.floor(Math.random() * 10000)}`,
        date: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        product: 'Add-on Service',
        amount: '$29.99',
        status: 'Completed'
      },
      {
        id: `ORD${Math.floor(Math.random() * 10000)}`,
        date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        product: 'Custom Package',
        amount: '$149.99',
        status: 'Completed'
      },
      {
        id: `ORD${Math.floor(Math.random() * 10000)}`,
        date: new Date().toLocaleDateString(),
        product: 'Monthly Renewal',
        amount: '$79.99',
        status: 'Pending'
      }
    ];
  }

  getStatusClass(status: string): string {
    return status.toLowerCase() === 'completed' ? 'status-completed' : 'status-pending';
  }
}