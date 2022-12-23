import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { DashboardComponent } from '../dashboard.component';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { DashboardService } from 'src/app/Shared/services/api/dashboard-service/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.component.html',
  styleUrls: ['./editpage.component.scss'],
})


export class EditpageComponent implements OnInit {

  rawUser = localStorage.getItem('productlist');
  user = this.rawUser ? JSON.parse(this.rawUser) : '';


  name?: string;
  price?: string;
  description?: string;
  // imageUrl?: string;

  editform!: FormGroup;

  constructor(private modalService: BsModalService, private _fb: FormBuilder, private bsmodalref: BsModalRef, private _dashboard: DashboardService, private _router: Router) {}

  ngOnInit(): void {
    this.forms()
    console.log(this.user.name)
    
    const newobj ={
      name: this.user.name,
      price: this.user.price,
      description: this.user.description
    }

// console.log(this.editform.patchValue(newobj))

    

    
  } 
  forms() {
    this.editform = this._fb.group({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [
        Validators.minLength(8),
        Validators.required,
      ]),
      price: new FormControl('', )   });
  }



  save() {
    let newListItem = {
      image: 'https://picsum.photos/200/300/',
      name: this.editform.value.name,
      description: this.editform.value.description,
      price: '$' + this.editform.value.price,
    };



    type PostBody = {
      name: string;
      image: string;
      price: string;
      description: string;
    };
    const postbody: PostBody = {
      name: this.editform.value.name,
      image: this.editform.value.image,
      price: this.editform.value.price,
      description: this.editform.value.description,
    };


    //  this._dashboard.Editproduct(postbody).subscribe(
    //     (res) => {
    let currentList = localStorage.getItem('productlist');
    if (currentList) {
      let productList: Array<any> = JSON.parse(currentList);
       productList.push(newListItem);
      localStorage.setItem('productList', JSON.stringify([newListItem]));

      
    } else {
      localStorage.setItem('productList', JSON.stringify([newListItem]));
    }
    this.modalService.hide()
  // }, 
  // (err: any) => {
  //   console.log();
  //   this._router.navigate(['dashboard']);
  //   console.log("Error Occured, can not edit product");
  // });
}

   dismiss(){
    this.bsmodalref?.hide()
  }



  // imageUrl?: string;

  // editform!: FormGroup;



  // constructor(private modalService: BsModalService, private bsModalRef: BsModalRef, private _fb:FormBuilder) {

  // }
  
  // ngOnInit(): void {
  //   this.forms();
  // //  console.log({user:this.user});
  //   // this.edits();
    
  

    
  // }
  
  
  
  // forms() {
  //   this.editform = this._fb.group({
  //     name: new FormControl('', [Validators.required]),
  //     price: new FormControl('', [
  //       Validators.minLength(8),
  //       Validators.required,
  //     ]),
  //   });
  // }
  

      
  // dismiss(){
  //   this.bsModalRef?.hide();
   
    
  // }
  // save() {
  //   let newListItem = {
  //     image: 'https://picsum.photos/200/300/',
  //     name: this.editform.value.name,
  //     price: '$' + this.editform.value.price,
  //   };

  //   let currentList = localStorage.getItem('productList');
  //   if (currentList) {
  //     let productList: Array<any> = JSON.parse(currentList);
  //     productList.push(newListItem);
  //     localStorage.setItem('productList', JSON.stringify(productList));
  //   } else {
  //     localStorage.setItem('productList', JSON.stringify([newListItem]));
  //   }
  //   this.modalService.hide()
  // }

}
