import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/Shared/guards/auth.guard';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard]},
  {
    path: 'edit',
    loadChildren: () =>
      import('./editpage/editpage.module').then((m) => m.EditpageModule),
  },
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
