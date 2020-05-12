import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcee',
  templateUrl: './calcee.component.html',
  styleUrls: ['./calcee.component.css']
})
export class CalceeComponent implements OnInit {

  public route;

  constructor() { }

  ngOnInit(): void {
  }

  //represents the result
  public result: number;

  //receives the result 
  receiveResult = ($event) => {
    this.result = $event;
  }
}
