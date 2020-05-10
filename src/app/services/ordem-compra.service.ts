import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { URL_API } from '../shared/urlApi';
import { Pedido } from '../model/pedido';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class OrdemCompraService extends BaseService {

  constructor(private http: Http) {
    super();
  }

  public efetivarCompra(pedido: Pedido): Observable<number> {
    let headers: Headers = new Headers();
    headers.append('Content-type', 'application/json')

    return this.http.post(
      `${this.urlApi}/pedidos`,
      JSON.stringify(pedido),
      new RequestOptions({ headers:headers })
    ).map(retorno => retorno.json().id)

  }

  imprime(): void {
    console.log('Teste.')
  }
}
