import { CustomValidator } from './custom.validator';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, NgForm, EmailValidator } from '@angular/forms';
import * as firebase from 'firebase';
import { NoticationService } from '../shared/notification.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private notifier:NoticationService) { 

  }
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
      this.notifier.display('error' , err.message);
      console.log(err)
    })

  }

  

  ngOnInit() {
  }

}