import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login-component',
  imports: [],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss'
})
export class LoginComponent {
  constructor(
    private readonly router: Router,
    private readonly loginService: LoginService
  ) {}

  login(): void {
    this.loginService.getEntitlements().subscribe({
        next: () => {
            let date = Date.now();
            localStorage.setItem('token', `fake-jwt-token-${date}`);
            localStorage.setItem('role', 'admin');

            if(localStorage.getItem('deniedRoute')) {
                const deniedRoute = localStorage.getItem('deniedRoute');
                localStorage.removeItem('deniedRoute');
                this.router.navigate([deniedRoute]);
            } else {
                this.router.navigate(['/']);
            }
        },
        error: (error) => {}
    });

  }
}
