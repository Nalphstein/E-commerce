import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';



const routes: Routes = [{ path: '', component: LandingPageComponent },
{ path: 'contact-section', loadChildren: () => import('./contact-section/contact-section.module').
then(m => m.ContactSectionModule) }
 ];

@NgModule({
  imports: [AccordionModule.forRoot(),RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
