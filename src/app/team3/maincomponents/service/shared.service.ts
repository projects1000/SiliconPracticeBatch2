import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee, Department, EmployeeRole } from './employee.model';

export interface User {
  username: string;
  role: 'admin' | 'customer';
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

  // Local Storage Keys
  private readonly EMPLOYEES_KEY = 'team3_employees_data';
  private readonly CUSTOMERS_KEY = 'team3_customers_data';

  // Default data arrays
  private defaultEmployees: Employee[] = [
    // Team 3 Members
    { 
      id: 1, 
      name: 'Narayan Sahu', 
      age: 24, 
      role: 'Full Stack Developer', 
      department: 'IT', 
      email: 'narayan@company.com', 
      salary: 75000, 
      joinDate: '2023-01-15',
      status: 'Active',
      phone: '+91 9876543210',
      address: 'Bhubaneswar, Odisha'
    },
    { 
      id: 2, 
      name: 'Ashutosh Sahoo', 
      age: 23, 
      role: 'Backend Developer', 
      department: 'IT', 
      email: 'ashutosh@company.com', 
      salary: 70000, 
      joinDate: '2023-02-10',
      status: 'Active',
      phone: '+91 8765432109',
      address: 'Cuttack, Odisha'
    },
    { 
      id: 3, 
      name: 'Subham Satyaprakash Sahoo', 
      age: 18, 
      role: 'Frontend Developer', 
      department: 'IT', 
      email: 'subham@company.com', 
      salary: 65000, 
      joinDate: '2023-03-20',
      status: 'Active',
      phone: '+91 7654321098',
      address: 'Puri, Odisha'
    },
    
    { 
      id: 4, 
      name: 'Priya Sharma', 
      age: 28, 
      role: 'Project Manager', 
      department: 'Management', 
      email: 'priya@company.com', 
      salary: 85000, 
      joinDate: '2022-05-10',
      status: 'Active'
    },
    { 
      id: 5, 
      name: 'Rajesh Kumar', 
      age: 32, 
      role: 'Senior Developer', 
      department: 'IT', 
      email: 'rajesh@company.com', 
      salary: 90000, 
      joinDate: '2021-08-15',
      status: 'Active'
    },
    { 
      id: 6, 
      name: 'Anjali Patel', 
      age: 16, 
      role: 'UI/UX Designer', 
      department: 'Design', 
      email: 'anjali@company.com', 
      salary: 45000, 
      joinDate: '2023-06-01',
      status: 'Active'
    },
    { 
      id: 7, 
      name: 'Amit Singh', 
      age: 29, 
      role: 'DevOps Engineer', 
      department: 'Operations', 
      email: 'amit@company.com', 
      salary: 80000, 
      joinDate: '2022-11-20',
      status: 'Active'
    },
    { 
      id: 8, 
      name: 'Sneha Reddy', 
      age: 15, 
      role: 'QA Engineer', 
      department: 'Testing', 
      email: 'sneha@company.com', 
      salary: 40000, 
      joinDate: '2023-07-15',
      status: 'Active'
    },
    { 
      id: 9, 
      name: 'Vikram Malhotra', 
      age: 35, 
      role: 'Team Lead', 
      department: 'IT', 
      email: 'vikram@company.com', 
      salary: 95000, 
      joinDate: '2020-03-12',
      status: 'Active'
    },
    { 
      id: 10, 
      name: 'Pooja Gupta', 
      age: 17, 
      role: 'Business Analyst', 
      department: 'Analytics', 
      email: 'pooja@company.com', 
      salary: 50000, 
      joinDate: '2023-04-18',
      status: 'Active'
    }
  ];

  private defaultCustomerData = [
    { id: 1, name: 'narayan sahu', email: 'narayan@email.com', orders: 5 },
    { id: 2, name: 'subham sahoo', email: 'subham@email.com', orders: 12 },
    { id: 3, name: 'ashutosh sahoo', email: 'ashutosh@email.com', orders: 8 },
    { id: 4, name: 'Rohit Sharma', email: 'rohit@email.com', orders: 15 },
    { id: 5, name: 'Neha Kapoor', email: 'neha@email.com', orders: 8 },
    { id: 6, name: 'Arun Kumar', email: 'arun@email.com', orders: 12 }
  ];

  // Current data arrays (will be loaded from localStorage)
  employees: Employee[] = [];
  customerData: any[] = [];

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

