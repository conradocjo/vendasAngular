import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vnd-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pesquisar(evento: any) {
    console.log(evento.target.value)
  }

}
