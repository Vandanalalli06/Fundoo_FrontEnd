import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from '@angular/forms';
import { ResetpassworddComponent } from './components/resetpasswordd/resetpasswordd/resetpasswordd.component';
import { MatButtonModule } from '@angular/material/button';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import { MatExpansionModule } from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import { MatTooltipModule} from '@angular/material/tooltip'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { GetallnotesComponent } from './components/getallnotes/getallnotes.component';
import { TrashComponent } from './components/trash/trash.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { CreatenotesComponent } from './components/createnotes/createnotes.component';
import { DisplaynotesComponent } from './components/displaynotes/displaynotes.component';
import { IconComponent } from './components/icon/icon.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,

    ResetpassworddComponent,
    ForgotpasswordComponent,
    DashboardComponent,
    GetallnotesComponent,
    TrashComponent,
    ArchiveComponent,
    CreatenotesComponent,
    DisplaynotesComponent,
    IconComponent,
   


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatExpansionModule,
    MatToolbarModule,
    MatDialogModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
