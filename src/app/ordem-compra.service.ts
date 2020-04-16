import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { URL_API } from '../app/shared/urlApi';
import { Pedido } from './model/pedido';

@Injectable({
  providedIn: 'root'
})
export class OrdemCompraService {

  private urlApi: string = URL_API

  constructor(private http: Http) { }

  public efetivarCompra(pedido: Pedido): Observable<number> {
    return this.http.post(
      `${this.urlApi}/pedidos`,
      JSON.stringify(pedido),
      new RequestOptions({ headers: new Headers() })
    ).map(retorno => retorno.json().id)


  }

  imprime(): void {
    console.log('Teste.')
  }
}
