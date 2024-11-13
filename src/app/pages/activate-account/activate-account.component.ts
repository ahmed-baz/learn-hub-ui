import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ActivateAccountRequest} from '../../services/models/activate-account-request';
import {AuthService} from '../../services/services/auth.service';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.css'
})
export class ActivateAccountComponent {

  id: number = 0;
  request: ActivateAccountRequest = {};
  message: string = '';
  isOk: boolean = true;
  submitted: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  onCodeCompleted(code: string) {
    this.activateAccount(code)
  }

  activateAccount(code: string) {
    this.request.id = this.id;
    this.request.code = code;
    this.authService
      .activateAccount(this.request)
      .subscribe({
        next: (res) => {
          if (200 == res.statusCode) {
            this.message = "Your account has been successfully activated, Now you can login.";
            this.submitted = true
            this.isOk = true
          } else {
            this.message = "The Activation Code is invalid, try again.";
            this.submitted = true
            this.isOk = false
          }
        },
        error: (error) => {
          this.message = "The Activation Code is invalid, try again.";
          this.submitted = true
          this.isOk = false
        }
      })
  }

  login() {
    this.router.navigate(['/login']);
  }
}
