import { Injectable ,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  showMenuEmitter  = new EventEmitter<boolean>();
  usuarioAutenticado = false;
  public get isLoggedIn() {

    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router
  ) {}

  login() {
      this.usuarioAutenticado = true;
      this.loggedIn.next(true);
      this.showMenuEmitter.emit(true);
      this.router.navigate(['/']);

  }

  logout() {
    this.usuarioAutenticado = false;
    this.showMenuEmitter.emit(false);
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
