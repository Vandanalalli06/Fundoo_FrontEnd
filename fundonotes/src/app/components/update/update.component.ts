import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesService } from 'src/app/Services/notes.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  @Output() noteUpdated= new EventEmitter<any>();
  title:any;
  description:any;
  NoteId:any;

  constructor(private notes:NotesService,public dialogRef:MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any, ) { }

  ngOnInit(): void {
    console.log(this.data,this.data.NoteId)
    this.title=this.data.title;
    this.description=this.data.description;
  
  }
onNoClick():void{
  console.log(this.title,this.description,this.NoteId);
  let data={
    NoteId:this.NoteId,
    title:this.title,
    description:this.description,
  }
  this.notes.UpdateNotes(data,this.NoteId).subscribe((response:any)=>{
    console.log(response);
    this.noteUpdated.emit(response);
    
  });
  this.dialogRef.close();
}
Reload(event:any){
  console.log(event);
}
  
// }
// constructor(private notes:NotesService , 
//   public dialogRef: MatDialogRef<UpdateComponent>, 
//   @Inject(MAT_DIALOG_DATA) public data: any) {
//  this.title=data.title;
//  this.description=data.description;
//  this.NoteId=data.noteId;
// }

// ngOnInit(): void {
// }
// onNoClick() {
//  let Data = {
//    title: this.title,
//    description: this.description,
//    noteId: this.NoteId,
//  }
//  this.notes.UpdateNotes(Data, this.NoteId).subscribe((response:any) =>{ 
//    console.log("update response", response); 
         
//  })
//  this.dialogRef.close()
// }
// }
}