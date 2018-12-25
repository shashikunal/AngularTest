import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isloggedIn : boolean = false;
  constructor() { }

  ngOnInit() {
    
    firebase.auth().onAuthStateChanged(userData =>{
      if(userData && userData.emailVerified){
        
        this.isloggedIn = true;
      }else {
        this.isloggedIn = false;
        firebase.auth().signOut();
      }
    })

  }

}
