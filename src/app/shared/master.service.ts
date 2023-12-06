import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRegisterModel } from './store/register/register.model';
import { Observable } from 'rxjs';
import { UserLoginModel } from './store/login/login.model';
import { AuthResponseData } from '../model/authResposeData';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }


  registerUser(registerInput: UserRegisterModel):Observable<any> {
    return this.http.post('http://localhost:1000/api/v1/auth/signup',registerInput);
  }

  login(email:string,password:string):Observable<AuthResponseData>{
    console.log("service called")
    return this.http.post<AuthResponseData>('http://localhost:1000/api/v1/auth/signIn',{email,password})
  }
}
