import { CustomValidator } from './custom.validator';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form = new FormGroup({
    username : new FormControl("" , [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern("shashi"),
      CustomValidator.cannotContainSpace
    ])
  });

  get username(){
   return this.form.get('username');
  }

  constructor() { }

  ngOnInit() {
  }

}