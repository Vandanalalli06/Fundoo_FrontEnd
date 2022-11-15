import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  trashlist: any;
  constructor(private note: NotesService) { }

  ngOnInit(): void {
    this.trash()
  }
  trash() {
    console.log('Get trash list successful');
    this.note.GetNotes().subscribe((response: any) => {
      this.trashlist = response.data;
      this.trashlist.reverse();
      this.trashlist = this.trashlist.filter((object: any) => {
        return object.trash==true;
      })
      console.log("trash list", this.trashlist);
    })
  }
}
