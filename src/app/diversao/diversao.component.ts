import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../services/ofertas.service';
import { Ofertas } from '../shared/ofertas';

@Component({
  selector: 'vnd-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css']
})
export class DiversaoComponent implements OnInit {

  public ofertas: Ofertas[]
  public titulo:string = '';

  constructor(private ofertaService: OfertasService) { }

  ngOnInit() {
    this.ofertaService.retornaCategoria('DIVERSAO')
    .then((ofertas:Ofertas[])=>{
      this.ofertas = ofertas;
    })
  }


}
