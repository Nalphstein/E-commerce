import { Component, OnInit, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BsModalService } from 'ngx-bootstrap/modal';
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
    

    // let myHeaders = new HttpHeaders();
    // let token = localStorage.getItem('token');
    // myHeaders.append('Authorization', `Bearer ${token}`);
    // myHeaders.append('Token', `${token}`);
    // myHeaders.append('Content-Type', 'multipart/form-data');

    // return this.http
    //   .post(
        
    //     'https://ecom.hoolioapps.com/api/products',
    //     formdata,
    //     { headers: myHeaders }
    //   )
    //   .subscribe(
    //     (res) => {
    //       console.log(res);
    //       console.log(formdata.getAll('price'));
    //     },
    //     (err) => {
    //       console.log(err);
    //       console.log(formdata.getAll('image'));
    //       console.log(this.addform.value.image)
    //     }
    //   );

    // const postbody: PostBody = {
    //   name: this.addform.value.name,
    //   image: this.addform.value.image,
    //   price: this.addform.value.price,
    //   description: this.addform.value.description,
    // };

    // let formData = new FormData();
    // formData.append('image', this.addform.value.image);

    this._dashboard.Createproduct(formdata).subscribe(
      (res) => {
        let currentList = localStorage.getItem('productList');
        if (currentList) {
          let productList: Array<any> = JSON.parse(currentList);
          productList.push(newListItem);
          localStorage.setItem('productList', JSON.stringify(productList));

          const userObject = JSON.stringify(formdata);
          localStorage.setItem('productlist', userObject);
        } else {
          localStorage.setItem('productList', JSON.stringify([newListItem]));
        }
        this.modalService.hide();
      },
      (err: any) => {
        console.log(err);

      }
    );
  }
}
