import {Component} from '@angular/core';
import {LoginRequest} from '../../services/models/login-request';
import {Router} from '@angular/router';
import {LoginResponse} from '../../services/models/login-response';
import {TokenService} from '../../services/token/token.service';
import {AuthService} from '../../services/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginRequest: LoginRequest = {email: '', password: ''};
  loginResponse: LoginResponse = {id: 0, email: '', role: '', accessToken: ''};
  errorsMessages: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthService,
    private tokenService: TokenService,
  ) {
  }

  login() {
    this.errorsMessages = [];
    this.authService
      .login(this.loginRequest)
      .subscribe({
        next: (res) => {
          if (200 == res.statusCode) {
            // save the token
            this.loginResponse = res.data as LoginResponse;
            let accessToken = this.loginResponse.accessToken as string;
            this.tokenService.setToken(accessToken);
            this.router.navigate(['/courses']);
          } else {
            this.errorsMessages = this.getAllValidationErrors(res.validationErrors)
          }
        },
        error: (error) => {
          console.log(error)
          this.errorsMessages.push(error.error.message);
        }
      })
  }

  register() {
    this.router.navigate(['/register']);
  }

  getAllValidationErrors(validationErrors: { [key: string]: string }): string[] {
    return Array.from(new Map(Object.entries(validationErrors)).values());
  }
}
