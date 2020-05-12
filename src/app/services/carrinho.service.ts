import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map, retry } from "rxjs/operators";
import { ItemCarrinho } from '../model/itemCarrinho';
import { Ofertas } from '../shared/ofertas';
import { BaseService } from './base.service';


@Injectable({
  providedIn: 'root'
})
export class CarrinhoService extends BaseService {

  public itensDoCarrinho: ItemCarrinho[] = [];

  constructor(private http: Http) {
    super();
  }

  //Itens Abaixo serão refatorados
  public retornaItensCarrinho(): Promise<ItemCarrinho[]> {
    return this.http
      .get(`${this.urlApi}`)
      .toPromise()
      .then((retorno) => {
        return retorno.json();
      });
  }

  retornaItens(): Observable<ItemCarrinho[]> {
    return this.http
      .get(`${this.urlApi}`)
      .pipe(map(resultado => resultado.json()), retry(100))
  }

  public adicionarItensAoCarrinho(oferta: Ofertas): void {
    let itemCarrinho: ItemCarrinho = new ItemCarrinho(oferta.id, oferta.imagens[0], oferta.titulo, oferta.descricao_oferta, oferta.valor, 1);
    this.itensDoCarrinho.push(itemCarrinho);
    console.log(this.retornaItensTeste());
  }

  public retornaItensTeste():Array<ItemCarrinho> {
    return this.itensDoCarrinho;
  }

  // Utilização com HttpBaseService

  // public retornaItensCarrinho(): Promise<ItemCarrinho[]> {
  //   return this.http
  //     .get<ItemCarrinho[]>(`${this.urlApi}`)
  //     .toPromise()
  //     .then((retorno) => {
  //       return retorno;
  //     });
  // }

}
