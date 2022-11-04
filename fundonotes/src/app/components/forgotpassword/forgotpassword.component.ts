import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userservice/user.service';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  forgetPasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder:FormBuilder, private User:UserService) { }

  ngOnInit() {
    this.forgetPasswordForm=this.formBuilder.group({
      Email:['',Validators.required]
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.forgetPasswordForm.valid) {
      console.log("valid data",this.forgetPasswordForm.value);
      console.log("do api call");
      let data={
        Email:this.forgetPasswordForm.value.Email
      }
      this.User.forgetpassword(data).subscribe((response:any)=>{
        console.log(response);
      })
    }
    else{
      console.log("No api call")
    }
  }
}




