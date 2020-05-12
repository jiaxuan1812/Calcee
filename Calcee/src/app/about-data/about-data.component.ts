import { Component, OnInit } from '@angular/core';
import { AboutMeDataService } from '../about-me-data.service';

@Component({
  selector: 'app-about-data',
  templateUrl: './about-data.component.html',
  styleUrls: ['./about-data.component.css']
})
export class AboutDataComponent implements OnInit {

  public films: any;
  public dps: any;
  public errorMsg;

  constructor(private _data: AboutMeDataService) { 
  }

  /*
  The AboutMeDataComponent is dependent on the service that AboutDataService renders. In its lifecycle hook
  it will subscribe to the observable that the service provides and will receive the data accordingly.
  */
  ngOnInit(): void {
    this._data.getFilms().subscribe(data => {
      this.films = data;
    }, error => {
      this.errorMsg = error;
    });
    this._data.getDPs().subscribe(data => {
      this.dps = data;
    }, error => {
      this.errorMsg = error;
    });
  }

}
