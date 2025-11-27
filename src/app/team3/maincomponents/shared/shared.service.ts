import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  username: string;
  role: 'admin' | 'customer';
}

export interface Employee {
  name: string;
  age: number;
  role: string;
  department: string;
}

export interface MenuItem {
  label: string;
  route: string;
  roles: string[];
}

export interface CustomerProfile {
  id: number;
  name: string;
  email: string;
  phone: string;
  joinDate: string;
  totalOrders: number;
  status: string;
  loyaltyPoints: number;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private currentUser = new BehaviorSubject<User | null>(null);
  private selectedMenuItem = new BehaviorSubject<string>('');
  
  currentUser$: Observable<User | null> = this.currentUser.asObservable();
  selectedMenuItem$: Observable<string> = this.selectedMenuItem.asObservable();

  // 🔐 SPECIFIC VALID USERS
  private validUsers: User[] = [
    { username: 'admin', role: 'admin' },
    { username: 'narayan', role: 'admin' },
    { username: 'subham', role: 'customer' },
    { username: 'ashutosh', role: 'customer' },
    { username: 'narayan', role: 'customer' },
    { username: 'subham', role: 'admin' },
    { username: 'ashutosh', role: 'admin' }
  ];

  // 🔐 CUSTOMER PROFILES MAPPING
  private customerProfiles: { [key: string]: CustomerProfile } = {
    'narayan': {
      id: 1,
      name: 'Narayan Sahu',
      email: 'narayan@email.com',
      phone: '+91 98765 43210',
      joinDate: '2023-01-15',
      totalOrders: 5,
      status: 'Active',
      loyaltyPoints: 450,
      address: 'Bhubaneswar, Odisha'
    },
    'subham': {
      id: 2,
      name: 'Subham Sahoo',
      email: 'subham@email.com',
      phone: '+91 87654 32109',
      joinDate: '2023-03-20',
      totalOrders: 12,
      status: 'Active',
      loyaltyPoints: 1200,
      address: 'Cuttack, Odisha'
    },
    'ashutosh': {
      id: 3,
      name: 'Ashutosh Sahoo',
      email: 'ashutosh@email.com',
      phone: '+91 76543 21098',
      joinDate: '2023-02-10',
      totalOrders: 8,
      status: 'Active',
      loyaltyPoints: 800,
      address: 'Puri, Odisha'
    },
    'customer': {
      id: 4,
      name: 'Rohit Sharma',
      email: 'rohit@email.com',
      phone: '+91 65432 10987',
      joinDate: '2023-04-05',
      totalOrders: 15,
      status: 'Premium',
      loyaltyPoints: 1500,
      address: 'Mumbai, Maharashtra'
    },
    'user': {
      id: 5,
      name: 'Neha Kapoor',
      email: 'neha@email.com',
      phone: '+91 54321 09876',
      joinDate: '2023-05-12',
      totalOrders: 8,
      status: 'Active',
      loyaltyPoints: 600,
      address: 'Delhi, India'
    }
  };

  employees: Employee[] = [
    // Team 3 Members
    { name: 'Narayan Sahu', age: 24, role: 'Full Stack Developer', department: 'IT' },
    { name: 'Ashutosh Sahoo', age: 23, role: 'Backend Developer', department: 'IT' },
    { name: 'Subham Satyaprakash Sahoo', age: 18, role: 'Frontend Developer', department: 'IT' },
    
    { name: 'Priya Sharma', age: 28, role: 'Project Manager', department: 'Management' },
    { name: 'Rajesh Kumar', age: 32, role: 'Senior Developer', department: 'IT' },
    { name: 'Anjali Patel', age: 16, role: 'UI/UX Designer', department: 'Design' },
    { name: 'Amit Singh', age: 29, role: 'DevOps Engineer', department: 'Operations' },
    { name: 'Sneha Reddy', age: 15, role: 'QA Engineer', department: 'Testing' },
    { name: 'Vikram Malhotra', age: 35, role: 'Team Lead', department: 'IT' },
    { name: 'Pooja Gupta', age: 17, role: 'Business Analyst', department: 'Analytics' },
    { name: 'Rahul Verma', age: 31, role: 'Database Administrator', department: 'IT' },
    { name: 'Kavita Joshi', age: 24, role: 'Junior Developer', department: 'IT' },
    { name: 'Sanjay Mehta', age: 13, role: 'System Architect', department: 'IT' },
    
    { name: 'Divya Nair', age: 26, role: 'Content Strategist', department: 'Marketing' },
    { name: 'Manish Tiwari', age: 30, role: 'Network Engineer', department: 'IT' },
    { name: 'Lakshmi Iyer', age: 22, role: 'Digital Marketer', department: 'Marketing' },
    { name: 'Arjun Desai', age: 17, role: 'Security Analyst', department: 'IT' }
  ];

