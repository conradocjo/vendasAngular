import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, PatternValidator } from '@angular/forms';
import { CarrinhoService } from '../services/carrinho.service';
import { Pedido } from '../model/pedido';
import { OrdemCompraService } from '../services/ordem-compra.service';
import { ItemCarrinho } from '../model/itemCarrinho';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  public itens: ItemCarrinho[];

  public formulario: FormGroup = new FormGroup(
    {
      "endereco": new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(120)]),
      "numero": new FormControl('', [Validators.required]),
      "complemento": new FormControl(''),
      "formaPagamento": new FormControl('', Validators.required)
    }
  )

  public idOrdemCompraSucesso: number;

  constructor(
    private ordemCompraService: OrdemCompraService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    this.itens = this.carrinhoService.retornaItensTeste();
  }

  public confirmarCompra(): void {
    let pedido: Pedido = new Pedido(
      this.formulario.get('numero').value,
      this.formulario.get('endereco').value,
      this.formulario.get('formaPagamento').value,
      this.formulario.get('complemento').value,
      this.itens
    )
    if (this.itens.length > 0 && this.formulario.status === "VALID") {
      this.ordemCompraService.efetivarCompra(pedido).subscribe((id) => {
        this.idOrdemCompraSucesso = id;
        this.carrinhoService.limparCarrinhoDeCompras();
      });
    } else {
      alert("seu carrinho está vazio")
    }
  }

  public adicionarQuantidade(item: ItemCarrinho): void {
    this.carrinhoService.adicionarQuantidade(item);
  }

  public removerQuantidade(item: ItemCarrinho): void {
    this.carrinhoService.removerQuantidade(item);
  }


}
