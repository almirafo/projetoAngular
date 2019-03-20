
import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { EpsService } from 'src/app/services/eps.service';
import { FormBuilder, FormGroup , FormControl, Validators, ReactiveFormsModule} from '@angular/forms';

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
  eps: Eps = new Eps();
  isDisabled = true;
  emailTO = '';
  emailCC = '';
  emailsTO = [];
  emailsCC = [];
  emailTOisValid = true;
  emailCCisValid = true;
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
  private loadEps() {
    if (this.currentAction === 'edit') {
      this.activateRoute.paramMap.pipe(
        switchMap(params => this.epsService.getById(params.get('id')))

      ).subscribe(
        eps => {
          this.eps = eps;

          this.epsForm.patchValue(this.eps);
        } ,
        error => alert('Error ' + error)
      );

    } else {
      this.eps = new Eps();
      this.eps.codigoSituacao = 'A';
      this.epsForm.patchValue(this.eps);
      this.isDisabled = true;
    }
  }

  ngAfterContentChecked() {
    this.setPageTile();
  }

  // privates

  private setCurrentAction() {
    if (this.activateRoute.snapshot.url[0].path === 'new') {
      this.currentAction = 'new';
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
      this.currentAction = 'edit';
    }
  }

  private buildEpsForm() {
   this.epsForm = this.formBuider.group(
     {
       id: [null],
       nomeEmpresa: [null, [Validators.required]],
       nomeContato: [null, [Validators.required]],
       telefoneContato: [null],
       emailContato: new FormControl(null, [Validators.required, Validators.email]),
       usuarioUltAlter: [null],
       codigoSituacao: [null],
       emailTO: [null, Validators.email],
       emailCC: [null, Validators.email]
     }
   );
  }

  private get input() {
    this.submittingForm = !this.epsForm.get('emailContato').valid;
    return this.epsForm.get('emailContato');
  }

  private setPageTile() {
    if (this.currentAction === 'new') {
      this.pageTitle = 'Novo Cadastro EPS';
    } else {
      this.pageTitle = 'Editar Cadastro EPS: ' + this.epsForm.controls.nomeEmpresa.value || '';
    }
  }


  private submitForm() {
    this.submittingForm = true;
    if (this.currentAction === 'new') {
      this.createEps();
    } else {
      this.updateEps();
    }
  }
  private updateEps() {
    const eps: Eps = Object.assign(new Eps(), this.epsForm.value);
    this.epsService.update(eps)
    .subscribe(
      eps => this.actionsForSuccess(eps),
      error => this.actionsError(error)
    );
  }

  private createEps() {
    const eps: Eps = Object.assign(new Eps(), this.epsForm.value);
    this.epsService.create(eps)
    .subscribe(
      eps => this.actionsForSuccess(eps),
      error => this.actionsError(error)
    );
  }

  private actionsError(error: any) {
    toastr.error('Erro de solicitação');
    this.submittingForm = false;
    if (error.status === 422) {
      this.serverErrorMessage = JSON.parse(error.body).errors;
    } else {
      this.serverErrorMessage = ['Falha de comunicação'];
    }
  }

  private actionsForSuccess(eps) {
    toastr.success('sucesso!!');
    this.route.navigateByUrl('eps', {skipLocationChange: true}).then(
      () => this.route.navigate(['eps', eps.id, 'edit'] )
    );
  }


  private isEmail(email: string) {

    const emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    return email.match( emailPattern );

  }
  private addEmail(emailType) {

    this.emailTOisValid = true;
    this.emailCCisValid = true;
    if (emailType === 'to') {
      if ( this.isEmail(this.epsForm.controls.emailTO.value)) {
        this.emailsTO.push(this.epsForm.controls.emailTO.value);
        this.epsForm.controls.emailTO.setValue('');

        if (this.eps.id) {
          alert('adicionar em base de dados');
        }

        } else { this.emailTOisValid = false; }
      } else {
        if ( this.isEmail(this.epsForm.controls.emailCC.value)) {
          this.emailsCC.push(this.epsForm.controls.emailCC.value);
          this.epsForm.controls.emailCC.setValue('');
        } else { this.emailCCisValid = false; }
      }
  }


  private removeEmailTO(index) {

      this.emailsTO.splice( this.emailsTO.findIndex(d => d === index) , 1);

      if (this.emailsTO.length === 0) {
        this.emailsTO = [];
      }

  }

  private removeEmailCC(index) {

    this.emailsCC.splice( this.emailsCC.findIndex(d => d === index) , 1);

    if (this.emailsCC.length === 0) {
      this.emailsCC = [];
    }

}



}
