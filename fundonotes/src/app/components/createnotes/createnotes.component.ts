import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotesService } from 'src/app/Services/notes.service';
@Component({
  selector: 'app-createnotes',
  templateUrl: './createnotes.component.html',
  styleUrls: ['./createnotes.component.scss']
})
export class CreatenotesComponent implements OnInit {
  @Output()messageEvent = new EventEmitter<any>();
  show = false;
  createNote!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private note: NotesService) { }

  ngOnInit(): void {
    this.createNote = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  isShow() {
    this.show = true;
  }
  close(): void {
    this.show = false;
    this.submitted = true;
    if (this.createNote.valid) {
      console.log("valid Data", this.createNote.value);
      console.log("do Api call");
      let data = {
        title: this.createNote.value.title,
        description: this.createNote.value.description,
        color:this.createNote.value.color

      }
      this.note.CreateNotes(data).subscribe((response: any) => {
        console.log(response);
        this.messageEvent.emit(response)

      });
    }
    else {
      console.log("Invalid Data", this.createNote.value);
      console.log("no api call")
    }
  }
  resetForm() {
    this.createNote.reset();
  }
}


