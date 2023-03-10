import { Component, OnInit, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Location } from '@angular/common';
// import { FileUploader } from 'ng2-file-upload/file-upload/file-uploader.class';
import { DashboardService } from 'src/app/Shared/services/api/dashboard-service/dashboard.service';

@Component({
  selector: 'app-addpage',
  templateUrl: './addpage.component.html',
  styleUrls: ['./addpage.component.scss'],
})
export class AddpageComponent implements OnInit {
  // @Input() imageUrl?: string;
  name?: string;
  price?: string;
  description?: string;
  // imageUrl?: string;

  addform!: FormGroup;
  url: any = '';

  // imageUrl!:
  // selectedFile!: File;

  constructor(
    private modalService: BsModalService,
    private _fb: FormBuilder,
    private _dashboard: DashboardService,
    private router: Router,
    private location: Location,
    private http: HttpClient // private uploader: FileUploader
  ) {}

  ngOnInit(): void {
    this.forms();
    

    // this.uploader.uploadAll();
  }

  forms() {
    this.addform = this._fb.group({
      name: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      description: new FormControl('', [
        Validators.minLength(8),
        Validators.required,
      ]),
      price: new FormControl(''),
    });
  }

  onFileChange(event: any) {
    // const file = (event.target as HTMLInputElement).files![0];
    

    this.url = event.target.files[0];

    // const reader = new FileReader();
    // reader.onload = (event: any) => {
    //   this.url = event.target.result;
    // };
    // reader.readAsDataURL(this.url)
    // const reader = new FileReader();
    // reader.readAsDataURL(this.url);
    // reader.onload = () => {
      
    //   this.url = reader.result;
    //   this.addform.get('image')!.setValue(this.url);
    // };
    // console.log(this.url);
    // const image = new Blob([event.target.files[0]], { type: 'image/jpeg' });
    // this.addform.patchValue({
    //   image
    // });

    // this.addform.get('image')!.updateValueAndValidity();

    // const reader = new FileReader();

    // reader.onload = () => {
    //   this.url = reader.result as string;
    // }

    // reader.readAsDataURL(file);

    // if(event.target.files){
    //   let reader = new FileReader();
    //   reader.readAsDataURL(event.target.files[0]);

    //   const formData: FormData = new FormData();

    //   formData.append('image', event.target.files[0], event.target.files[0].name);

    // const image = new Blob(event.target.files[0], {type: "image"});

    // this.addform.value.image = image;

    // const buffer = reader.result;

    // reader.onload = (event:any) => {
    //   this.url = event.target.result;
    // }

    // this.addform.value.image = buffer;

    // reader.readAsText( event.target.files[0])
  }

  // if(event.target.files && event.target.files.length){
  //   const file = event.target.files[0];
  //   this.http.get('../../../../assets/images/032122_ARTIPS_FLORET_024.jpg',{responseType: 'blob'}).subscribe(data => {
  //     this.addform.patchValue({
  //       image: data
  //     });
  //   });

  // }

  // }

  save() {
    console.log(this.addform.value.image);

    let newListItem = {
      // image: this.addform.value.image,
      image: '../../../../assets/images/032122_ARTIPS_FLORET_056.jpg',
      name: this.addform.value.name,
      description: this.addform.value.description,
      price: '$' + this.addform.value.price,
    };




 

    let formdata= new FormData();
    formdata.append('name', `${this.addform.value.name}`);
    formdata.append('image', this.url);
    formdata.append('description', `${this.addform.value.description}`);
    formdata.append('price', `${this.addform.value.price}`);
    

    

    this._dashboard.Createproduct(formdata).subscribe(
      (res) => {
        let currentList = localStorage.getItem('product');
        if (currentList) {
          let productList: Array<any> = JSON.parse(currentList);
          productList.push(newListItem);
          localStorage.setItem('product', JSON.stringify(productList));

          const userObject = JSON.stringify(formdata);
          localStorage.setItem('product', userObject);
        } else {
          localStorage.setItem('product', JSON.stringify([newListItem]));
        }
      },
      (err: any) => {
        console.log(err);
        
      }
      );
      this.modalService.hide();
      this.addform.reset();
      this.router.navigate(['/dashboard']);
      // this.location.go(this.location.path());
      // location.reload();
  
  }
}
