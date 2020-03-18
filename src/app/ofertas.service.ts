import { Ofertas } from './shared/ofertas';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class OfertasService {

  constructor(private http: Http) { }

  getOfertas(): Promise<Ofertas[]> {
    return this.http.get('http://localhost:3000/ofertas?destaque=true').toPromise()
      .then((resposta) => {
        return resposta.json()
      })
  }

  retornaCategoria(categoria: String): Promise<Ofertas[]> {
    if (categoria === 'DIVERSAO') {
      return this.http.get('http://localhost:3000/ofertas?categoria=diversao').toPromise()
        .then((resposta) => {
          return resposta.json()
        })
    } else if (categoria === 'RESTAURANTES') {
      return this.http.get('http://localhost:3000/ofertas?categoria=restaurante').toPromise()
        .then((resposta) => {
          return resposta.json()
        })
    }

  }


}
