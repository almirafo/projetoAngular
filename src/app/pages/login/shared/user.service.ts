import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable , throwError} from 'rxjs';

import { map, catchError, flatMap} from 'rxjs/operators';

import { User } from './../../../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiPath = 'api/users';

  constructor(private http: HttpClient) { }


  getById(id: string ): Observable<User> {
    const url = `${this.apiPath}/${id}`;
    return this.http.get(url).pipe(
      catchError(this.handleError),
      map(this.jsonDataToUser)
      );

  }
  private jsonDataToUsers(jsonData: any[] ): User [] {
    const users: User[] = [];
    jsonData.forEach(element => users.push(element as User) );
    return users;
  }


  private jsonDataToUser(jsonData: any[] ): User {
    return jsonData as User;
  }


  private handleError(error: any): Observable<any> {
    console.log('Request Error:' , error);
    return throwError(error);

  }

}
