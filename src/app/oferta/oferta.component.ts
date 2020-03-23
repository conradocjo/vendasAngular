import { Component, OnInit } from '@angular/core';
import { Ofertas } from '../shared/ofertas';
import { OfertasService } from '../ofertas.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'vnd-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {

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
}
