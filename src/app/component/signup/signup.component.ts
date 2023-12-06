import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRegisterModel } from '../../shared/store/register/register.model';
import { Store } from '@ngrx/store';
import { registerUser } from '../../shared/store/register/register.action';
import { MasterService } from '../../shared/master.service';
import { response } from 'express';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  registerForm!: FormGroup;

  constructor(private service: MasterService, private builder: FormBuilder,private router:Router,private store: Store<{user:UserRegisterModel}>){}

  ngOnInit(): void {
    this.registerForm = this.builder.group({
  
      firstName:this.builder.control('',Validators.required),
      lastName:this.builder.control('',Validators.required),
      email:this.builder.control('',Validators.required),
      password:this.builder.control('',Validators.required)
    })
  }

 



  register(){

    this.service.registerUser(this.registerForm.value).subscribe(
      (response)=>{
        if(response!=null){
          this.router.navigateByUrl("/login")
        }
      }
    )
  
  }



}


