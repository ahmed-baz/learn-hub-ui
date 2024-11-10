import {Component} from '@angular/core';
import {LoginRequest} from '../../services/models/login-request';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/services/authentication.service';
import {LoginResponse} from '../../services/models/login-response';
import {TokenService} from '../../services/token/token.service';
import {AppResponse} from '../../services/models/app-response';

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
    private authService: AuthenticationService,
    private tokenService: TokenService,
  ) {
  }

  login() {
    this.errorsMessages = [];
    this.authService
      .login({body: this.loginRequest})
      .subscribe({
        next: (res) => {
          if (200 == res.statusCode) {
            // save the token
            this.loginResponse = res.data as LoginResponse;
            this.tokenService.setToken(this.loginResponse.accessToken);
            this.router.navigate(['/courses']);
          } else {
            this.errorsMessages = this.getAllValidationErrors(res);
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

  getAllValidationErrors(response: AppResponse): string[] {
    return Array.from((this.convertToMap(response.validationErrors)).values());
  }

  convertToMap(obj: { [key: string]: string }): Map<string, string> {
    return new Map(Object.entries(obj));
  }

}
