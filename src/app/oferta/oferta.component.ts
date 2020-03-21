import { Component, OnInit } from '@angular/core';
import { Ofertas } from '../shared/ofertas';

@Component({
  selector: 'vnd-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {

  public ofertaSelecionada:Ofertas;

  constructor() { }

  ngOnInit() {
  }

  testerino(event:Event){
    console.log(event)
  }

}
