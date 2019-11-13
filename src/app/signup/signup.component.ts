import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  hide_email:boolean = true;
  hide_pwd:boolean = true;
  hide_error: boolean = true;
  error_msg = '';
  hide_valid: boolean = true;
  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      email : ['', Validators.email],
      password : ['', Validators.compose([Validators.required])],
      confirm_password : ['', Validators.compose([Validators.required])],
    });
  }

  signup(postData:NgForm) {
    if(postData['email'] == '' || postData['email'] == null){
      this.hide_email = false;
      this.hide_pwd = true;
      this.hide_valid = true;
    }
    else if((postData['password'] != postData['confirm_password']) || postData['password'] == '' || postData['password'] == null){
      this.hide_email = true;
      this.hide_pwd = false;
    }else if(postData['password'].length < 8 || !this.validatePassword(postData['password'])){
      this.hide_valid = false;
      this.hide_email = true;
      this.hide_pwd = true;
    }else{
      this.hide_email = true;
      this.hide_pwd = true;
      this.hide_valid = true;
      sessionStorage.setItem("signup_email",postData['email']);
      sessionStorage.setItem("signup_password",postData['password']);
      this.router.navigate(['signup-detail']);
    }
  }

  validatePassword(str)
  {
    var reg = /^((.*\d.*[A-Z].*)|(.*[A-Z].*\d.*))$/;
    if (reg.test(str)) {
        return true;                                     
    }
    else {
        return false;                  
    }
  }
}
