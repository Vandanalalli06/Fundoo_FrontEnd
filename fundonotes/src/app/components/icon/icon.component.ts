import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notes.service';
import { ArchiveComponent } from '../archive/archive.component';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() noteCard: any;
  noteID: any;
  isArchieve: boolean = false;
  trash:boolean=false;
  colorsArr = [{Colorcode:"#f28b82"},
  {Colorcode:"#fbbc04"},
  {Colorcode:"#fff475"},
  {Colorcode:"#ccff90"},
  {Colorcode:"#a7ffeb"},
  {Colorcode:"#cbf0f8"},
  {Colorcode:"#aecbfa"},
  {Colorcode:"#d7aefb"},
  {Colorcode:"#fdcfe8"},
  {Colorcode:"#e6c9a8"},
  {Colorcode:"#e8eaed"},
  {Colorcode:"white"} ];
  constructor(private note: NotesService) { }

  ngOnInit(): void {

  }
  Archieve() {
    console.log(this.noteCard)
    let data = {
      noteID:this.noteCard.noteID
    }
    console.log(data);
    this.note.Archieve(this.noteCard.notesId).subscribe((response: any) => {
      console.log("Note archieved Successfully",response);

    })
  }
  isTrash() {
    this.note.Trash(this.noteCard.notesId).subscribe((response: any) => {
      console.log("Note trash Successfull",response);
    

    })
  }
}