import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { pipe } from 'rxjs';
import { LoginService } from 'src/app/Shared/services/api/login-service/login.service';
import { AuthenticationsService } from 'src/app/Shared/services/authentications.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;

  email!: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _log: LoginService,
    private _auth: AuthenticationsService
  ) {}

  ngOnInit(): void {
    this.forms();
  }

  forms() {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.minLength(8),
        Validators.required,
      ]),
    });
  }
  forgotten() {}

  create() {
    this.router.navigate(['Createpassword']);
  }

  login() {
    type PostBody = {
      email: string
      password: string
      name: string
    

      
    }

    const postbody: PostBody = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
      name: this.loginForm.value.Lname,

    };

    this._log.login(postbody).subscribe((res: any) => {
      
      const { token} = res.data;
    const userObject = JSON.stringify(postbody);
    this._auth.saveToLocalStorage("token", token);
    this._auth.saveToLocalStorage("user", userObject)

    this.loginForm.reset()
    alert('Login Succesful');
    this.router.navigate(['dashboard'])
    }, (err: any) => {
      this.router.navigate(['']);
      console.log("you didn't do this well" )
    
    })

    // this._log.login(postbody).subscribe((res: any) => {
    //   const { token, email } = res;
    //   console.log(res)
    //   // if (token) {
    //   // this._auth.saveToLocalStorage('token', JSON.stringify(token));
    //   // this._auth.saveToLocalStorage('email', JSON.stringify(email));
    //   // this._auth.saveToLocalStorage('isLoggedIn', JSON.stringify(true));
    //   // alert('Login Succesful');
    //   // this.loginForm.reset();
    //   // this.router.navigate(['dashboard']);
    //   // console.log(this._auth.readFromLocalStorage('token'));
    //   // } else {
    //   //   alert("user not found")
    //   // }
    // });
  }

  // const postbody = ({
  //   email: this.loginForm.value.email,
  // });

  // this._log.login(postbody).subscribe(
  //   res =>{
  //     const {token,email} = res;

  //     if (token){

  //       this._auth.saveToLocalStorage('token', JSON.stringify(token));
  //       this._auth.saveToLocalStorage('email', JSON.stringify(email));
  //       this._auth.saveToLocalStorage('isLoggedIn', JSON.stringify(true));
  //       alert('Login Succesful');
  //       this.loginForm.reset();
  //       this.router.navigate(['dashboard']);
  //       console.log(this._auth.readFromLocalStorage('token'))

  //     }
  //     else{

  //       alert("user not found")

  //     }
  //   },
  //     (error) =>{
  //     console.log('This is not it',error)
  //     }
  // )
  //   }
}
