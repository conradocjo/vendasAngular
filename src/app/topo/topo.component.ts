import { Component, OnInit, OnDestroy } from '@angular/core';
import { OfertasService } from '../services/ofertas.service';
import { Ofertas } from '../shared/ofertas';
import { Subject, Observable, Subscription } from 'rxjs';
import '../shared/imports_rxjs'


@Component({
  selector: 'vnd-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  private pesquisaSubject: Subject<string> = new Subject<string>();
  private observableOfertas: Observable<Ofertas[]>;

  constructor(private ofertaService: OfertasService) { }
  
  /*
    O switchMap será executado sempre quando método next for disparado.
    O processo é assincrono. e com switchMap a "memory leak" sequenciando
    a inscrição do observable, na medida que for havendo a inscrição de novos observables, 
    os anteriores serão cancelados.
  */
  ngOnInit() {
    this.observableOfertas = this.pesquisaSubject
    .debounceTime(300)
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
  }

  pesquisar(pesquisa:string){
    this.pesquisaSubject.next(pesquisa)
  }

  limparBusca() {
    this.pesquisaSubject.next('')
  }

}
