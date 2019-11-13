import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isLoggedIn: boolean;
  constructor(private router: Router,) { }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.isLoggedIn = false;
    this.router.navigate(['/home']);
  }
}
