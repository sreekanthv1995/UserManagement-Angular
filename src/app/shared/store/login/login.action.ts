import { createAction, props } from "@ngrx/store";

export const LOGIN_START = '[Login] login start';
export const LOGIN_SUCCESS = '[Login] login success';
export const LOGIN_FAIL = '[Login] login fail';


export const loginStart  = createAction(LOGIN_START,props<{email: string,password:string}>());
export const loginSuccess  = createAction(LOGIN_SUCCESS);