import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Ofertas } from '../shared/ofertas';
import { Subject, Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/of'


@Component({
  selector: 'vnd-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  private pesquisaSubject: Subject<string> = new Subject<string>();
  private ofertas: Observable<Ofertas[]>;

  constructor(private ofertaService: OfertasService) { }
  /*
    O switchMap será executado sempre quando método next for disparado.
    O processo é assincrono. e com switchMap a "memory leak" sequenciando
    a inscrição do observable, na medida que for havendo a inscrição de novos observables, 
    os anteriores serão cancelados.
  */
  ngOnInit() {
    this.ofertas = this.pesquisaSubject
    .debounceTime(1000)
    .distinctUntilChanged()
    .switchMap((val)=>{
      if (val.trim() === '') {
        return Observable.of<Ofertas[]>([])
      }
      return this.ofertaService.buscarOfertaPorDescricao(val);
    }).catch((erro)=>{
      console.log(`Erro ${erro}`)
      return new Observable()
    })

    this.ofertas.subscribe((pesquisa)=>{
      console.log(pesquisa)
    })
  }


  pesquisar(pesquisa:string){
    this.pesquisaSubject.next(pesquisa)
  }

}
