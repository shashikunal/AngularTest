import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'qsp';

  ngOnInit(){
    const config = {
      apiKey: "AIzaSyBm-mpHOgo94CI8DcPZ_5th4qyUnv44zZk",
      authDomain: "testproject-4e616.firebaseapp.com",
      databaseURL: "https://testproject-4e616.firebaseio.com",
      projectId: "testproject-4e616",
      storageBucket: "testproject-4e616.appspot.com",
      messagingSenderId: "663498669904"
    };
    firebase.initializeApp(config);
  }
}