  menuItems: MenuItem[] = [
    { label: 'Dashboard', route: '/team3/project/app/admin/dashboard', roles: ['admin'] },
    { label: 'Dashboard', route: '/team3/project/app/customer/dashboard', roles: ['customer'] },
    { label: 'Employees', route: '/team3/project/app/admin/employees', roles: ['admin'] },
    { label: 'Reports', route: '/team3/project/app/admin/dashboard', roles: ['admin'] },
    { label: 'Profile', route: '/team3/project/app/customer/dashboard', roles: ['customer'] },
    { label: 'Settings', route: '/team3/project/app/admin/dashboard', roles: ['admin'] }
  ];

  customerData = [
    { id: 1, name: 'narayan sahu', email: 'narayan@email.com', orders: 5 },
    { id: 2, name: 'subham sahoo', email: 'subham@email.com', orders: 12 },
    { id: 3, name: 'ashutosh sahoo', email: 'ashutosh@email.com', orders: 8 },
    { id: 4, name: 'Rohit Sharma', email: 'rohit@email.com', orders: 15 },
    { id: 5, name: 'Neha Kapoor', email: 'neha@email.com', orders: 8 },
    { id: 6, name: 'Arun Kumar', email: 'arun@email.com', orders: 12 }
  ];

  // 🔐 AUTHENTICATION METHOD
  authenticateUser(username: string, selectedRole: 'admin' | 'customer'): { success: boolean; message?: string } {
    const user = this.validUsers.find(u => 
      u.username.toLowerCase() === username.toLowerCase() && 
      u.role === selectedRole
    );
    
    if (user) {
      return { success: true };
    } else {
      return { 
        success: false, 
        message: 'Invalid username or role combination' 
      };
    }
  }

  // 🔐 GET CUSTOMER PROFILE BY USERNAME
  getCustomerProfile(username: string): CustomerProfile {
    const profile = this.customerProfiles[username.toLowerCase()];
    
    if (profile) {
      return profile;
    } else {
      // Return default profile if not found
      return {
        id: Math.floor(Math.random() * 1000) + 1000,
        name: username.charAt(0).toUpperCase() + username.slice(1),
        email: `${username}@email.com`,
        phone: '+91 XXXXX XXXXX',
        joinDate: new Date().toLocaleDateString(),
        totalOrders: Math.floor(Math.random() * 20) + 1,
        status: 'Active',
        loyaltyPoints: Math.floor(Math.random() * 1000) + 100,
        address: 'India'
      };
    }
  }

  // GET CUSTOMER ORDERS
  getCustomerOrders(customerId: number, orderCount: number): any[] {
    const orders = [];
    const products = [
      'Premium Subscription',
      'Basic Plan', 
      'Add-on Service',
      'Product Package',
      'Service Bundle',
      'Annual Membership'
    ];

    for (let i = 0; i < Math.min(5, orderCount); i++) {
      orders.push({
        id: `ORD${customerId}${100 + i}`,
        date: new Date(Date.now() - (i + 1) * 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        product: products[i % products.length],
        amount: `$${(Math.floor(Math.random() * 100) + 20).toFixed(2)}`,
        status: 'Completed'
      });
    }

    return orders;
  }

  setCurrentUser(user: User) {
    this.currentUser.next(user);
  }

  getCurrentUser(): User | null {
    return this.currentUser.value;
  }

  setSelectedMenuItem(item: string) {
    this.selectedMenuItem.next(item);
  }

  getEmployees(): Employee[] {
    return this.employees;
  }

  getCustomerData() {
    return this.customerData;
  }

  getMenuItemsByRole(role: string): MenuItem[] {
    return this.menuItems.filter(item => item.roles.includes(role));
  }

  logout() {
    this.currentUser.next(null);
    this.selectedMenuItem.next('');
  }
}