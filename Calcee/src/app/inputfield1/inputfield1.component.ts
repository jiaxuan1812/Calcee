import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inputfield1',
  templateUrl: './inputfield1.component.html',
  styleUrls: ['./inputfield1.component.css']
})
export class Inputfield1Component implements OnInit {

  //represents the input number of input field 1 and 2
  public input1: string;
  public input2: string;

  //emitter for input number to parent
  @Output() public inputEmitter = new EventEmitter<any>();

  constructor() { 
  }

  ngOnInit(): void {
  }

  //emits input number to parent
  sendInputsOfAdd = () => {
    if ((this.input1 == null || this.input2 == null) || (typeof this.input1 == 'undefined' || typeof this.input2 == 'undefined')) {
      this.inputEmitter.emit("Check Your Arguments!");
    } else {
      this.inputEmitter.emit(Number(this.input1) + Number(this.input2));
    }
  }

  sendInputsOfMult = () => {
    if ((this.input1 == null || this.input2 == null) || (typeof this.input1 == 'undefined' || typeof this.input2 == 'undefined')) {
      this.inputEmitter.emit("Check Your Arguments!");
    } else {
      this.inputEmitter.emit(Number(this.input1) * Number(this.input2));
    }
  }

  sendInputsOfSub = () => {
    if ((this.input1 == null || this.input2 == null) || (typeof this.input1 == 'undefined' || typeof this.input2 == 'undefined')) {
      this.inputEmitter.emit("Check Your Arguments!");
    } else {
      this.inputEmitter.emit(Number(this.input1) - Number(this.input2));
    }
  }

  sendInputsOfDiv = () => {
    if ((this.input1 == null || this.input2 == null) || (typeof this.input1 == 'undefined' || typeof this.input2 == 'undefined')) {
      this.inputEmitter.emit("Check Your Arguments!");
    } else {
      if(!(Number(this.input2) == 0)) {
        this.inputEmitter.emit(Number(this.input1) / Number(this.input2));
      } else {
        this.inputEmitter.emit("No division with 0!");
      }
    }
  }
}
