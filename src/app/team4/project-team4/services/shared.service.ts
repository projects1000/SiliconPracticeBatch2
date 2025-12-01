import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  /* ---------------------- ROLE ---------------------- */
  private roleSubject = new BehaviorSubject<'Admin' | 'Customer' | null>(null);
  role$ = this.roleSubject.asObservable();

  setRole(role: 'Admin' | 'Customer' | null) {
    this.roleSubject.next(role);
  }

  getRole() {
    return this.roleSubject.value;
  }

  /* ---------------------- MENU ---------------------- */
  private menuSubject = new BehaviorSubject<string>('Dashboard');
  selectedMenu$ = this.menuSubject.asObservable();

  setSelectedMenu(menu: string) {
    this.menuSubject.next(menu);
  }

  /* ---------------------- USERNAME ---------------------- */
  private usernameSubject = new BehaviorSubject<string | null>(null);
  username$ = this.usernameSubject.asObservable();

  setUsername(name: string) {
    this.usernameSubject.next(name);
  }

  getUsername() {
    return this.usernameSubject.value;
  }

  /* ---------------------- EMPLOYEES (DYNAMIC) ---------------------- */
  private employeesSubject = new BehaviorSubject<any[]>([]);
  employees$ = this.employeesSubject.asObservable();

  setEmployees(list: any[]) {
    this.employeesSubject.next(list);
  }

  getEmployees() {
    return this.employeesSubject.value;
  }


}
