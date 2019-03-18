
import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { EpsService } from 'src/app/services/eps.service';
import { FormBuilder, FormGroup , FormControl, Validators} from '@angular/forms';

import { Router , ActivatedRoute} from '@angular/router';
import { switchMap} from 'rxjs/operators';

import { Eps } from './../../../model/eps.model';

import toastr from 'toastr';

@Component({
  selector: 'app-eps-form',
  templateUrl: './eps-form.component.html',
  styleUrls: ['./eps-form.component.css']
})
export class EpsFormComponent implements OnInit, AfterContentChecked {

  currentAction: string;
  epsForm: FormGroup;
  pageTitle: string;
  serverErrorMessage: string[] = null;
  submittingForm = false;
  eps: Eps = new Eps('', '', '', '', '');
  disabled = 'disabled';

  constructor( private epsService: EpsService,
               private activateRoute: ActivatedRoute,
               private route: Router,
               private formBuider: FormBuilder
               ) { }

  ngOnInit() {
    this.setCurrentAction();
    this.buildEpsForm();
    this.loadEps();
  }





  ngAfterContentChecked(): void {
    this.setPageTitle();
    if (this.currentAction === 'new') {
      this.disabled  = 'disabled';
    } else {
      this.disabled = '';
    }
  }
  // privates
  private setCurrentAction() {
    if (this.route.url[0].match('new') ) {
      this.currentAction = 'new';
    } else {
      this.currentAction = 'edit';
    }
  }

  private loadEps() {
    if (this.currentAction === 'edit') {
        this.activateRoute.paramMap.pipe(
          switchMap(params => this.epsService.getById(params.get('id')))
        )
        .subscribe(
          eps => {
            this.eps = eps;
            this.epsForm.patchValue(eps);
          } ,
          error => alert('deu erro')
        );
    }
  }

  private buildEpsForm() {
    this.epsForm = this.formBuider.group(
      {
        id: [null],
        nomeEmpresa: [null, Validators.min(3)],
        nomeContato: [null,Validators.min(3)],
        telefoneContato: [null],
        emailContato: [null],
        usuarioUltAlter: [null]

      }
    );
  }
  private setPageTitle() {
    if(this.currentAction === 'new') {
      this.pageTitle = 'Cadastro de Novo Eps';
    } else {
      const epsName = '' ;
      this.pageTitle = 'Editando EPS ' + epsName;
    }
  }




}
