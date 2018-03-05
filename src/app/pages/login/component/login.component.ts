import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import {messages} from '../../../shared/constants/messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm :  FormGroup;
  errorMsg : Object;
  constructor() {
  }

  ngOnInit(){
    this.errorMsg = messages;
    this.loginForm = new FormGroup({
        username : new FormControl(null,Validators.required),
        password : new FormControl(null,Validators.required)
    });
  }
  onSubmit = ()  => {
    console.log('Username ' + this.loginForm.value['username']);
    console.log('Password ' + this.loginForm.value['password']);
    
  }
}
