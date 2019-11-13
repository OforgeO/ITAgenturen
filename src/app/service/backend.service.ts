import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

const httpOptions = {
  headers: new HttpHeaders({ 
  'Content-Type' : 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  baseUrl = 'http://localhost/ITAgenturen-Backend/api.php/';

  constructor(public http: HttpClient, private router: Router) { 
  }
  
  login(formData: NgForm) {
    let httpParams = new HttpParams().set('email', formData['email']).set('password', formData['password']);
    return this.http.post<any>( this.baseUrl + 'login', httpParams);
  }
}
