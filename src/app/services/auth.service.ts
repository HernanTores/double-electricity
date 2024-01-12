import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
//Este servicio propociona funcionalidades de autenticación
//Autenticación simulada con un usuario de prueba
export class AuthService {
  mockEmail = 'admin@admin.com';
  mockPassword = 'admin';
  isAuthenticated = false;

  constructor() {}

  isAuth() {
    return this.isAuthenticated;
  }

  login(email: string, password: string) {
    this.isAuthenticated =
      email === this.mockEmail && password === this.mockPassword;
    return this.isAuthenticated;
  }
}
