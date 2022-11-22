import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notes.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
  noteArray: any;
  constructor(private note: NotesService) { }

  ngOnInit(): void {
    this.getAllNote();
  }
  getAllNote() {
    this.note.GetNotes().subscribe((response: any) => {
      console.log(response.data);
      this.noteArray = response.data;
      this.noteArray = this.noteArray.reverse();
      this.noteArray = this.noteArray.filter((object: any) => {
        return object.archive == false && object.trash == false;
        // console.log(this.noteArray);
      })
    })
  }
  receiveMessage($event: any) {
    console.log($event);
    this.getAllNote();
  }
  updatedicon($event:any) {
    console.log($event);
    this.getAllNote();
  }
  receiveMessagearchive($event:any){
    console.log($event);
    this.getAllNote();
  }
  iconRefresh($event:any){
    console.log($event)
    this.getAllNote();
  }
  trashmessage($event:any){
    this.getAllNote();
  }
}
