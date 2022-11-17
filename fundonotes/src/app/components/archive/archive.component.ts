import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notes.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
noteList:any;

  constructor(private note:NotesService) { }

  ngOnInit(): void {
    this.getarchieve()
  }
getarchieve(){
  this.note.GetNotes().subscribe((response:any)=>{
    console.log(this.noteList)
    this.noteList=response.data;
    this.noteList.reverse();
   this.noteList=this.noteList.filter((object:any)=>{
    return object.archive==true;
  })
  console.log("Archieve" +this.noteList);
})
}
receiveMessage(event: any) {
  this.getarchieve();
}}
