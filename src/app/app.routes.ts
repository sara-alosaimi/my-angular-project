import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { LandingpageComponent } from './landingpage/landingpage.component'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'signin', component: SigninComponent },  
  { path: 'forgetpassword', component: ForgetpasswordComponent },  
  { path: 'dashboard', component: DashboardComponent }, 
  { path: 'home', component: HomeComponent }, 
];
