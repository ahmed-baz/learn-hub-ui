import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {TokenService} from '../token/token.service';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';


@Injectable()
export class HttpJwtTokenInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.tokenService.getToken();
    if (token) {
      let httpRequest = request.clone(
        {
          headers: new HttpHeaders(
            {
              Authorization: `Bearer ${token}`
            }
          )
        }
      );
      return next.handle(httpRequest)
    }
    return next.handle(request)
  }
}
