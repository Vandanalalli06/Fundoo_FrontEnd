import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-resetpasswordd',
  templateUrl: './resetpasswordd.component.html',
  styleUrls: ['./resetpasswordd.component.scss']
})
export class ResetpassworddComponent implements OnInit {
  resetPasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.resetPasswordForm=this.formBuilder.group({
      password: ['', Validators.required, Validators.minLength(8)],
      confirmPassword: ['', [Validators.required, Validators.minLength(8),]]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.resetPasswordForm.valid) {
      return;
    }
  }
}