import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Ofertas } from '../shared/ofertas';

@Component({
  selector: 'vnd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})

export class HomeComponent implements OnInit {

  public ofertas: Ofertas[]

  constructor(private ofertaService: OfertasService) { }

  ngOnInit() {
    this.ofertaService.getOfertas()
      .then(
        (ofertas: Ofertas[]) => { this.ofertas = ofertas },
      )
      .catch((parametros: any) => { console.log(parametros) })

  }

}
