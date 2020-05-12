import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CarrinhoService } from '../services/carrinho.service';
import { OfertasService } from '../services/ofertas.service';
import { Ofertas } from '../shared/ofertas';

@Component({
  selector: 'vnd-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit, OnDestroy {

  public ofertaSelecionada: Ofertas;

  constructor(
    private ofertaService: OfertasService,
    private rota: ActivatedRoute,
    private carrinhoService: CarrinhoService) { }

  ngOnInit() {
    // var idItemSelecionado = this.rota.snapshot.params['id'];
    this.rota.params.subscribe((param: Params) => {
      this.ofertaService.retornaOfertaPorId(param.id)
        .then((oferta: Ofertas) => {
          this.ofertaSelecionada = oferta
        })
    })
    this.carrinhoService.retornaItensTeste();
  }

  public adicionarOferta(oferta: Ofertas): void {
    this.carrinhoService.adicionarItensAoCarrinho(oferta);
  }

  ngOnDestroy(): void {
  }

}
