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
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angularx-social-login";
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
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        /*{
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("1233948370100481")
        },*/
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("832107085411-0j19g4qhi6h6psst9uicaufd9v4um91o.apps.googleusercontent.com")
        },
      ]
  );
  return config;
}