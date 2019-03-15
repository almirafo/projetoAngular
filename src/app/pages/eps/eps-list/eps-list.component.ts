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


  corAtivo = { color : '#28a745'};
  corInativo = {color: '#ce0000'};

  epsList: Eps [ ] = [ {id: '21', nomeEmpresa: 'TesteMethodSave', nomeContato: 'TesteMethodSave',
  telefoneContato: '12345678', emailContato: 'teste@', codigoSituacao: 'A', usuarioUltAlter: '1'}];

  constructor( private epsService: EpsService) { }

  ngOnInit() {
    this.epsService.list().subscribe(
     data => this.epsList = data
    )
  }

  changeStyle(status) {
    if (status === 'A') {
      return this.corAtivo;
    } else {
      return this.corInativo;
    }
  }
}
