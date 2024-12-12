import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClient, provideHttpClient} from '@angular/common/http';
import {LoginComponent} from './pages/login/login.component';
import {FormsModule} from '@angular/forms';
import {RegistrationComponent} from './pages/registration/registration.component';
import {ActivateAccountComponent} from './pages/activate-account/activate-account.component';
import {CodeInputModule} from 'angular-code-input';
import {HttpJwtTokenInterceptor} from './services/interceptor/http-jwt-token-interceptor';
import {KeycloakService} from './services/keycloak/keycloak.service';

export function kcFactory(keycloakService: KeycloakService) {
  return () => keycloakService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ActivateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CodeInputModule
  ],
  providers: [
    provideClientHydration(),
    HttpClient,
    provideHttpClient(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpJwtTokenInterceptor,
      multi: true
    }
    ,
    {
      provide: APP_INITIALIZER,
      deps: [KeycloakService],
      useFactory: kcFactory,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
