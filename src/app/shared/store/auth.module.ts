import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { LOGIN_STATE_NAME } from "./login/login.selector";
import { loginReducer } from "./login/login.reducer";
import { EffectsModule } from "@ngrx/effects";
import { LoginEffects } from "./login/login.effects";

@NgModule({
    declarations:[],
    imports:[
        CommonModule,
        EffectsModule.forFeature([LoginEffects]),
        StoreModule.forFeature(LOGIN_STATE_NAME,loginReducer)
    ]
})
export class AuthModule {

}