import {Injectable} from '@angular/core';
import {LoginRequest} from '../models/login-request';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {LoginResponse} from '../models/login-response';
import {AppResponse} from '../models/app-response';
import {UserRegisterRequest} from '../models/user-register-request';
import {UserRegisterResponse} from '../models/user-register-response';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  public login(request: LoginRequest) {
    return this.httpClient
      .post<AppResponse<LoginResponse>>(`${environment.auth_api_url}/login`, request);
  }

  public register(request: UserRegisterRequest) {
    return this.httpClient
      .post<AppResponse<UserRegisterResponse>>(`${environment.auth_api_url}/register`, request);
  }

}
