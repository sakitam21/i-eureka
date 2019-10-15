import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { User } from './user';
import { USERS } from './mock-users';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }

  /*
  getUsers(): Observable<User[]> {
  	return of(USERS);
  }
  */

  getUsers() {
  	return this.http.get('http://localhost:3000/users/login');
  }

}
