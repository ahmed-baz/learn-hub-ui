import {Injectable} from '@angular/core';
import Keycloak from 'keycloak-js';
import {UserProfile} from './user-profile';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  private _keycloak: Keycloak | undefined;
  private _userProfile: UserProfile | undefined;

  constructor() {
  }

  async init() {
    let authenticated = await this.keycloak?.init({
      onLoad: 'login-required'
    });

    if (authenticated) {
      this._userProfile = (await this.keycloak.loadUserProfile()) as UserProfile;
      this._userProfile.token = this.keycloak?.token;
      this._userProfile.username = this.keycloak?.tokenParsed?.sub;
    }
  }

  get keycloak() {
    if (!this._keycloak) {
      this._keycloak = new Keycloak({
        url: 'http://localhost:9696',
        realm: 'learning-hub-app',
        clientId: 'learning-hub'
      });
    }
    return this._keycloak;
  }


  get userProfile(): UserProfile | undefined {
    return this._userProfile;
  }

  login() {
    return this.keycloak.login();
  }

  logout() {
    return this.keycloak.logout();
  }
}
