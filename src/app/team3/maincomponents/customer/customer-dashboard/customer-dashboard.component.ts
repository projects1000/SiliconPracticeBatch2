import { Component, OnInit } from '@angular/core';
import { SharedService, CustomerProfile } from '../../service/shared.service';
import { NotificationService } from '../../service/notification.service'; // Add this

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  currentUser: any;
  customerProfile!: CustomerProfile;
  customerOrders: any[] = [];
  isEditingProfile = false;

  constructor(
    private sharedService: SharedService,
    private notificationService: NotificationService // Add this
  ) {}

  ngOnInit() {
    this.loadCustomerData();
  }

  loadCustomerData() {
    this.currentUser = this.sharedService.getCurrentUser();
    this.customerProfile = this.sharedService.getCustomerProfile(this.currentUser.username);
    this.customerOrders = this.sharedService.getCustomerOrders(
      this.customerProfile.id, 
      this.customerProfile.totalOrders
    );

    // Personalized welcome message
    let welcomeMessage = `Welcome to your dashboard, ${this.customerProfile.name}!`;
    
    // Special messages for team members
    if (this.currentUser.username.toLowerCase() === 'narayan') {
      welcomeMessage = 'Welcome Narayan! Your customer profile is active with premium features.';
    } else if (this.currentUser.username.toLowerCase() === 'subham') {
      welcomeMessage = 'Hi Subham! Great to see you back. Your orders are ready for review.';
    } else if (this.currentUser.username.toLowerCase() === 'ashutosh') {
      welcomeMessage = 'Hello Ashutosh! Your loyalty points are growing fast!';
    }
    
    this.notificationService.success(welcomeMessage, 'Welcome Back');
    
    // Show loyalty points notification if high
    if (this.customerProfile.loyaltyPoints > 1000) {
      this.notificationService.info(
        `You have ${this.customerProfile.loyaltyPoints} loyalty points! Redeem them for rewards.`,
        'Loyalty Reward'
      );
    }
  }

  startEditProfile() {
    this.isEditingProfile = true;
    this.notificationService.info('You can now edit your profile information', 'Edit Mode Enabled');
  }

  onProfileUpdated(updatedProfile: CustomerProfile) {
    this.customerProfile = updatedProfile;
    this.isEditingProfile = false;
    
    this.notificationService.success(
      'Your profile has been updated successfully!',
      'Profile Updated'
    );
  }

  onCancelEdit() {
    this.isEditingProfile = false;
    this.notificationService.warning('Profile editing cancelled', 'Edit Cancelled');
  }

  getStatusClass(status: string): string {
    return status.toLowerCase() === 'completed' ? 'status-completed' : 'status-pending';
  }

  // Test customer actions
  placeOrder() {
    this.notificationService.success('Order placed successfully! It will arrive in 2-3 days.', 'Order Confirmed');
  }

  contactSupport() {
    this.notificationService.info('Support team has been notified. They will contact you soon.', 'Support Requested');
  }
}