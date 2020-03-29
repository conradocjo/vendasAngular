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
  }

  pesquisar(pesquisa:string){
    if (pesquisa.length > 3) {
      this.ofertaService.buscaTodasOfertas().subscribe(
        (retorno)=>{
          retorno.forEach((x) => {
            if (x.titulo.toLocaleLowerCase().indexOf(pesquisa.toLocaleLowerCase()) != -1) {
              console.log(x.titulo)
            }
          })
        },
        (error)=>{
          console.log(error)
        },
        ()=>{
          console.log("Aqui se completa o Observable, posso tomar ações neste ponto.")
        }
      )
    }
  }

}
