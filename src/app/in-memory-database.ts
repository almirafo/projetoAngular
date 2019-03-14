import { InMemoryDbService} from 'angular-in-memory-web-api';
import { User } from './model/user.model';
import { Eps } from './model/eps.model';

export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    const users: User[] = [
      {id: 'x214082', name : 'Almir', password : '123456', email: 'p000almoliveira@prservicos.com.br'},
      {id: 't000001', name : 'Julio', password : '123456', email: 'p000juliliveira@prservicos.com.br'},
      {id: 'x214083', name : 'Jose Maria', password : '123456', email: 'p000josemaria@prservicos.com.br'},
      {id: 'x214084', name : ' Cristina', password : '123456', email: 'p000cristinabranco@prservicos.com.br'}
    ];



    const epss: Eps[] = [
    { id: '001', nomeEmpresa:	'ACE222',  nomeContato: 'Arian Augusto Pinho',
     telefoneContato:	'(11) 4504-4041', emailContato: 'arian.pinho@acegroup.com', codigoSituacao: 	'Ativa'	},
    { id: '002', nomeEmpresa:	'Acxion',  nomeContato: 'Ricardo Rego',
    telefoneContato:	'(11) 3050-7030', 	emailContato: 'ricardo@rego@acxiom.com', codigoSituacao: 	'Ativa' 		},
    { id: '003', nomeEmpresa:	'Call Link', 	nomeContato: 'Rodrigo S. Garcia',
    telefoneContato:	'(34) 3228-5321', 	emailContato:	'garcia@calllink.com.br', codigoSituacao: 	'Ativa'	},
    { id: '004', nomeEmpresa:	'Contax', nomeContato: 'Dyego Cavalcante',
    telefoneContato:	'(12) 3122-0000', 	emailContato:	'dyego.silva@todo.com.br', codigoSituacao: 	'Ativa' 		},
    { id: '005', nomeEmpresa:	'Flex', 	    nomeContato: 'Bruno Augusto Pinho',
    telefoneContato:	'(44) 4444-4444', emailContato:	'	bruno@flex.com', codigoSituacao: 	'Inativa' 	},
    { id: '006', nomeEmpresa:	'Explorer',	nomeContato: 'Carlos Augusto Pinho',
    telefoneContato:	'(11) 4504-4041', emailContato:	'carlos@explorer.com', codigoSituacao: 	'Ativa'	} 	,
    { id: '007', nomeEmpresa:	'GetNet', nomeContato: 'Cristiano da Silva',
    telefoneContato:	'(11) 5555-5555', 	emailContato:	'cristiano@getnet.com', codigoSituacao: 	'Inativa'},
    { id: '008', nomeEmpresa:	'Tivit', nomeContato: 'Eliane Souza',
    telefoneContato:	'(11) 6666-6666', 	emailContato:	'eliane.souza@tivit.com.br', codigoSituacao: 	'Ativa'} ,
    { id: '009', nomeEmpresa:  'Atende Bem', 	nomeContato: 'Fabricio Cavalcante',
     telefoneContato:	'(11) 7777-7777', 	emailContato:	'fabricio@atendebem.com', codigoSituacao: 	'Ativa'	} ,
    { id: '010', nomeEmpresa:	'Dedic', nomeContato: 'Ana Paula',
    telefoneContato:	'(11) 3079-8171', 	emailContato:	'ana@dedic.com', codigoSituacao: 	'Ativa'}
  ];




    return { users, epss };
  }

}
