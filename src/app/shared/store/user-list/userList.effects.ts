import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MasterService } from '../../../service/master.service';
import { UserRegisterModel } from '../../../model/register.model';

@Injectable()
export class RegisterEffect {
  constructor(private action$: Actions, private service: MasterService) {}


}
