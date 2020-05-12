import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IfavFilms } from './favFilms';
import { IfavDPs } from './favDPs';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
/*
This is a service with the responsibility of fetching the data of the list of favourite films and dps.
The AboutDataComponent is dependent on this service. The service fetches with the Http GET request the
data from the URL or in this case just the .json file and provides it by returning it in its operations.
Components that subscribe to the observable that basically is the fetched data will receive the data accordingly.
*/
export class AboutMeDataService {

  private filmURL: string = "./assets/data/favFilms.json";
  private dpURL: string = "./assets/data/favDPs.json";

  constructor(private _http: HttpClient) { }

  getFilms(): Observable<IfavFilms[]> {
    return this._http.get<IfavFilms[]>(this.filmURL).pipe(catchError(this.errorHandler));
  }

  getDPs(): Observable<IfavDPs[]> {
    return this._http.get<IfavDPs[]>(this.dpURL).pipe(catchError(this.errorHandler));
  }

  errorHandler(err: HttpErrorResponse) {
    return observableThrowError("Something went wrong :(");
  }
}
