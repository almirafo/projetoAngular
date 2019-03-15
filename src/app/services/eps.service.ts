import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { map, catchError} from 'rxjs/operators';
import { Eps } from '../model/eps.model';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class EpsService {

  private apiPath = 'api/eps';
  constructor( private http: HttpClient) {
    console.log('iniciou EpsService');

   }

  create(eps: Eps): Observable<Eps> {
    return this.http.post(this.apiPath, eps).pipe(
       catchError(this.handleError),
         map(this.jsonDataToEPS)
    );

  }

  list(): Observable<Eps[]> {
    console.log('fazendo list');
    return this.http.get(this.apiPath).pipe(
      catchError(this.handleError),
      map(this.jsonDataToEPSs)
    );


  }

  getAll(): Observable<Eps[]> {
    return this.http.get<[Eps]>(this.apiPath);
  }

  private jsonDataToEPSs(jsonData: any[] ) {
    const epss: Eps[] = [];
    jsonData.forEach(element => { epss.push(element as Eps);

    });
    return epss;
  }

  private jsonDataToEPS(jsonData: any): Eps {
    return jsonData as Eps;

  }
  private handleError(error: any): Observable<any> {
    console.log('Erro=>', error);
    return throwError(error);


  }
}
