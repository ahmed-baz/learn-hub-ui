import {Component, OnInit} from '@angular/core';
import {LoginRequest} from '../../services/models/login-request';
import {LoginResponse} from '../../services/models/login-response';
import {KeycloakService} from '../../services/keycloak/keycloak.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginRequest: LoginRequest = {email: '', password: ''};
  loginResponse: LoginResponse = {id: 0, email: '', role: '', accessToken: ''};
  errorsMessages: Array<string> = [];

  constructor(
    //private router: Router,
    //private authService: AuthService,
    //private tokenService: TokenService,
    private keycloakService: KeycloakService,
  ) {
  }

  async ngOnInit(): Promise<void> {
    await this.keycloakService.init()
    await this.keycloakService.login()
  }

  /*
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
   */
}
