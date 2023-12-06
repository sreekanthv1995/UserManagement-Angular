import { Injectable, OnInit } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MasterService } from "../../master.service";
import { loginStart, loginSuccess } from "./login.action";
import { exhaustMap, map } from "rxjs";

@Injectable()
export class LoginEffects implements OnInit{

    constructor(private action$: Actions,private service :MasterService){}
    
    ngOnInit(): void {
      console.log("effect called")
    }

   

    login$ = createEffect(() => {
        return this.action$.pipe(
          ofType(loginStart),
          exhaustMap((action) => {
            return this.service.login(action.email,action.password).pipe(
              map((data) => {
                return loginSuccess();
              })
            );
          })
        );
      });
    }