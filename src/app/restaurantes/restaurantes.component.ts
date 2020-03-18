import { Component, OnInit, Injectable } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Ofertas } from '../shared/ofertas';

@Component({
  selector: 'vnd-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})

export class RestaurantesComponent implements OnInit {

  ofertas:Ofertas[];

  constructor(private ofertaServc: OfertasService) { }

  ngOnInit() {
    this.ofertaServc.retornaCategoria('RESTAURANTES')
    .then((ofertas:Ofertas[])=>{
      this.ofertas = ofertas
      console.log(ofertas);
    })
  }

}
