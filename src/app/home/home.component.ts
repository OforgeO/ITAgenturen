import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hideCookie = 0;
  constructor(
    
  ) { 
    this.hideCookie = +localStorage.getItem('hideCookie');
  }

  ngOnInit() {
    
  }

  close_cookie(){
    this.hideCookie = 1;
    localStorage.setItem('hideCookie', JSON.stringify(1));
  }
}
