import { Ofertas } from './shared/ofertas';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { URL_API } from '../app/shared/urlApi';

@Injectable()
export class OfertasService {

  private urlApi: string = URL_API

  constructor(private http: Http) { }

  getOfertas(): Promise<Ofertas[]> {
    return this.http.get(`${this.urlApi}?destaque=true`).toPromise()
      .then((resposta) => {
        return resposta.json()
      })
  }

  retornaCategoria(categoria: String): Promise<Ofertas[]> {
    if (categoria === 'DIVERSAO') {
      return this.http.get(`${this.urlApi}?categoria=diversao`).toPromise()
        .then((resposta) => {
          return resposta.json()
        })
    } else if (categoria === 'RESTAURANTES') {
      return this.http.get(`${this.urlApi}?categoria=restaurante`).toPromise()
        .then((resposta) => {
          return resposta.json()
        })
    }

  }

  retornaOfertaPorId(id: string): Promise<Ofertas> {
    return this.http.get(`${this.urlApi}ofertas?id=${id}`).toPromise()
      .then((resposta) => {
        return resposta.json()[0]
      })
  }


}
