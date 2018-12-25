import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  log(username){
    console.log(username);
  }

  submit(form:NgForm){
    console.log(form);
    const username = form.value.username;
    const password = form.value.password;
    firebase.auth().signInWithEmailAndPassword(username , password).then(userData =>{
      console.log('next');
    }).catch(err =>{
      console.log(err);
      firebase.auth().signOut();
    })
  }
}
