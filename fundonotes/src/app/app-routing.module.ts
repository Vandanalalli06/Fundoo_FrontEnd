import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './components/archive/archive.component';
import { AuthenticationGuard } from './components/authentication.guard';
import { CreatenotesComponent } from './components/createnotes/createnotes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { GetallnotesComponent } from './components/getallnotes/getallnotes.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetpassworddComponent } from './components/resetpasswordd/resetpasswordd/resetpasswordd.component';
import { TrashComponent } from './components/trash/trash.component';

const routes: Routes = [
  {path:'',redirectTo:"/login",pathMatch:'full'},
  {path:'registration',component:RegisterComponent,},
  {path:'login',component:LoginComponent,},
  {path:'forgetpassword',component:ForgotpasswordComponent},
  {path:'resetpassword',component:ResetpassworddComponent},
  {path:'create',component:CreatenotesComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],
  children:[
    {path:'Notes',component:GetallnotesComponent},
    {path:'create',component:CreatenotesComponent},
    {path:'Archive',component:ArchiveComponent},
    {path:'Trash',component:TrashComponent}
  ]},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
