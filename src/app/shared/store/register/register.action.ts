import { createAction, props } from "@ngrx/store";
import { UserRegisterModel } from "./register.model";

export const REGISTER_USER = '[register page] register user';
export const REGISTER_USER_SUCCESS = '[register page] register user success';


export const registerUser = createAction(REGISTER_USER,props<{registerInput:UserRegisterModel}>());
export const registerUserSuccess = createAction(REGISTER_USER_SUCCESS,props<{registerInput:UserRegisterModel}>());

