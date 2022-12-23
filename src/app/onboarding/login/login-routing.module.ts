import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';



const routes: Routes = [{ path: '', component: LoginComponent,  },{ path: 'forgottenpassword', loadChildren: () => import('./forgottenpassword/forgottenpassword.module').
then(m => m.ForgottenpasswordModule) }, 
{ path: 'Createpasswords', loadChildren: () => import('./createpassword/createpassword.module').
then(m => m.CreatepasswordModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
