
import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { EpsService } from 'src/app/services/eps.service';
import { FormBuilder, FormGroup , FormControl, Validator} from '@angular/forms';
import toastr from 'toastr';
import { Router , ActivatedRoute} from '@angular/router';
import { switchMap  } from 'rxjs/operators';

import { Eps } from './../../../model/eps.model';

@Component({
  selector: 'app-eps-form',
  templateUrl: './eps-form.component.html',
  styleUrls: ['./eps-form.component.css']
})
export class EpsFormComponent implements OnInit, AfterContentChecked {

  private eps: Eps = new Eps('',
    '',
    '',
    '',
    '',
    '');

  currentAction: string;
  epsForm: FormGroup;
  serverErrorMessage: string[] = null;
  submittingForm = false;

  constructor( private epsService: EpsService,
               private router: Router,
               private formBuider: FormBuilder) { }

  ngOnInit() {
    this.epsService.getById(this.eps.id).subscribe(
      data => this.eps = data,
      error => console.log('Erro', error)
    );
  }

  ngAfterContentChecked(): void {

  }

}
