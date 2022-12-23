import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditpageComponent } from './editpage.component';

const routes: Routes = [{ path: '', component: EditpageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditpageRoutingModule { }
