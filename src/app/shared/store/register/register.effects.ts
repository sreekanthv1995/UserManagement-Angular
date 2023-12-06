import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MasterService } from '../../master.service';
import { registerUser, registerUserSuccess } from './register.action';
import { EMPTY, catchError, exhaustMap, map } from 'rxjs';
import { UserRegisterModel } from './register.model';

@Injectable()
export class RegisterEffect {
  constructor(private action$: Actions, private service: MasterService) {}

  _registerUser = createEffect(() =>
    this.action$.pipe(
      ofType(registerUser),
      exhaustMap((action) => {
        return this.service.registerUser(action.registerInput).pipe(
          map((data) => {
            return registerUserSuccess({
              registerInput: data as UserRegisterModel})
          })
        );
      })
    )
  );
}
