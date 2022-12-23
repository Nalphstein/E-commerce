import { Component, OnInit, TemplateRef } from '@angular/core';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditpageComponent } from './editpage/editpage.component';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { AddpageComponent } from './addpage/addpage.component';
// import { dashboardService } from './dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public menucollapse = true;

  user: any;
  dashboard: any;
  timeframe: string = 'all';

  bsModalRef?: BsModalRef;
  message?: string;

  originalProducts: any[] = [
    // {
    //   image: 'https://picsum.photos/200/300/',
    //   name: 'FLORETTE',
    //   Price: '$8.00',
    // },
    // {
    //   image: 'https://picsum.photos/200/300/',
    //   name: 'FLORETTE',
    //   Price: '$8.00',
    // },
    // {
    //   image: 'https://picsum.photos/200/300/',
    //   name: 'FLORETTE',
    //   Price: '$8.00',
    // },
    // {
    //   image: 'https://picsum.photos/200/300/',
    //   name: 'FLORETTE',
    //   Price: '$8.00',
    // },
  ];

  public products = this.originalProducts

  // content = EditpageComponent;

  constructor(private modalService: BsModalService, private router: Router) {}


  // formvalue = this.editsformvalue;

  ngOnInit(): void {
    this.getDashboardInfo();
    // let currentList = localStorage.getItem('productList');
    // if (currentList) {
    //   let productList: Array<any> = JSON.parse(currentList);
    //   this.products = [...this.originalProducts, ...productList].reverse();
    //   console.log(this.products);
    // }
    // this.confirm();
    // this.decline();
    this.UpdateProducts();
  }

  currentList: string | null = localStorage.getItem('productList');

  Add() {
    const initialState: ModalOptions = {
      initialState: {},
    };
    this.bsModalRef = this.modalService.show(AddpageComponent, initialState);
    this.bsModalRef.setClass('modal-dialog-centered');
    // this.bsModalRef.content.imageUrl = 'test';
    // this.modalRef.content.name = 'Muhammad';
  }

  UpdateProducts(): void {

  
  
    
    setInterval(() => {
      let currentList = localStorage.getItem('productList');
      if (currentList) {
        let productList: Array<any> = JSON.parse(currentList);
        this.products = [...this.originalProducts, ...productList].reverse();

       
      } else {
        this.products = this.originalProducts;
      }
    }, 2000); try{
      this.products = this.originalProducts;
    } catch{
      alert('error');
    }
 }

  Account() {
    this.router.navigate(['/account']);
  }




 
  Edit() {

    let currentList = localStorage.getItem('productList');
    
    const initialState: ModalOptions = {
      initialState: {
        // list: [
        //   {"tag":'Count',"value":this.products.}
        // ]
      
      },
    };
 
    this.bsModalRef = this.modalService.show(EditpageComponent, initialState);
    this.bsModalRef.content.productList = currentList;
// 
   
    
    this.bsModalRef.setClass('modal-dialog-centered');
  
    

  }





  
  filterByTimeframe(value: string) {
    this.timeframe = value;
    this.getDashboardInfo();
  }

  getDashboardInfo() {
    const payload = {
      timeframe: this.timeframe,
    };
  }

  Delete(template: TemplateRef<any>) {
    
    this.bsModalRef = this.modalService.show(template, {class: 'modal-sm'});
    // this.bsModalRef.setClass('modal-dialog-centered');

    
   
  }

  confirm(i: number) {

 
    
     
    let results = this.products.splice(0,i);

    console.log(results);
    localStorage.removeItem('productList')
      
      
     
    
    localStorage.setItem('productList', JSON.stringify(results));
    
    // this.UpdateProducts = results;
    this.bsModalRef?.hide();
    alert('Confirmed!');
  }
 
  decline(): void {

    alert('Declined!');
    // this.message = 'Declined!';
    this.bsModalRef?.hide();
  }
}
