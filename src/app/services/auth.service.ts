import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  loginWithCredentials(userName: string, password: string): boolean {
    if (userName === 'lqq') {
      return true;
    }
    return false;
  }
}
