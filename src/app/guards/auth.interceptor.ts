import { SharedService } from './../services/shared.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  shared: SharedService;

  constructor(  ) {
    this.shared = SharedService.getInstace();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable <HttpEvent <any>> {
    let authRequest: any;
    if (this.shared.isLogged()) {
       authRequest = req.clone({
         setHeaders : {
           User : this.shared.user.name
         }
       });
       return next.handle(authRequest);
    } else {
      return next.handle(req);
    }
  }

}
