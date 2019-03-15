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



    const eps: Eps[] = [
      {id: '21', nomeEmpresa: 'ACE', nomeContato: 'Arian Augusto Pinho',
      telefoneContato: '12345678', emailContato: 'arian.pinho@acegroup.com', codigoSituacao: 'A', usuarioUltAlter: '1'} ,
      {id: '22', nomeEmpresa: 'Acxion', nomeContato: 'Ricardo Rego',
      telefoneContato: '12345678', emailContato: ' 	ricardo@rego@acxiom.com', codigoSituacao: 'A', usuarioUltAlter: '1'} ,
      {id: '23', nomeEmpresa: 'Call Link', nomeContato: 'Rodrigo S. Garcia',
      telefoneContato: '12345678', emailContato: 'garcia@calllink.com.br', codigoSituacao: 'I', usuarioUltAlter: '1'} ,
      {id: '24', nomeEmpresa: 'Contax', nomeContato: 'Dyego Cavalcante',
      telefoneContato: '12345678', emailContato: 'dyego.silva@todo.com.br', codigoSituacao: 'A', usuarioUltAlter: '1'} ,
      {id: '25', nomeEmpresa: 'Flex', nomeContato: 'Bruno Augusto Pinho',
      telefoneContato: '12345678', emailContato: 'bruno@flex.com', codigoSituacao: 'I', usuarioUltAlter: '1'} ,
      {id: '26', nomeEmpresa: 'Explorer', nomeContato: ' 	Carlos Augusto Pinho',
      telefoneContato: '12345678', emailContato: 'carlos@explorer.com', codigoSituacao: 'A', usuarioUltAlter: '1'} ,
      {id: '27', nomeEmpresa: 'GetNet', nomeContato: 'cristiano@getnet.com',
      telefoneContato: '12345678', emailContato: 'eliane.souza@tivit.com.br', codigoSituacao: 'I', usuarioUltAlter: '1'}
  ];




    return { eps, users };
  }

}
