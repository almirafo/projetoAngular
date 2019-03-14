import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';
import { Eps } from '../model/eps.model';

@Injectable()
export class EpsService {

  private apiPath = 'api/epsis';
  constructor( private http: HttpClient) { }

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
