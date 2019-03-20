import { InMemoryDbService} from 'angular-in-memory-web-api';
import { User } from './model/user.model';
import { Eps } from './model/eps.model';
import { epsEmail } from './model/epsEmail.model';

export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    const users: User[] = [
      {id: 'x214082', name : 'Almir', password : '123456', email: 'p000almoliveira@prservicos.com.br'},
      {id: 't000001', name : 'Julio', password : '123456', email: 'p000juliliveira@prservicos.com.br'},
      {id: 'x214083', name : 'Jose Maria', password : '123456', email: 'p000josemaria@prservicos.com.br'},
      {id: 'x214084', name : ' Cristina', password : '123456', email: 'p000cristinabranco@prservicos.com.br'}
    ];



    const eps: Eps[] = [
      {id: 21, nomeEmpresa: 'ACE', nomeContato: 'Arian Augusto Pinho',
      telefoneContato: '12345678', emailContato: 'arian.pinho@acegroup.com', codigoSituacao: 'A', usuarioUltAlter: '1'} ,
      {id: 22, nomeEmpresa: 'Acxion', nomeContato: 'Ricardo Rego',
      telefoneContato: '12345678', emailContato: ' 	ricardo@rego@acxiom.com', codigoSituacao: 'A', usuarioUltAlter: '1'} ,
      {id: 23, nomeEmpresa: 'Call Link', nomeContato: 'Rodrigo S. Garcia',
      telefoneContato: '12345678', emailContato: 'garcia@calllink.com.br', codigoSituacao: 'I', usuarioUltAlter: '1'} ,
      {id: 24, nomeEmpresa: 'Contax', nomeContato: 'Dyego Cavalcante',
      telefoneContato: '12345678', emailContato: 'dyego.silva@todo.com.br', codigoSituacao: 'A', usuarioUltAlter: '1'} ,
      {id: 25, nomeEmpresa: 'Flex', nomeContato: 'Bruno Augusto Pinho',
      telefoneContato: '12345678', emailContato: 'bruno@flex.com', codigoSituacao: 'I', usuarioUltAlter: '1'} ,
      {id: 26, nomeEmpresa: 'Explorer', nomeContato: ' 	Carlos Augusto Pinho',
      telefoneContato: '12345678', emailContato: 'carlos@explorer.com', codigoSituacao: 'A', usuarioUltAlter: '1'} ,
      {id: 27, nomeEmpresa: 'GetNet', nomeContato: 'cristiano@getnet.com',
      telefoneContato: '12345678', emailContato: 'eliane.souza@tivit.com.br', codigoSituacao: 'I', usuarioUltAlter: '1'}
  ];

    const epsEmailsToCC: epsEmail[] = [ {id: 1, email: 'almirafo1@gmail.com', tipo: 'to', epsid: eps[0]},
                                        {id: 2, email: 'almirafo2@gmail.com', tipo: 'to', epsid: eps[0]},
                                        {id: 3, email: 'almirafo3@gmail.com', tipo: 'to', epsid: eps[0]},
                                        {id: 4, email: 'almirafo4@gmail.com', tipo: 'to', epsid: eps[0]},

                                        {id: 5, email: 'almirafo1@gmail.com', tipo: 'cc', epsid: eps[0]},
                                        {id: 6, email: 'almirafo2@gmail.com', tipo: 'cc', epsid: eps[0]},



                                        {id: 7, email: 'almirafo12@gmail.com', tipo: 'to', epsid: eps[1]},
                                        {id: 8, email: 'almirafo22@gmail.com', tipo: 'to', epsid: eps[1]},
                                        {id: 9, email: 'almirafo32@gmail.com', tipo: 'to', epsid: eps[1]},
                                        {id: 10, email: 'almirafo42@gmail.com', tipo: 'to', epsid: eps[1]},

                                        {id: 11, email: 'almirafo12@gmail.com', tipo: 'cc', epsid: eps[1]},


  ];



    return { eps, users, epsEmailsToCC };
  }

}
