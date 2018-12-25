import { CustomValidator } from './custom.validator';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, NgForm, EmailValidator } from '@angular/forms';
import * as firebase from 'firebase';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // form = new FormGroup({
  //   username : new FormControl("" , [
  //     Validators.required,
  //     Validators.minLength(3),
  //     Validators.pattern("shashi"),
  //     CustomValidator.cannotContainSpace
  //   ])
  // });

  // get username(){
  //  return this.form.get('username');
  // }

  submit(form : NgForm){
    const username = form.value.username;
    const password = form.value.password;
    console.log(username , password);
    firebase.auth().createUserWithEmailAndPassword(username , password).then(userData=>{
      console.log(userData);
      userData.user.sendEmailVerification();
      return firebase.database().ref('users/' + userData.user.uid).set({
        username : username,
        uid : userData.user.uid,
        registrationDate : new Date().toString(),
        name:name

      }).then(()=>{
        firebase.auth().signOut();
      });
    }).catch(err=>{
      console.log(err)
    })

  }

  constructor() { }

  ngOnInit() {
  }

}