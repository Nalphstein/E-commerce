import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../landing-page.component';
import { ContactSectionComponent } from './contact-section.component';

const routes: Routes = [{ path: '', component: ContactSectionComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactSectionRoutingModule { }
