export interface User {
  id?: number;
  username: string;
  role: 'admin' | 'customer';
  email?: string;
  firstName?: string;
  lastName?: string;
  loginTime?: Date;
  lastActive?: Date;
  permissions?: string[];
  profileImage?: string;
}

export class UserModel implements User {
  public loginTime: Date;
  public lastActive: Date;
  public permissions: string[];

  constructor(
    public username: string,
    public role: 'admin' | 'customer',
    public id?: number,
    public email?: string,
    public firstName?: string,
    public lastName?: string,
    public profileImage?: string
  ) {
    this.loginTime = new Date();
    this.lastActive = new Date();
    this.permissions = this.setPermissionsBasedOnRole();
  }

  // Get full name if first and last name are available
  get fullName(): string {
    if (this.firstName && this.lastName) {
      return `${this.firstName} ${this.lastName}`;
    }
    return this.username;
  }

  // Get display name (prefers full name, falls back to username)
  get displayName(): string {
    return this.fullName !== this.username ? this.fullName : this.username;
  }

  // Get initials for avatar
  get initials(): string {
    if (this.firstName && this.lastName) {
      return `${this.firstName.charAt(0)}${this.lastName.charAt(0)}`.toUpperCase();
    }
    return this.username.charAt(0).toUpperCase();
  }

  // Check if user is admin
  get isAdmin(): boolean {
    return this.role === 'admin';
  }

  // Check if user is customer
  get isCustomer(): boolean {
    return this.role === 'customer';
  }

  // Set permissions based on role
  private setPermissionsBasedOnRole(): string[] {
    const basePermissions = ['view_dashboard', 'view_profile'];
    
    if (this.isAdmin) {
      return [
        ...basePermissions,
        'manage_users',
        'view_reports',
        'manage_employees',
        'system_settings',
        'view_analytics'
      ];
    }
    
    if (this.isCustomer) {
      return [
        ...basePermissions,
        'view_orders',
        'update_profile',
        'view_billing'
      ];
    }
    
    return basePermissions;
  }

  // Check if user has specific permission
  hasPermission(permission: string): boolean {
    return this.permissions.includes(permission);
  }

  // Check if user has any of the given permissions
  hasAnyPermission(permissions: string[]): boolean {
    return permissions.some(permission => this.hasPermission(permission));
  }

  // Check if user has all of the given permissions
  hasAllPermissions(permissions: string[]): boolean {
    return permissions.every(permission => this.hasPermission(permission));
  }

  // Update last active timestamp
  updateLastActive(): void {
    this.lastActive = new Date();
  }

  // Get session duration in minutes
  get sessionDuration(): number {
    return Math.floor((new Date().getTime() - this.loginTime.getTime()) / (1000 * 60));
  }

  // Create user from JSON data
  static fromJSON(json: any): UserModel {
    return new UserModel(
      json.username,
      json.role,
      json.id,
      json.email,
      json.firstName,
      json.lastName,
      json.profileImage
    );
  }

  // Convert user to JSON
  toJSON(): any {
    return {
      id: this.id,
      username: this.username,
      role: this.role,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      profileImage: this.profileImage,
      loginTime: this.loginTime.toISOString(),
      lastActive: this.lastActive.toISOString(),
      permissions: this.permissions
    };
  }

  // Clone user instance
  clone(): UserModel {
    return UserModel.fromJSON(this.toJSON());
  }

  // Validate user data
  validate(): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!this.username || this.username.trim().length === 0) {
      errors.push('Username is required');
    }

    if (this.username && this.username.length < 3) {
      errors.push('Username must be at least 3 characters long');
    }

    if (!this.role || !['admin', 'customer'].includes(this.role)) {
      errors.push('Role must be either admin or customer');
    }

    if (this.email && !this.isValidEmail(this.email)) {
      errors.push('Invalid email format');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  // Email validation helper
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

// Factory functions for creating users
export class UserFactory {
  static createAdmin(username: string, email?: string, firstName?: string, lastName?: string): UserModel {
    return new UserModel(username, 'admin', undefined, email, firstName, lastName);
  }

  static createCustomer(username: string, email?: string, firstName?: string, lastName?: string): UserModel {
    return new UserModel(username, 'customer', undefined, email, firstName, lastName);
  }

  static createGuest(): UserModel {
    return new UserModel('guest', 'customer');
  }
}

// User roles constants
export const USER_ROLES = {
  ADMIN: 'admin' as const,
  CUSTOMER: 'customer' as const
};

// User permissions constants
export const USER_PERMISSIONS = {
  // Admin permissions
  MANAGE_USERS: 'manage_users',
  VIEW_REPORTS: 'view_reports',
  MANAGE_EMPLOYEES: 'manage_employees',
  SYSTEM_SETTINGS: 'system_settings',
  VIEW_ANALYTICS: 'view_analytics',
  
  // Customer permissions
  VIEW_ORDERS: 'view_orders',
  UPDATE_PROFILE: 'update_profile',
  VIEW_BILLING: 'view_billing',
  
  // Common permissions
  VIEW_DASHBOARD: 'view_dashboard',
  VIEW_PROFILE: 'view_profile'
};