import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  noteArray: any;
  constructor(private note: NotesService) { }

  ngOnInit(): void {
    this.gettrash()
  }
  gettrash() {
    this.note.GetNotes().subscribe(
      (response: any) => {
        this.noteArray = response.data;
        this.noteArray = this.noteArray.filter((a: any) => {
          return a.trash == true;
        })
        console.log(this.noteArray);
      })
  }
}
