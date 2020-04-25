import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../model/pedido';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  @ViewChild('formulario', { static: false }) pedido: NgForm;

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {

  }

  public confirmarCompra(): void {
    let pedidoPreenchido:Pedido = new Pedido(this.pedido.value.numero
      , this.pedido.value.endereco
      , this.pedido.value.complemento
      ,this.pedido.value.formaPagamento);
    
    this.ordemCompraService.efetivarCompra(pedidoPreenchido).subscribe(()=>{
      console.log("pedido cadastrado")
    })
  }
}
