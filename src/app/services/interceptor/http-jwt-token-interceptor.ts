import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {KeycloakService} from '../keycloak/keycloak.service';


@Injectable()
export class HttpJwtTokenInterceptor implements HttpInterceptor {

  constructor(
    private keycloakService: KeycloakService
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.keycloakService.keycloak.token;
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
