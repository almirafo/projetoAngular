import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campanha-form',
  templateUrl: './campanha-form.component.html',
  styleUrls: ['./campanha-form.component.css']
})
export class CampanhaFormComponent implements OnInit {

  sourceEmpresas: any[ ];

  targetEmpresas: any[];

  constructor() { }

  ngOnInit() {

    this.sourceEmpresas = [
      {id: '001', name: 'ACE'},
      {id: '001', name: 'Acxion'},
      {id: '001', name: 'Call Link'},
      {id: '001', name: 'Contax'},
      {id: '001', name: 'Flex'},
      {id: '001', name: 'Explorer'},
      {id: '001', name: 'GetNet'},
      {id: '001', name: 'Tivit'},
      {id: '001', name: 'Atende Bem'},
      {id: '001', name: 'Dedic'}

    ];

    this.targetEmpresas = [];
  }

}
