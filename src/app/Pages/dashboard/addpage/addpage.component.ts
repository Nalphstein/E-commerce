import { Component, OnInit, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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


  // imageUrl!:
  // selectedFile!: File;

  constructor(
    private modalService: BsModalService,
    private _fb: FormBuilder,
    private _dashboard: DashboardService,
    private router: Router,
    private http: HttpClient,
    // private uploader: FileUploader
  ) {}

  

  ngOnInit(): void {
    this.forms();
    
    // this.uploader.uploadAll();
    
  }
  
  url= '../../assets/images/undraw_add_file2_gvbb.svg';

  forms() {
    this.addform = this._fb.group({
      name: new FormControl('', [Validators.required]),
      image: new FormControl('',[Validators.required, ]),
      description: new FormControl('', [
        Validators.minLength(8),
        Validators.required,
      ]),
      price: new FormControl(''),
    });
  }
  
  onFileChange(event:any) {
    
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


    let newListItem = {
      // image: this.url,
      
      
      image: '../../../../assets/images/032122_ARTIPS_FLORET_007.jpg',
      name: this.addform.value.name,
      description: this.addform.value.description,
      price: '$' + this.addform.value.price,
    };

    type PostBody = {
      name: string;
      image: string;
      price: string;
      description: string;
    };
    const postbody: PostBody = {
      name: this.addform.value.name,
      image: this.addform.value.image,
      price: this.addform.value.price,
      description: this.addform.value.description,
    };

    // let formData = new FormData();
    // formData.append('image', this.addform.value.image);

    // this._dashboard.Createproduct(postbody).subscribe(
    //   (res) => {
        let currentList = localStorage.getItem('productList');
        if (currentList) {
          let productList: Array<any> = JSON.parse(currentList);
          productList.push(newListItem);
          localStorage.setItem('productList', JSON.stringify(productList));
          
          const userObject = JSON.stringify(postbody);
          localStorage.setItem('productlist', userObject);
        } else {
          localStorage.setItem('productList', JSON.stringify([newListItem]));
        }
        this.modalService.hide();
      // },
      // (err: any) => {
      //   console.log();
      //   this.router.navigate(['dashboard']);
      //   console.log(this.addform.value.image);
      //   console.log("Error Occured, can not add product");
      // }
    // );
  }
}
