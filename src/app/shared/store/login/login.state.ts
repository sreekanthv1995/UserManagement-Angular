import { User } from "../../../model/userModel";

export interface LoginState {
    user: User | null;

};

// console.log(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) as User: null,);

export const initialState:LoginState = {
    // user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) as User: null,
    user: null,
};