import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactSectionRoutingModule } from './contact-section-routing.module';
import { ContactSectionComponent } from './contact-section.component';


@NgModule({
  declarations: [
    ContactSectionComponent
  ],
  imports: [
    CommonModule,
    ContactSectionRoutingModule
  ],

  exports:[
    ContactSectionComponent
  ]
})
export class ContactSectionModule { }
