import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Messenger } from './messenger';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  url: string = 'http://localhost:3000/enroll';

  constructor(private _http: HttpClient) { }

  //HTTP POST request from the messenger
  messengerSend(messenger: Messenger): Observable<any> {
    return this._http.post<any>(this.url, messenger);
  }
}
