import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { map, catchError} from 'rxjs/operators';
import { Eps } from '../model/eps.model';
import { Observable, throwError } from 'rxjs';
import { epsEmail } from '../model/epsEmail.model';

@Injectable({
  providedIn: 'root'
})
export class EpsService {

  private eps: Observable<Eps> ;
  private apiPath = 'api/eps';
  constructor( private http: HttpClient) {


   }

  create(eps: Eps): Observable<Eps> {
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post(this.apiPath, eps, options).pipe(
       catchError(this.handleError),
         map(this.jsonDataToEPS)
    );

  }


  update(eps: Eps): Observable<Eps>  {
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    const url = `${this.apiPath}/${eps.id}`;
    return this.http.put(url, eps, options).pipe(
      catchError(this.handleError),
        map(() => eps)
   );
  }

  list(): Observable<Eps[]> {

    return this.http.get(this.apiPath).pipe(
      catchError(this.handleError),
      map(this.jsonDataToEPSs)
    );


  }

  getById(id: string ): Observable<Eps> {
    const url = `${this.apiPath}/${id}`;
    return this.http.get(url).pipe(
      catchError(this.handleError),
      map(this.jsonDataToEPS)
      );

  }


  // privates
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
