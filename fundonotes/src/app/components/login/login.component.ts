import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userservice/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
login!:FormGroup;
submitted=false;

  constructor(private formBuilder:FormBuilder,private User:UserService) { }

  ngOnInit() {
    this.login = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }
  onSubmit() {
    this.submitted = true;
    if (this.login.valid) {
      console.log("valid data",this.login.value);
      console.log("do api call");
      let data={
        email:this.login.value.email,
        password:this.login.value.password
      }
      this.User.login(data).subscribe((response:any)=>{
        console.log('response:=>',response.data);
        localStorage.setItem('token', response.data)
      })
    }
    else{
      console.log("Invalid data", this.login.value)
      console.log("no api call")
    }
  }
}

