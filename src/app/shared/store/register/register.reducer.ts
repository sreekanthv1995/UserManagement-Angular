import { createReducer, on } from "@ngrx/store";
import { registerState } from "./register.state";
import { registerUser } from "./register.action";

const _registerUserReducer = createReducer(registerState,on(registerUser,(state,action)=> {
    const _user = {...action.registerInput}
    return {
        ...state,
        userList:[...state.userList,_user]
    }
}),
)



export function registerUserReducer(state:any,action:any){
    return _registerUserReducer(state,action);
}