import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/Shared/shared.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';


import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ContactSectionModule } from './contact-section/contact-section.module';



@NgModule({
  declarations: [
    LandingPageComponent,

  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    CarouselModule,
    SharedModule,
    ContactSectionModule,
    AccordionModule.forRoot()

  ]
})
export class LandingPageModule { }
