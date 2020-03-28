import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
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
    private rota: ActivatedRoute) { }

  ngOnInit() {
    var idItemSelecionado = this.rota.snapshot.params['id'];

    this.ofertaService.retornaOfertaPorId(idItemSelecionado)
      .then((oferta: Ofertas) => {
        this.ofertaSelecionada = oferta
      })
  }

  ngOnDestroy(): void {
  }

}
