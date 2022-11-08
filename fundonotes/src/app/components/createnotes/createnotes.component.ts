import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-createnotes',
  templateUrl: './createnotes.component.html',
  styleUrls: ['./createnotes.component.scss']
})
export class CreatenotesComponent implements OnInit {
  show =false;
  createNote!: FormGroup;
  submitted=false;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createNote = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
  });
}
isShow(){
  this.show=true;
}
close():void{
  this.show=false;
}
onSubmit(){
  this.submitted=true;
  return;
}
resetForm() {
  this.createNote.reset();
}
}
