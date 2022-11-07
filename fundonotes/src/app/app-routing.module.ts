import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetpassworddComponent } from './components/resetpasswordd/resetpasswordd/resetpasswordd.component';

const routes: Routes = [
  {path:'registration',component:RegisterComponent,},
  {path:'login',component:LoginComponent,},
  {path:'forgetpassword',component:ForgotpasswordComponent},
  {path:'resetpassword',component:ResetpassworddComponent},
  {path:'dashboard',component:DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
