export interface Employee {
  id: number;
  name: string;
  age: number;
  role: string;
  department: string;
  email: string;
  salary?: number;
  joinDate?: string;
  status?: 'Active' | 'Inactive' | 'On Leave';
  phone?: string;
  address?: string;
}

export enum Department {
  IT = 'IT',
  HR = 'HR',
  FINANCE = 'Finance',
  MARKETING = 'Marketing',
  SALES = 'Sales',
  OPERATIONS = 'Operations',
  MANAGEMENT = 'Management',
  DESIGN = 'Design',
  TESTING = 'Testing',
  ANALYTICS = 'Analytics'
}

export enum EmployeeRole {
  DEVELOPER = 'Developer',
  MANAGER = 'Manager',
  DESIGNER = 'Designer',
  ANALYST = 'Analyst',
  TESTER = 'Tester',
  ADMIN = 'Administrator',
  LEAD = 'Team Lead',
  INTERN = 'Intern'
}

export interface EmployeeFormData {
  name: string;
  age: number;
  role: string;
  department: string;
  email: string;
  salary?: number;
  joinDate?: string;
  phone?: string;
  address?: string;
}