import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from '../service/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  wrong_login:boolean = true;
  constructor(private fb: FormBuilder,
    private router: Router,
    private backend: BackendService
    ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'email' : ['', [Validators.required, Validators.email]],
      'password' : [null, Validators.required],
    });
  }

  login(formData: NgForm) {
    /*this.backend.login(formData).subscribe(
      (user) => {
        console.log(user);
        if(user['code'] == 500){
          this.wrong_login = false;
        }else{
          this.wrong_login = true;
          //user['userData']['session'] = JSON.parse(localStorage.getItem('session'));
          localStorage.setItem('currentUser', JSON.stringify(user['body']));
          this.router.navigate(['profile']);
        }
    });*/
    this.router.navigate(['profile']);
  }

  public socialSignIn(socialPlatform : string) {
    /*let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData)=>{
        console.log(userData);
        
      }
    )*/
  }
}
