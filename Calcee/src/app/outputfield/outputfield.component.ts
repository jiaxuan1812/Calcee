import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-outputfield',
  templateUrl: './outputfield.component.html',
  styleUrls: ['./outputfield.component.css']
})
export class OutputfieldComponent implements OnInit {

  @Input() public outputResult: number;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges = (changes: SimpleChanges) => {
    if (typeof changes.outputResult.currentValue != 'undefined') {
      var inputElement = <HTMLInputElement>document.getElementById("output");
      inputElement.value = changes.outputResult.currentValue.toString();
    }
  }
}
