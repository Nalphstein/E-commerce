import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {MatSnackBarModule} from '@angular/material/snack-bar';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    ModalModule,
    NavbarComponent,
    FooterComponent

  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ]
})
export class SharedModule { }
