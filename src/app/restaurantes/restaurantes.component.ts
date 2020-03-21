import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Ofertas } from '../shared/ofertas';

@Component({
  selector: 'vnd-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})

export class RestaurantesComponent implements OnInit {


  @Output() public ofertaSelecEnviada: EventEmitter<Ofertas> = new EventEmitter();

  ofertas: Ofertas[];

  constructor(private ofertaServc: OfertasService) { }

  ngOnInit() {
    this.ofertaServc.retornaCategoria('RESTAURANTES')
      .then((ofertas: Ofertas[]) => {
        this.ofertas = ofertas
      })
  }

  public carregarTela(event: Event): void {
    this.ofertaServc.retornaOfertaPorId((<HTMLInputElement>event.target).value)
      .then((oferta: Ofertas) => {
        this.ofertaSelecEnviada.emit(oferta);
      })

  }

}
