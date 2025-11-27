export interface MenuItem {
  label: string;
  route: string;
  roles: string[];
  icon?: string;
  isActive?: boolean;
  children?: MenuItem[];
}

export class MenuItemModel implements MenuItem {
  constructor(
    public label: string,
    public route: string,
    public roles: string[],
    public icon?: string,
    public isActive: boolean = false,
    public children: MenuItem[] = []
  ) {}

  // Helper method to check if user has access
  hasAccess(userRole: string): boolean {
    return this.roles.includes(userRole);
  }

  // Helper method to set active state
  setActive(isActive: boolean): void {
    this.isActive = isActive;
  }

  // Helper method to add child menu items
  addChild(child: MenuItem): void {
    this.children.push(child);
  }
}