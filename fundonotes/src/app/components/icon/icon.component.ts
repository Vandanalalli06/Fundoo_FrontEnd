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
  colorsArr = [{ Colorcode: "pink" }, { Colorcode: "yellow" }, { Colorcode: "orange" }, { Colorcode: "rgb(255,99,71)" }, { Colorcode: "rgb(152,251,152)" }, { Colorcode: "Teal" }, { Colorcode: "rgb(106,90,205)" }, { Colorcode: "rgb(240,230,140)" }, { Colorcode: "rgb(238,130,238)" }, { Colorcode: "rgb(255,160,122)" }];
  constructor(private note: NotesService) { }

  ngOnInit(): void {

  }
  Archieve() {
    console.log(this.noteCard)
    let data = {

      archive: true,
    }
    this.note.Archieve(this.noteCard.notesId).subscribe((response: any) => {
      console.log("Note is archived");

      console.log(response);

    })
  }
  isTrash() {
    this.note.delete(this.noteCard.noteID).subscribe((response: any) => {
      console.log(response);


    })
  }
}