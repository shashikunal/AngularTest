import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() myInput:string;
@Output() myoutPut:EventEmitter<string> = new EventEmitter();

myOutPutString = "hello i am your child";

constructor() { }

  ngOnInit() {
    console.log(this.myInput);
  }
  senddata(){
    this.myoutPut.emit(this.myOutPutString);
  }
  
}
