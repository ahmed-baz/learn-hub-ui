import {Component} from '@angular/core';
import {UserRegisterRequest} from '../../services/models/user-register-request';
import {UserRegisterResponse} from '../../services/models/user-register-response';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/services/authentication.service';
import {AppResponse} from '../../services/models/app-response';

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
    private authService: AuthenticationService,
  ) {
  }

  register() {
    this.errorsMessages = []
    this.authService
      .register({body: this.registerRequest})
      .subscribe(
        {
          next: (res) => {
            if (200 == res.statusCode) {
              // save the token
              this.registerResponse = res.data as UserRegisterResponse;
              this.router.navigate(['/activate-account']);
            } else {
              this.errorsMessages = this.getAllValidationErrors(res);
            }
          },
          error: (error) => {
            console.log(error)
            this.errorsMessages.push(error.error.message);
          }
        }
      );
  }

  getAllValidationErrors(response: AppResponse): string[] {
    return Array.from((this.convertToMap(response.validationErrors)).values());
  }

  convertToMap(obj: { [key: string]: string }): Map<string, string> {
    return new Map(Object.entries(obj));
  }

  login() {
    this.router.navigate(['/login']);
  }
}
