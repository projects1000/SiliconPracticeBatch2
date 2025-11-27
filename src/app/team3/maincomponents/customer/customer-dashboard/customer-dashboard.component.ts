import { Component, OnInit } from '@angular/core';
import { SharedService, CustomerProfile } from '../../shared/shared.service';

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
  showEditSuccess = false;

  constructor(private sharedService: SharedService) {}

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
  }

  startEditProfile() {
    this.isEditingProfile = true;
  }

  // ✅ FIXED: Accept CustomerProfile parameter
  onProfileUpdated(updatedProfile: CustomerProfile) {
    this.customerProfile = updatedProfile;
    this.isEditingProfile = false;
    this.showEditSuccess = true;
    
    setTimeout(() => {
      this.showEditSuccess = false;
    }, 3000);
  }

  onCancelEdit() {
    this.isEditingProfile = false;
  }

  getStatusClass(status: string): string {
    return status.toLowerCase() === 'completed' ? 'status-completed' : 'status-pending';
  }
}