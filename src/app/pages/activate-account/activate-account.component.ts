import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.css'
})
export class ActivateAccountComponent {

  message: string = '';
  isOk: boolean = true;
  submitted: boolean = false;

  constructor(
    private router: Router) {
  }

  onCodeCompleted($event: string) {

  }

  login() {
    this.router.navigate(['/login']);
  }
}
