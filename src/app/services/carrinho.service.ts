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


  teste(): ItemCarrinho[] {
    return this.itensDoCarrinho;
  }

  public adicionarItensAoCarrinho(oferta: Ofertas): void {
    let itemCarrinho: ItemCarrinho = new ItemCarrinho(oferta.id, oferta.imagens[0], oferta.titulo, oferta.descricao_oferta, oferta.valor, 1);

    // Variavel itemCarrinhoEncontrado recebe o proprio item, caso o indice atual da lista percorrida seja igual ao item recebido.
    let itemCarrinhoEncontrado = this.itensDoCarrinho.find((item: ItemCarrinho) => item.id === itemCarrinho.id)

    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade += 1;
    } else {
      this.itensDoCarrinho.push(itemCarrinho);
    }
    console.log(this.retornaItensTeste());
  }

  public adicionarQuantidade(itemCarrinho: ItemCarrinho): void {

    let itemCarrinhoExistente = this.itensDoCarrinho.find((item: ItemCarrinho) => item.id === itemCarrinho.id);
    if (itemCarrinhoExistente) {
      itemCarrinhoExistente.quantidade += 1;
    } else {
      this.itensDoCarrinho.push(itemCarrinho);
    }
  }

  public removerQuantidade(itemCarrinho: ItemCarrinho): void {
    let itemExistente = this.itensDoCarrinho.find((item: ItemCarrinho) => item.id === itemCarrinho.id);
    if (itemExistente && itemExistente.quantidade > 0) {
      itemExistente.quantidade -= 1;
    }
    if (itemExistente.quantidade === 0) {
      this.itensDoCarrinho = []
    }
  }

  public retornaItensTeste(): Array<ItemCarrinho> {
    return this.itensDoCarrinho;
  }

  retornaValorTotal(): number {
    let total = 0;
    this.itensDoCarrinho.map((item: ItemCarrinho) => {
      total = total + (item.quantidade * item.valor)
    })
    return total;
  }

  limparCarrinhoDeCompras():void {
    this.itensDoCarrinho = [];
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
