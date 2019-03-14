import { CurrentUser } from './../../../model/current-user.model';
import { SharedService } from './../../../services/shared.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, AfterContentChecked } from '@angular/core';

import { User } from './../../../model/user.model';
import { UserService } from '../shared/user.service';
import toastr from 'toastr';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit, AfterContentChecked {

  user = new User('', '', '', '');
  shared: SharedService;
  message: string;

  currentAction: string;
  loginForm: FormGroup;
    serverErrorMessage: string[] = null;
  submittingForm = false;
  private formSubmitAttempt: boolean;

  constructor( private userService: UserService,

               private router: Router,
               private formBuider: FormBuilder

          ) {
            this.shared = SharedService.getInstace();
          }

  ngOnInit() {

    this.setCurrentAction();
    this.buidLoginForm();

  }

  ngAfterContentChecked() {

  }

  //privates methods
  private setCurrentAction() { }

  private login() {
    this.submittingForm = true;
    const user: User = Object.assign(  new User('', '', '', ''), this.loginForm.value );
    this.userService.getById(user.id)
      .subscribe(
        ( userAuthentication: User ) => this.actionsForSuccess(userAuthentication)
        ,
        error => this.actionsForError(error)
      );
  }

  private logout() { }

  private actionsForSuccess(user: User) {
    if (user.password === this.loginForm.value.password) {
      toastr.success('logado com sucesso');

      this.shared.user = user;
      this.shared.showTemplate.emit(true);
      this.router.navigate(['/']);


      this.formSubmitAttempt = true;
      return true;

    } else {
      toastr.error ('erro ao logar');
      this.submittingForm = false;
      return false;
    }
  }
  private actionsForError(error) {
      toastr.error ('erro ao logar');
      console.log('erro ao logar', error);
      this.submittingForm = false;
      if (error.status === 422) {
        this.serverErrorMessage = JSON.parse(error._body).erros;
      } else {
        this.serverErrorMessage = ['Falha de comunicação'];
      }
  }

  private buidLoginForm() {
    this.loginForm = this.formBuider.group({
      id: [null],
      password: [null]
    });
  }


   cancelLogin() {

    this.user = new User('', '', '', '');
    this.loginForm.reset();

  }
}
