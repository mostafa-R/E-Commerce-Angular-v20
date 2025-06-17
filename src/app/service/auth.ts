import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  headers = {};
  static isLoggedInSubject: any;

  constructor(private http: HttpClient) {
    this.headers = {
      Headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  login(email: string, password: string): Observable<boolean> {
    return this.http
      .get<any[]>(
        `${environment.apiBaseUrl}/users?email=${email}&password=${password}`
      )
      .pipe(
        map((users) => {
          if (users.length > 0) {
            localStorage.setItem('token', 'mock-token');
            this.isLoggedInSubject.next(true);
            return true;
          } else {
            return false;
          }
        })
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isLoggedInSubject.next(false);
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
}
