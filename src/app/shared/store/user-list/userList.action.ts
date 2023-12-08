import { createAction, props } from "@ngrx/store";
import { UserRegisterModel } from "../../../model/register.model";
import { User } from "../../../model/userModel";

export const LOAD_USERS = '[users page] load users';
export const LOAD_USERS_SUCCESS = '[users page] load users success';


export const loadUsers = createAction(LOAD_USERS);
export const loadUsersSuccess = createAction(LOAD_USERS_SUCCESS,props<{users: User[]}>());

