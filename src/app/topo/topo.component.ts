import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable, Subject } from 'rxjs';
import { Ofertas } from '../shared/ofertas';
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/debounceTime'


@Component({
  selector: 'vnd-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  public ofertas : Observable<Ofertas[]>;
  public subjectPesquisa: Subject<string> = new Subject<string>()


  constructor(private ofertaService: OfertasService) { }
  /*
    O switchMap será executado sempre quando método next for disparado.
    O processo é assincrono. e com switchMap a "memory leak" sequenciando
    a inscrição do observable, na medida que for havendo a inscrição de novos observables, 
    os anteriores serão cancelados.
  */
  ngOnInit() {
    this.ofertas = this.subjectPesquisa
    .debounceTime(1000) //Executa a ação do switchMap após 1 ms
    .switchMap((pesquisa: string)=>{
      console.log('requisição http para api.')
      return this.ofertaService.buscarOfertaPorDescricao(pesquisa)
    })
    //A partir do subscribe passamos olhar para o Observable.
    this.ofertas.subscribe((ofertas)=>{
      console.log(ofertas)
    })
  }

  pesquisar(pesquisa:string){
    console.log(pesquisa);
    this.subjectPesquisa.next(pesquisa)
  }

}
