import {Component} from '@angular/core';
import {UserRegisterRequest} from '../../services/models/user-register-request';
import {UserRegisterResponse} from '../../services/models/user-register-response';
import {Router} from '@angular/router';
import {AuthService} from '../../services/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  registerRequest: UserRegisterRequest = {email: '', firstName: '', lastName: '', password: ''};
  registerResponse: UserRegisterResponse = {id: 0, email: '', firstName: '', lastName: '', role: ''};
  errorsMessages: Array<string> = [];


  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
  }

  register() {
    this.errorsMessages = []
    this.authService
      .register(this.registerRequest)
      .subscribe(
        {
          next: (res) => {
            if (200 == res.statusCode) {
              // save the token
              this.registerResponse = res.data as UserRegisterResponse;
              this.router.navigate(['/activate-account', this.registerResponse.id]);
            } else {
              this.errorsMessages = this.getAllValidationErrors(res.validationErrors);
            }
          },
          error: (error) => {
            console.log(error)
            this.errorsMessages.push(error.error.message);
          }
        }
      );
  }

  login() {
    this.router.navigate(['/login']);
  }

  getAllValidationErrors(validationErrors: { [key: string]: string }): string[] {
    return Array.from(new Map(Object.entries(validationErrors)).values());
  }

}
