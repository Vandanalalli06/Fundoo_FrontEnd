import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
token:any;

  constructor(private http:HttpService) { 
    this.token=localStorage.getItem("token")
  }
  CreateNotes(data:any) {
    console.log(data,this.token);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' +this.token
      })
    }
    return this.http.postService('https://localhost:44355/api/Notes/Create', data, true, header)
  }
  GetNotes(){
    console.log(this.token);
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.getService('https://localhost:44355/api/Notes/GetAll',true,header)
  
  }
}
