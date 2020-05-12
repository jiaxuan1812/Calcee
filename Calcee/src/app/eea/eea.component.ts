import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eea',
  templateUrl: './eea.component.html',
  styleUrls: ['./eea.component.css']
})
export class EeaComponent implements OnInit {

  a: string;
  b: string;
  a1: number | string;
  b1: number;
  x0: number;
  y0: number;
  x1: number;
  y1: number;
  q: number;
  r: number;
  calculating: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  calculateGCD = ():string => {
    console.log(this.b);
    this.calculating = true;
    if ((this.a == null || this.b == null) || (typeof this.a == 'undefined' || typeof this.b == 'undefined')) { 
      return "Check Arguments";
    } else {
      this.a1 = Number(this.a);
      this.b1 = Number(this.b);
      this.x0 = 1;
      this.y0 = 0;
      this.x1 = 0;
      this.y1 = 1;
      this.q = Math.floor(this.a1 / this.b1);
      this.r = this.a1 % this.b1;
      while (this.b1 != 0) {
        this.a1 = this.b1;
        this.b1 = this.r;
        let tempx = this.x0;
        let tempy = this.y0;
        this.x0 = this.x1;
        this.y0 = this.y1;
        this.x1 = tempx - this.q * this.x1;
        this.y1 = tempy - this.q * this.y1;
        this.q = Math.floor(this.a1 / this.b1);
        this.r = this.a1 % this.b1;
      }
      this.calculating = false;
      return this.a1.toString();
    }
  }

  displayGCD = () => {
    var inputElement = <HTMLInputElement>document.getElementById("output");
    inputElement.value = this.calculateGCD();
  }

}
