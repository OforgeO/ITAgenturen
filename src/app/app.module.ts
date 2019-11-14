import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {routing} from "./app.routing";
import { HomeComponent } from './home/home.component';
import { BecomeConsultantComponent } from './become-consultant/become-consultant.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupComponent } from './signup/signup.component';
import { SignupDetailComponent } from './signup-detail/signup-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BecomeConsultantComponent,
    FooterComponent,
    LoginComponent,
    HeaderComponent,
    ProfileComponent,
    ForgotPasswordComponent,
    SignupComponent,
    SignupDetailComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
],
  bootstrap: [AppComponent]
})
export class AppModule { }