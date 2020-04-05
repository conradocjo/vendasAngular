import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'vnd-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css']
})
export class ComoUsarComponent implements OnInit {

  private comoUsarDescricao: string;


  constructor(
    private rota: ActivatedRoute,
    private serviceOfertas: OfertasService

  ) { }

  ngOnInit() {
    // this.serviceOfertas.retornaDescricaoComoUsar(this.rota.parent.snapshot.params['id']).then(x => {
    //   this.comoUsarDescricao = x
    // })
    this.rota.parent.params.subscribe((params: Params) => {
      this.serviceOfertas.retornaDescricaoComoUsar(params.id).then(x => {
        this.comoUsarDescricao = x
      })
    })
  }


}
