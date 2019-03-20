import { EpsService } from './../../../services/eps.service';
import { Component, OnInit } from '@angular/core';
import { Eps } from 'src/app/model/eps.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-eps-list',
  templateUrl: './eps-list.component.html',
  styleUrls: ['./eps-list.component.css']
})
export class EpsListComponent implements OnInit {

  serverErrorMessage: string[] = null;
  corAtivo = { color : '#28a745'};
  corInativo = {color: '#ce0000'};

  epsList: Eps [ ] = [];

  constructor( private epsService: EpsService) { }

  ngOnInit() {
    this.epsService.list().subscribe(
     data => this.epsList = data
    );
  }

  private changeStyle(status) {
    if (status === 'A') {
      return this.corAtivo;
    } else {
      return this.corInativo;
    }
  }

  private activate(item) {
     this.epsList[this.epsList.findIndex(d => d.id === item)].codigoSituacao = 'A';
     const epsUpdate =  this.epsList[this.epsList.findIndex(d => d.id === item)];
     const eps: Eps = Object.assign(new Eps(), epsUpdate);
     this.epsService.update(eps)
    .subscribe(
      error => this.actionsError(error)
    );




  }

  private inactivate(item) {
     this.epsList[this.epsList.findIndex(d => d.id === item)].codigoSituacao = 'I';
     const epsUpdate =  this.epsList[this.epsList.findIndex(d => d.id === item)];
     const eps: Eps = Object.assign(new Eps(), epsUpdate);
     this.epsService.update(eps)
    .subscribe(
      error => this.actionsError(error)
    );
  }


  private actionsError(error: any) {


    if (error.status === 422) {
      this.serverErrorMessage = JSON.parse(error.body).errors;
    } else {
      this.serverErrorMessage = ['Falha de comunicação'];
    }
  }



}
