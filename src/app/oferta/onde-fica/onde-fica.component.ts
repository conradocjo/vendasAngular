import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/ofertas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'vnd-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css']
})
export class OndeFicaComponent implements OnInit {

  private ondeFica :string

  constructor(
    private ofertaService: OfertasService,
    private rota: ActivatedRoute

  ) { }

  ngOnInit() {
    this.ofertaService.retornaLocalidadeDasOfertasPorId(this.rota.parent.snapshot.params['id'])
    .then(x=>{
      this.ondeFica = x
    })
  }

}
