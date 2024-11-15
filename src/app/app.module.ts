import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './pages/login/login.component';
import {FormsModule} from '@angular/forms';
import {RegistrationComponent} from './pages/registration/registration.component';
import {ActivateAccountComponent} from './pages/activate-account/activate-account.component';
import {CodeInputModule} from 'angular-code-input';

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
    HttpClientModule,
    FormsModule,
    CodeInputModule
  ],
  providers: [
    provideClientHydration(),
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
