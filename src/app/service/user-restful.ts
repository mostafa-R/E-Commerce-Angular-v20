import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../models/iuser';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class UserRestful {
  headers = {};

  constructor(private http: HttpClient) {
    this.headers = {
      Headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }


  addNewUser(newUser: Iuser): Observable<Iuser> {
    return this.http.post<Iuser>(
      `${environment.apiBaseUrl}/users`,
      newUser,
      this.headers
    );
  }
}
