import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
  @Input() childMessage:any;
  @Output() changeNoteEvent = new EventEmitter<string>();
  @Output() updatedisplay = new EventEmitter<string>();
  @Output() messageEvent = new EventEmitter<string>();
  @Output()IsTrash=new EventEmitter<string>();
  constructor(private dialog:MatDialog) { }
  
  ngOnInit(): void {
    
  }
  openDialog(note: any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '500px',
      // height: '150px',
      data: note,
    });
    dialogRef.afterClosed().subscribe((result:any) => {
      console.log('The dialog was closed');
      this.updatedisplay.emit(result);
    });
  }
  recieveArchiveNote(event: any) {
    this.changeNoteEvent.emit(event);
  }
  iconRefresh($event: any) {
    console.log($event);
    this.changeNoteEvent.emit($event)
  }
  Trash(event:any){
    this.IsTrash.emit(event)
  }
  }