  menuItems: MenuItem[] = [
  { 
    label: 'Dashboard', 
    route: '/team3/project/app/admin/dashboard', 
    roles: ['admin'] 
  },
  { 
    label: 'Dashboard', 
    route: '/team3/project/app/customer/dashboard', 
    roles: ['customer'] 
  },
  { 
    label: 'Employees', 
    route: '/team3/project/app/admin/employees', 
    roles: ['admin'] 
  },
  // 🚨 FIX THESE ROUTES:
  { 
    label: 'Reports', 
    route: '/team3/project/app/admin/reports',  // ✅ Changed from dashboard to reports
    roles: ['admin'] 
  },
  { 
    label: 'Profile', 
    route: '/team3/project/app/customer/dashboard',  // ✅ Fixed customer profile route
    roles: ['customer'] 
  },
  { 
    label: 'Settings', 
    route: '/team3/project/app/admin/settings',  // ✅ Changed from dashboard to settings
    roles: ['admin'] 
  }
];

  constructor() {
    this.initializeData();
  }

  private initializeData() {
    // Load employees from localStorage or use defaults
    const savedEmployees = localStorage.getItem(this.EMPLOYEES_KEY);
    if (savedEmployees) {
      this.employees = JSON.parse(savedEmployees);
    } else {
      this.employees = [...this.defaultEmployees];
      this.saveEmployeesToStorage();
    }

    // Load customers from localStorage or use defaults
    const savedCustomers = localStorage.getItem(this.CUSTOMERS_KEY);
    if (savedCustomers) {
      this.customerData = JSON.parse(savedCustomers);
    } else {
      this.customerData = [...this.defaultCustomerData];
      this.saveCustomersToStorage();
    }
  }

  private saveEmployeesToStorage() {
    localStorage.setItem(this.EMPLOYEES_KEY, JSON.stringify(this.employees));
  }

  private saveCustomersToStorage() {
    localStorage.setItem(this.CUSTOMERS_KEY, JSON.stringify(this.customerData));
  }

  // ========== CRUD OPERATIONS WITH LOCALSTORAGE ==========

  addEmployee(employeeData: Omit<Employee, 'id'>): Employee {
    const newEmployee: Employee = {
      ...employeeData,
      id: this.generateEmployeeId(),
      status: employeeData.status || 'Active'
    };
    this.employees.push(newEmployee);
    this.saveEmployeesToStorage(); // Save to localStorage
    return newEmployee;
  }

  updateEmployee(id: number, updatedEmployee: Partial<Employee>): Employee | null {
    const index = this.employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
      this.employees[index] = { ...this.employees[index], ...updatedEmployee };
      this.saveEmployeesToStorage(); // Save to localStorage
      return this.employees[index];
    }
    return null;
  }

  deleteEmployee(id: number): boolean {
    const index = this.employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
      this.employees.splice(index, 1);
      this.reassignSerialIds(); // Reassign IDs after deletion
      this.saveEmployeesToStorage();
      return true;
    }
    return false;
  }

  // Add this method to reassign serial IDs
  private reassignSerialIds(): void {
    // Sort employees by current ID first to maintain some order
    this.employees.sort((a, b) => a.id - b.id);
    
    // Reassign sequential IDs starting from 1
    this.employees.forEach((employee, index) => {
      employee.id = index + 1;
    });
  }

  getEmployeeById(id: number): Employee | null {
    return this.employees.find(emp => emp.id === id) || null;
  }

  getDepartments(): string[] {
    return Object.values(Department);
  }

  getRoles(): string[] {
    return Object.values(EmployeeRole);
  }

  private generateEmployeeId(): number {
    if (this.employees.length === 0) return 1;
    
    // Get the maximum ID from existing employees
    const maxId = Math.max(...this.employees.map(emp => emp.id));
    return maxId + 1;
  }

  // ========== DATA MANAGEMENT METHODS ==========

  resetToDefaultData(): void {
    // Clear localStorage
    localStorage.removeItem(this.EMPLOYEES_KEY);
    localStorage.removeItem(this.CUSTOMERS_KEY);
    
    // Reset to default data
    this.employees = [...this.defaultEmployees];
    this.customerData = [...this.defaultCustomerData];
    
    // Save defaults to localStorage
    this.saveEmployeesToStorage();
    this.saveCustomersToStorage();
  }

  importEmployeesData(importedData: Employee[]): boolean {
    try {
      // Validate imported data
      if (!Array.isArray(importedData)) {
        throw new Error('Invalid data format');
      }

      // Basic validation - check if each item has required fields
      const isValid = importedData.every(emp => 
        emp.id && emp.name && emp.age && emp.role && emp.department && emp.email
      );

      if (!isValid) {
        throw new Error('Invalid employee data structure');
      }

      this.employees = importedData;
      this.saveEmployeesToStorage();
      return true;
    } catch (error) {
      console.error('Data import failed:', error);
      return false;
    }
  }

  exportEmployeesData(): Employee[] {
    return [...this.employees];
  }

  // ========== EXISTING METHODS ==========

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
    // Return employees sorted alphabetically by name
    return this.employees.sort((a, b) => a.name.localeCompare(b.name));
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