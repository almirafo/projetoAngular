import { Eps } from './eps.model';

export class epsEmail {

  id: number;
  email: string;
  tipo: string;
  epsid: Eps;

  constructor(
    id?: number,
    email?: string,
    tipo?: string,
    epsid?: Eps
  ) {}
}
