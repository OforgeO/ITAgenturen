import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hideCookie = 0;
  constructor() { }

  ngOnInit() {
    this.hideCookie = +localStorage.getItem('hideCookie');
  }

  close_cookie(){
    this.hideCookie = 1;
    localStorage.setItem('hideCookie', JSON.stringify(1));
  }
}
