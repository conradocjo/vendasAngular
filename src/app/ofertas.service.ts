import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'; import 'rxjs/add/operator/retry';
import { URL_API } from '../app/shared/urlApi';
import { Ofertas } from './shared/ofertas';


@Injectable()
export class OfertasService {

  private urlApi: string = URL_API

  constructor(private http: Http) { }

  getOfertas(): Promise<Ofertas[]> {
    return this.http.get(`${this.urlApi}/ofertas?destaque=true`).toPromise()
      .then((resposta) => {
        return resposta.json()
      })
  }

  retornaCategoria(categoria: String): Promise<Ofertas[]> {
    if (categoria === 'DIVERSAO') {
      return this.http.get(`${this.urlApi}/ofertas?categoria=diversao`).toPromise()
        .then((resposta) => {
          return resposta.json()
        })
    } else if (categoria === 'RESTAURANTES') {
      return this.http.get(`${this.urlApi}/ofertas?categoria=restaurante`).toPromise()
        .then((resposta) => {
          return resposta.json()
        })
    }
  }

  retornaOfertaPorId(id: string): Promise<Ofertas> {
    return this.http.get(`${this.urlApi}/ofertas?id=${id}`).toPromise()
      .then((resposta) => {
        return resposta.json()[0]
      })
  }

  retornaDescricaoComoUsar(id: string): Promise<string> {
    return this.http.get(`${this.urlApi}/como-usar?id=${id}`).toPromise()
      .then((resposta) => {
        return resposta.json()[0].descricao
      })
  }

  retornaLocalidadeDasOfertasPorId(id: string): Promise<string> {
    return this.http.get(`${this.urlApi}/onde-fica?id=${id}`).toPromise()
      .then((retorno) => {
        return retorno.json()[0].descricao
      })
  }

  buscarOfertas(): Promise<Ofertas[]> {
    return this.http.get(`${this.urlApi}/ofertas`).toPromise()
      .then((retorno) => {
        return retorno.json();
      })
  }

  buscaTodasOfertas(): Observable<Ofertas[]> {
    return this.http.get(`${this.urlApi}/ofertas`)
      .map((resposta) => resposta.json())
      .retry(50000)
  }

  buscarOfertaPorDescricao(pesquisa:string):Observable<Ofertas[]> {
    return this.http.get(`${this.urlApi}/ofertas?descricao_oferta_like=${pesquisa}`)
    .retry(10)
    .map((resposta)=> resposta.json())
  }


}
