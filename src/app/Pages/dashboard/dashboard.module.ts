import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ModalModule } from 'ngx-bootstrap/modal';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AddpageComponent } from './addpage/addpage.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { AccountModule } from "./account/account.module";
import { EditpageModule } from './editpage/editpage.module';
import { FileUploadModule } from 'ng2-file-upload';



@NgModule({
    declarations: [DashboardComponent, AddpageComponent, ],
    imports: [CommonModule, DashboardRoutingModule, SharedModule, AccountModule, EditpageModule, FileUploadModule]
})
export class DashboardModule {}
