import {Component} from '@angular/core';
import {LoginRequest} from '../../services/models/login-request';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginRequest: LoginRequest = {email: '', password: ''};
  errorsMessages: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService,
  ) {
  }

  login() {
    this.errorsMessages = [];
    this.authService
      .login({body: this.loginRequest})
      .subscribe({
        next: (res) => {
          console.log("GET BODY")
          // save the token


          //this.router.navigate(['/courses']);
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
}
