import { Injectable, OnInit } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MasterService } from '../../../service/master.service';
import {
  autoLogin,
  loginStart,
  loginSuccess,
  registerUser,
  registerUserSuccess,
} from './login.action';
import { catchError, exhaustMap, map, mergeMap, of, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { setErrorMessage, setLoadingSpinner } from '../../shared.action';
import { Router } from '@angular/router';
import { User } from '../../../model/userModel';

@Injectable()
export class LoginEffects {
  constructor(
    private action$: Actions,
    private service: MasterService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  login$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.service.login(action.email, action.password).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            const { user, token } = data;
            console.log(user, 'effecttttttttttttttttttt');
            this.service.setTokenInLocalStorage(token);
            this.service.setUserInLocalStorage(user);
            return loginSuccess({user});
          }),
          catchError((errResp) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            const errorMessage = this.service.getErrorMessage(errResp);
            return of(setErrorMessage({ message: errorMessage }));
          })
        );
      })
    );
  });

  loginedirect$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(loginSuccess),
        tap((action) => {
          this.store.dispatch(setErrorMessage({ message: '' }));
          this.router.navigate(['home']);
        })
      );
    },
    { dispatch: false }
  );

  signupdirect$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(registerUserSuccess),
        tap((action) => {
          this.store.dispatch(setErrorMessage({ message: '' }));
          this.router.navigate(['']);
        })
      );
    },
    { dispatch: false }
  );

  signup$ = createEffect(() => {
    return this.action$.pipe(
      ofType(registerUser),
      exhaustMap((action) => {
        return this.service.registerUser(action.registerInput).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            // const { user } = data;
            return registerUserSuccess(data);
          }),
          catchError((errResp) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            const errorMessage = this.service.getErrorMessage(errResp);
            return of(setErrorMessage({ message: errorMessage }));
          })
        );
      })
    );
  });

  autoLogin$ = createEffect(() => {
    return this.action$.pipe(
      ofType(autoLogin),
      mergeMap((action) => {
        const user = this.service.getUserFromLocalStorage() as User;
        return of(loginSuccess({user}));
      })
    );
  });
}
