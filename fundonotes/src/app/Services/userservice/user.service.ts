
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpService) { }

  register(data: any) {
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
        
      })
    }
   return this.http.postService('https://localhost:44355/api/User/Register',data,false ,header)
  }
    login(data:any){
      let header={
        headers:new HttpHeaders({
          'Content-Type': 'application/json',
          // 'Authorization': 'data'
        })
      }
      return this.http.postService('https://localhost:44355/api/User/Login',data,false,header)
    }
    forgetpassword(data:any){
      let header={
        headers:new HttpHeaders({
          'Content-Type':'application/json'
        })
      }
      return this.http.postService('https://localhost:44355/api/User/ForgotPassword?Email=dadivandana111%40gmail.com',data,false,header)
    }
}