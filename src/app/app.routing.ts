import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BecomeConsultantComponent } from './become-consultant/become-consultant.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path : '', component : HomeComponent},
  { path : 'become-consultant', component: BecomeConsultantComponent}
];

export const routing = RouterModule.forRoot(routes);
