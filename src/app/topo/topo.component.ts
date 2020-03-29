import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'vnd-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  constructor(private ofertaService: OfertasService) { }

  ngOnInit() {
    this.ofertaService.buscaTodasOfertas().subscribe(
      (retorno) => console.log(retorno),
      (error) => console.log(error)
    )
  }

  pesquisar(pesquisa: string) {
    if (pesquisa.length > 3) {
      this.ofertaService.buscarOfertas().then((ofertas) => {
        ofertas.forEach((x) => {
          if (x.titulo.toLocaleLowerCase().indexOf(pesquisa.toLocaleLowerCase()) != -1) {
            console.log(x.titulo)
          }
        })
      })
    }

  }

}
