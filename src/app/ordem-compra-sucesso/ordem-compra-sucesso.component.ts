import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vnd-ordem-compra-sucesso',
  templateUrl: './ordem-compra-sucesso.component.html',
  styleUrls: ['./ordem-compra-sucesso.component.css']
})
export class OrdemCompraSucessoComponent implements OnInit {

  @Input('idDoPedido') idPedido: number; // Através da propriedade idCompra recebo idPedido associado do componentParent

  constructor() { }

  ngOnInit() {
  }

}
