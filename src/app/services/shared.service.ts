import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../model/user.model';


@Injectable()
export class SharedService {
  public static instance: SharedService = null;
  user: User;
  token: string;
  showTemplate = new EventEmitter<boolean>();

  public static getInstace() {
    if ( this.instance == null) {
      this.instance = new SharedService();
    }
    return this.instance;
  }
  constructor() {
    return SharedService.instance = SharedService.instance || this;
  }

  isLogged(): boolean {
    if (this.user == null) {
      return false;
    }
    return this.user.email !== '';
  }

}
