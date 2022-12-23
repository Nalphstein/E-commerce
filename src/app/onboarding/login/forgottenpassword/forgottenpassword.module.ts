import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/Shared/shared.module';

import { ForgottenpasswordRoutingModule } from './forgottenpassword-routing.module';
import { ForgottenpasswordComponent } from './forgottenpassword.component';


@NgModule({
  declarations: [
    ForgottenpasswordComponent
  ],
  imports: [
    CommonModule,
    ForgottenpasswordRoutingModule,
    SharedModule
  ]
})
export class ForgottenpasswordModule { }
