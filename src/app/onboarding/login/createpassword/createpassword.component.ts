import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthenticationsService } from '../../../Shared/services/authentications.service';
import { LoginService } from 'src/app/Shared/services/api/login-service/login.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Email } from '@mui/icons-material';

@Component({
  selector: 'app-createpassword',
  templateUrl: './createpassword.component.html',
  styleUrls: ['./createpassword.component.scss'],
})
export class CreatepasswordComponent implements OnInit {
  SignForm: any;

  constructor(
    private router: Router,
    private _fb: FormBuilder,
    private _log: LoginService,
    private local: AuthenticationsService,
    private _http: HttpClient
  ) {}

  ngOnInit(): void {
    this.forms();
  }

  forms() {
    this.SignForm = this._fb.group(
      {
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('', [
          Validators.minLength(8),
          Validators.required,
        ]),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      {
        validator: this.MustMatch('password', 'confirmPassword'),
      }
    );
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['MustMatch']) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ MustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  signin() {
    type PostBody = {
      name: string;
      email: string;
      password: string;
      password_confirmation: string;
    };

    const postbody: PostBody = {
      name: this.SignForm.value.name,
      email: this.SignForm.value.email,
      password: this.SignForm.value.password,
      password_confirmation: this.SignForm.value.password,
    };

    this._log.sign(postbody).subscribe(
      (data) => {
        const userObject = JSON.stringify(postbody);
        localStorage.setItem('user', userObject);
        this.SignForm.reset();
        this.router.navigate(['dashboard']);
      },
      (err: any) => {
        this.router.navigate(['']);
        console.log('user already created', err);
      }
    );

    // this._log.sign(postbody).subscribe(
    //   (res) => {

    //     const email = postbody;

    //     this.local.saveToLocalStorage('isamin',JSON.stringify(email))
    //     alert('SIGNIN SUCCESFUL');
    //     this.router.navigate(['dashboard']);
    //     this.SignForm.reset()
    //     // this.local.saveToLocalStorage('email',token)
    //   }, (err) =>{
    //     console.log("unable to add user")
    //   }
    // )
  }

  // login() {
  //   type PostBody = {
  //     email: string
  //     password: string
  //   }

  //   const postbody: PostBody = {
  //     email: this.loginForm.value.email,
  //     password: this.loginForm.value.password,
  //   };
  //   // console.log(postbody)
  //   const userObject = JSON.stringify(postbody.email)
  //   localStorage.setItem("user", userObject)

  //   this.loginForm.reset()
  //   this.router.navigate(['dashboard'])

  // }
}
