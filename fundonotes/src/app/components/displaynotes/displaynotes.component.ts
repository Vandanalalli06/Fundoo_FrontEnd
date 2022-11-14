import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
  @Input() childMessage:any;

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
      
    });
  }
}
