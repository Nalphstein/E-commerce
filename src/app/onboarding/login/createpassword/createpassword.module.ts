import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/Shared/shared.module';

import { CreatepasswordRoutingModule } from './createpassword-routing.module';
import { CreatepasswordComponent } from './createpassword.component';


@NgModule({
  declarations: [
    CreatepasswordComponent
  ],
  imports: [
    CommonModule,
    CreatepasswordRoutingModule,
    SharedModule
  ]
})
export class CreatepasswordModule { }
