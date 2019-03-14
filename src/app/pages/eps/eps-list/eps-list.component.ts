import { Component, OnInit } from '@angular/core';
//parei aqui

@Component({
  selector: 'app-eps-list',
  templateUrl: './eps-list.component.html',
  styleUrls: ['./eps-list.component.css']
})
export class EpsListComponent implements OnInit {

 // corAtivo = 'style="font-size:17px;color:#28a745"';
 // corInativo = 'style="font-size:17px;color:#28a745"';



 corAtivo = '{"font-size":"17px","color":"#28a745"}';
  corInativo = '{"font-size":"17px","color":"#ce0000"}';

  epsList = [
    { codigo: '001', empresa:	'ACE',  contato: 'Arian Augusto Pinho', telefone:	'(11) 4504-4041', email: 'arian.pinho@acegroup.com', situacao: 	'Ativa', cor: this.corAtivo	},
    { codigo: '002', empresa:	'Acxion',  contato: 'Ricardo Rego', 	telefone:	'(11) 3050-7030', 	email: 'ricardo@rego@acxiom.com', situacao: 	'Ativa' , cor: this.corAtivo		},
    { codigo: '003', empresa:	'Call Link', 	contato: 'Rodrigo S. Garcia', 	telefone:	'(34) 3228-5321', 	email:	'garcia@calllink.com.br', situacao: 	'Ativa', cor: this.corAtivo	},
    { codigo: '004', empresa:	'Contax', contato: 'Dyego Cavalcante', 	telefone:	'(12) 3122-0000', 	email:	'dyego.silva@todo.com.br', situacao: 	'Ativa' , cor: this.corAtivo		},
    { codigo: '005', empresa:	'Flex', 	    contato: 'Bruno Augusto Pinho', 	telefone:	'(44) 4444-4444', email:	'	bruno@flex.com', situacao: 	'Inativa' , cor: this.corInativo		},
    { codigo: '006', empresa:	'Explorer',	contato: 'Carlos Augusto Pinho', 	telefone:	'(11) 4504-4041',email:	'carlos@explorer.com', situacao: 	'Ativa', cor: this.corAtivo	} 	,
    { codigo: '007', empresa:	'GetNet', contato: 'Cristiano da Silva', 	telefone:	'(11) 5555-5555', 	email:	'cristiano@getnet.com', situacao: 	'Inativa', cor: this.corInativo	},
    { codigo: '008', empresa:	'Tivit', contato: 'Eliane Souza', 	telefone:	'(11) 6666-6666', 	email:	'eliane.souza@tivit.com.br', situacao: 	'Ativa'} ,
    { codigo: '009', empresa:'Atende Bem', 	contato: 'Fabricio Cavalcante', 	telefone:	'(11) 7777-7777', 	email:	'fabricio@atendebem.com', situacao: 	'Ativa', cor: this.corAtivo	} ,
    { codigo: '010', empresa:	'Dedic', contato: 'Ana Paula', 	telefone:	'(11) 3079-8171', 	email:	'ana@dedic.com', situacao: 	'Ativa'}
];

  constructor() { }

  ngOnInit() {



  }

}
