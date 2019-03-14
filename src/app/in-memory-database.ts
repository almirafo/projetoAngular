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



    const epsis: Eps[] = [
      {id: '21',
       nomeEmpresa: 'TesteMethodSave',
       nomeContato: 'TesteMethodSave',
       telefoneContato: '12345678',
       emailContato: 'teste@',
       codigoSituacao: 'A',
       usuarioUltAlter: '1'
        },

        {id: '22',
        nomeEmpresa: 'TesteMethodSave',
        nomeContato: 'TesteMethodSave',
        telefoneContato: '12345678',
        emailContato: 'teste@',
        codigoSituacao: 'A',
        usuarioUltAlter: '1'
         },

         {id: '23',
         nomeEmpresa: 'TesteMethodSave',
         nomeContato: 'TesteMethodSave',
         telefoneContato: '12345678',
         emailContato: 'teste@',
         codigoSituacao: 'I',
         usuarioUltAlter: '1'

          },

          {id: '24',
          nomeEmpresa: 'TesteMethodSave',
          nomeContato: 'TesteMethodSave',
          telefoneContato: '12345678',
          emailContato: 'teste@',
          codigoSituacao: 'I',
          usuarioUltAlter: '1'

           }

  ];




    return { users, epsis };
  }

}
