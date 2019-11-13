import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  loginForm: FormGroup;
  is_hide = true;
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'email' : [null, [Validators.required, Validators.email]]
    });
  }

  forgot(formData: NgForm) {
    /*this.auth.forgot(formData).subscribe(
      (user) => {
        this.is_hide = false;
      });*/
    this.is_hide = false;
  }
}
