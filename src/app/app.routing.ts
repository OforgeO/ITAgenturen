import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BecomeConsultantComponent } from './become-consultant/become-consultant.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path : 'home', component: HomeComponent},
  { path : '', component : HomeComponent},
  { path : 'become-consultant', component: BecomeConsultantComponent},
  { path : 'login', component: LoginComponent},
  { path : 'profile', component: ProfileComponent},
  { path : 'forgot-password', component: ForgotPasswordComponent},
  { path : 'signup', component: SignupComponent}
];

export const routing = RouterModule.forRoot(routes);
