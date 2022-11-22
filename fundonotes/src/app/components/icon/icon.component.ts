import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/Services/notes.service';
import { ArchiveComponent } from '../archive/archive.component';
import { TrashComponent } from '../trash/trash.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  [x: string]: any;
  @Input() noteCard: any;
  @Output() changeNoteEvent = new EventEmitter<string>();
  @Output() displayicons = new EventEmitter<string>();
  @Output() Trash=new EventEmitter<string>();
  noteID: any;
  isArchieve: boolean = false;
  trash: boolean = false;
  colorId:any;
  colorarray = [{ Colorcode: "blue" },
  { Colorcode: "red" },
  { Colorcode: "pink" },
  { Colorcode: "white" },
  { Colorcode: "black" },
  { Colorcode: "orange" },
  { Colorcode: "green" },
  { Colorcode: "purple" },
  { Colorcode: "yellow" },
  { Colorcode: "maroon" },
  { Colorcode: "magenta" },
  { Colorcode: "violet" }];
  constructor(private note: NotesService ,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    let Component = this.activatedroute.snapshot.component;
    if (Component == TrashComponent) {
         this.trash = true;
       }
   
       if (Component == ArchiveComponent) {
         this.isArchieve= true;
       }

  }
  Archieve() {
    console.log(this.noteCard)
    let data = {
      noteID: this.noteCard.noteID
    }
    console.log(data);
    this.note.Archieve(this.noteCard.notesId).subscribe((response: any) => {
      console.log("Note archieved Successfully", response);
      this.displayicons.emit(response);
        console.log(response)

    })
  }
  isTrash() {
    this.note.Trash(this.noteCard.notesId).subscribe((response: any) => {
      console.log("Note trash Successfull", response);
      this.Trash.emit(response);
        console.log(response)

    })
  }
  UnArchievenote() {
    this.note.Archieve(this.noteCard.notesID).subscribe((response: any) => {
      console.log("note unarchieve", response);
    })
  }
  Restore() {
    this.note.Trash(this.noteCard.notesId).subscribe((response: any) => {
      console.log("note restore", response);
    })
  }
  updatecolor(colour: any) {
    let data={
      noteId:this.noteCard.notesId,
      Colour:colour
    }
    this.colorId = this.noteCard.Colour=colour; 
    console.log(this.noteCard.notesId)
    this.note.Color(data).subscribe((response: any) => {
      console.log(response);
      this.changeNoteEvent.emit(response);
        console.log(response)
    })
  // updatecolor(colour: any) {
  //   this.colorId = this.noteCard.Colour=colour;
    
     
  //   this.note.Color(this.noteCard.notesId).subscribe((response: any) => {
  //     console.log(response);
  //     this.changeNoteEvent.emit(response);

  //     console.log(response)

  //   })

  }
}