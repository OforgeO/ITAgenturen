import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,Validators} from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    private fb: FormBuilder
    ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      // 'id' : [null, Validators.required],
      'form-name' : [null, Validators.required],
      'form-email' : [null, Validators.required],
      'form-subject' : [null, Validators.required],
      'form-message' : [null, Validators.required],
    });
  }

}
