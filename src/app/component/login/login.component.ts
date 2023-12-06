import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UserLoginModel } from '../../shared/store/login/login.model';
import { loginStart } from '../../shared/store/login/login.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;

  constructor(private store: Store<{loginRequest: UserLoginModel}>){}


  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',Validators.required)
    })
      
  }

  login(){
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
   
    this.store.dispatch(loginStart({email,password}));
    console.log(email, password)
    console.log(this.store)


  }

}
