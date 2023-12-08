import { createReducer, on } from '@ngrx/store';
import { initialState } from './login.state';
import { loginSuccess, registerUserSuccess } from './login.action';

 const _loginReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => {
    console.log(action.user);
    return {
      ...state,
      user: action.user,
    };
  }),
  on(registerUserSuccess,(state,action)=> {
    return {
      ...state,
      user: action.registerInput,
    };
  })
);

export function LoginReducer(state: any, action: any) {
  return _loginReducer(state, action);
}
