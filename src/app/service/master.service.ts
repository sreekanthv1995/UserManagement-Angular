import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRegisterModel } from '../model/register.model';
import { Observable } from 'rxjs';
import { AuthResponseData } from '../model/authResposeData';
import { User } from '../model/userModel';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  registerUser(registerInput: UserRegisterModel): Observable<any> {
    return this.http.post<AuthResponseData>(
      'http://localhost:1000/api/v1/auth/signup',
      registerInput
    );
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<AuthResponseData>(
      'http://localhost:1000/api/v1/auth/signIn',
      { email, password }
    );
  }

  // formateUser(data: AuthResponseData){
  //   const user = data.user.email
  //   return user;
  // }

  getErrorMessage(message: string) {
    switch (message) {
      case 'EMAIL_NOT_FOUND':
        return 'Invalid Email';
      case 'INVALID_PASSWORD':
        return 'Invalid Email';
      default:
        return 'Unknown Error Occurred Please try again';
    }
  }

  setTokenInLocalStorage(token: string) {
    localStorage.setItem('token', token);
  }

  getTokenFromLocalStorage() {
    const token = localStorage.getItem('token');
    return token;
  }

  setUserInLocalStorage (user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUserFromLocalStorage () {
    return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null
  }
}
