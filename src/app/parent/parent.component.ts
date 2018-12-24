import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  inputText = "i am your parent";
  constructor() { }

  ngOnInit() {
  }

  getData(val){
    console.log(val);
  }

}
