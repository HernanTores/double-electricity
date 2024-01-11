import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  mockEmail = 'admin@admin.com';
  mockPassword = 'admin';
  isAuthenticated = false;

  constructor() {}

  isAuth() {
    return this.isAuthenticated;
  }

  login(email: string, password: string) {
    if (email === this.mockEmail && password === this.mockPassword) {
      this.isAuthenticated = true;
      return true;
    } else {
      this.isAuthenticated = false;
      return false;
    }
  }
}
