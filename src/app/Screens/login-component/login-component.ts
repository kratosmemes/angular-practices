import { Component } from '@angular/core';

@Component({
  selector: 'app-login-component',
  imports: [],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss'
})
export class LoginComponent {
  login(): void {
    // Simula un inicio de sesión exitoso
    localStorage.setItem('token', 'fake-jwt-token');
    localStorage.setItem('role', 'admin');
  }
}
