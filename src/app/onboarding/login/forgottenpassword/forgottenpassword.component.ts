import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Shared/services/api/login-service/login.service';
import { AuthenticationsService } from 'src/app/Shared/services/authentications.service';

@Component({
  selector: 'app-forgottenpassword',
  templateUrl: './forgottenpassword.component.html',
  styleUrls: ['./forgottenpassword.component.scss']
})
export class ForgottenpasswordComponent implements OnInit {
  resetform: FormGroup | any;

  constructor(private router:Router, private fb:FormBuilder,   private _log: LoginService,
    private _auth: AuthenticationsService) { }

  ngOnInit(): void {
    this.forms();
  }



  forms() {
    this.resetform = this.fb.group({
      email: new FormControl('', [Validators.email, Validators.required]),
    });
  }


  reset(){
      type PostBody = {
        email: string
      }
  
      const postbody: PostBody = {
        email: this.resetform.value.email,
      };
  
      this._log.resetpassword(postbody).subscribe((res: any) => {
        
  
      const userObject = JSON.stringify(postbody);
      this._auth.saveToLocalStorage("user", userObject)
  
      this.resetform.reset();

      alert("password reset link has been sent to your email");
  
      this.router.navigate(['login']);

      }, (err: any) => {
        this.router.navigate(['']);
        console.log("you didn't do this well" )
      
  
  });
}

}
