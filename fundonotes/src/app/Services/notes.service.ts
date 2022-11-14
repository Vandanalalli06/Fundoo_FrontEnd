import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
token:any;
NoteId:any;

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
  UpdateNotes(updateNote: any,NoteId: number) {
    
    console.log(this.token);

    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':'Bearer ' + this.token
      }),
    }
    return this.http.putService('https://localhost:44355/api/Notes/Update?NoteId=11'+NoteId, updateNote,true, header)
  }
  Archieve(data: any) {
    console.log(this.token);
  
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':'Bearer ' + this.token
      })
    }
    return this.http.putService('https://localhost:44355/api/Notes/Archive?noteId='+data,null, true, header)
  }
  delete(data: any) {
    console.log(data);
     let header = {
      headers: new HttpHeaders({
        
        'Content-type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,
  
      }),
    };
    return this.http.putService('https://localhost:44355/api/Notes/Delete?NoteId='+data,null, true,header );
  }
}
