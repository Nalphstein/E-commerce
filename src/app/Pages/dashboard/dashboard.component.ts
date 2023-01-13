import { Component, OnInit, TemplateRef } from '@angular/core';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditpageComponent } from './editpage/editpage.component';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { AddpageComponent } from './addpage/addpage.component';
// import { dashboardService } from './dashboard.service';
import { Router, NavigationEnd } from '@angular/router';
import { DashboardService } from 'src/app/Shared/services/api/dashboard-service/dashboard.service';

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
  allProducts:Array<any>=[];

  originalProducts: any[] = [

  ];

  public products = this.originalProducts

  // content = EditpageComponent;

  constructor(private modalService: BsModalService, private router: Router, private _dashboardServices: DashboardService) {}


  // formvalue = this.editsformvalue;

  ngOnInit(): void {
    this.getDashboardInfo();
    this.getProducts()
    
    
    this.UpdateProducts();
    // console.log(this.UpdateProducts)
  }

  currentList: string | null = localStorage.getItem('product');

  Add() {
    const initialState: ModalOptions = {
      initialState: {},
    };
    this.bsModalRef = this.modalService.show(AddpageComponent, initialState);
    this.bsModalRef.setClass('modal-dialog-centered');
    // this.bsModalRef.content.imageUrl = 'test';
    // this.modalRef.content.name = 'Muhammad';
  }

  getProducts(){
    this._dashboardServices.Displayproduct().subscribe((res:any)=>{
      this.allProducts = res.data.reverse();
      // this.products = [...this.originalProducts, ...this.allProducts].reverse();

      console.log(this.allProducts)
    })
  }

  UpdateProducts(): void {


    this._dashboardServices.Displayproduct().subscribe((_res) => {
    
    
      let currentList = localStorage.getItem('product');
      if (currentList) {
        let productList: Array<any> = JSON.parse(currentList);
        this.products = [...this.originalProducts, ...productList].reverse();

       
      } else {
        this.products = this.originalProducts;
      }
    
    
    },
      (_err: any) => {
        console.log();
        this.router.navigate(['dashboard']);
        console.log(_err);
      }
    );
    try{
      this.products = this.originalProducts;
    } catch{
      alert('error');
    }
 }

  Account() {
    this.router.navigate(['/account']);
  }




 
  Edit() {

    let currentList = localStorage.getItem('product');
    
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


// Deleteproduct(id: number) {
//   let products = JSON.parse(localStorage.getItem('product'));

// }

  

  Delete(template: TemplateRef<any>) {
    
    this.bsModalRef = this.modalService.show(template, {class: 'modal-sm'});
    // this.bsModalRef.setClass('modal-dialog-centered');
  }

  // deleteProduct(id: number) {
  //   let products = JSON.parse(localStorage.getItem('product'));
  //   products = products.filter((allProducts) => product.id !== id);
  //   localStorage.setItem('products', JSON.stringify(products));
  // }

  
  
  filterByTimeframe(value: string) {
    this.timeframe = value;
    this.getDashboardInfo();
  }

  getDashboardInfo() {
    const payload = {
      timeframe: this.timeframe,
    };
  }


  confirm(i:any) {



    // this._dashboardServices.Deleteproduct(i).subscribe((res:any)=>{
    //   console.log(res) 
    // })

      let results = this.allProducts.pop();
  
      console.log(results);
      localStorage.removeItem('product')
        
        
       
      
      localStorage.setItem('product', JSON.stringify(results));
      
      this.getProducts = results;
      this.bsModalRef?.hide();
      alert('Confirmed!');


    
  }
 
  decline(): void {

    alert('Declined!');
    // this.message = 'Declined!';
    this.bsModalRef?.hide();
  }
}
