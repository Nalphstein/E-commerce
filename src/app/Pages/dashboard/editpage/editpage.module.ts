import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditpageRoutingModule } from './editpage-routing.module';
import { EditpageComponent } from './editpage.component';
import { SharedModule } from 'src/app/Shared/shared.module';


@NgModule({
  declarations: [
    EditpageComponent
  ],
  imports: [
    CommonModule,
    EditpageRoutingModule,
    SharedModule
  ],
  exports:[
    EditpageComponent
  ]
  
})
export class EditpageModule { }
