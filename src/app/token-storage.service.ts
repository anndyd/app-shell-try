import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USER_KEY = 'AuthUser';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private auths: Array<string> = [];

  constructor() { }

  signOut() {
    window.sessionStorage.clear();
  }

  removeObject(key: string) {
    window.sessionStorage.removeItem(key);
  }

  saveItem(key: string, value: string) {
    window.sessionStorage.setItem(key, value);
  }

  getItem(key: string) {
    return window.sessionStorage.getItem(key);
  }

  saveObjectItem(key: string, value: any) {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  }

  getObjectItem(key: string) {
    return JSON.parse(window.sessionStorage.getItem(key));
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

  public getUsername(): string {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  public saveUser(user: any) {
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }

  public saveAuthorities(authorities: string[]) {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[] {
    this.auths = [];

    if (sessionStorage.getItem(TOKEN_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
        this.auths.push(authority.authority);
      });
    }

    return this.auths;
  }
}
