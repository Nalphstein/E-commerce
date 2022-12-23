import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatepasswordComponent } from './createpassword.component';

const routes: Routes = [{ path: '', component: CreatepasswordComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatepasswordRoutingModule { }
