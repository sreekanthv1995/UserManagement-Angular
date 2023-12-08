import { SharedReducer } from "./shared.reducer";
import { SHARED_STATE_NAME } from "./shared.selector";
import { SharedState } from "./shared.state";
import { LoginReducer } from "./store/login/login.reducer";
import { LOGIN_STATE_NAME } from "./store/login/login.selector";
import { LoginState } from "./store/login/login.state";

export interface AppState {
    [SHARED_STATE_NAME]: SharedState;
    [LOGIN_STATE_NAME]: LoginState;
}

export const appReducer = {
    [SHARED_STATE_NAME]: SharedReducer,
    [LOGIN_STATE_NAME]: LoginReducer
}