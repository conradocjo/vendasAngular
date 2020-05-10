import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ItemCarrinho } from '../model/itemCarrinho';
import { BaseService } from './base.service';


@Injectable({
  providedIn: 'root'
})
export class CarrinhoService extends BaseService {

  public itensDoCarrinho: ItemCarrinho[] = [];

  public url: string;

  constructor(private http: Http) {
    super();
  }

  // public retornaTodosCargos(): Promise<Cargo[]> {
  //   return this.http
  //     .get<Cargo[]>(`${this.cargoUrl}`)
  //     .toPromise()
  //     .then((retorno) => {
  //       return retorno;
  //     });
  // }

  // public retornaCargoPorParteDescricao(parteNome:string):Observable<Cargo[]> {
  //   return this.http
  //   .get<Cargo[]>(`${this.cargoUrl}/cargosPorParteDescricaoCargo/${parteNome}`)
  //   .pipe(map(resultado => resultado),retry(100))
  // }
}
