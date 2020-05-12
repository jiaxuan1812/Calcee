import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fastexpo',
  templateUrl: './fastexpo.component.html',
  styleUrls: ['./fastexpo.component.css']
})
export class FastexpoComponent implements OnInit {

  base: string;
  exp: string;
  mod: string;

  constructor() { }

  ngOnInit(): void {
  }

  calculateFastExpo = ():string => {
    if ((this.base == null || this.exp == null || this.mod == null) || (typeof this.base == 'undefined' || typeof this.exp == 'undefined' || typeof this.mod == 'undefined')) { 
      return "Check Arguments";
    } else {
      let expBinary = Number(this.exp).toString(2);
      let k = Number(this.base);
      let h = 1;

      for(let i = expBinary.length - 1; i > -1; i--) {
        if(expBinary[i] == '1') {
          h = (h * k) % Number(this.mod);
        }
        k = Math.pow(k, 2) % Number(this.mod);
      }
      return h.toString();
    }
  }

  displayFastExpo = () => {
    var inputElement = <HTMLInputElement>document.getElementById("output");
    inputElement.value = this.calculateFastExpo();
  }
}
