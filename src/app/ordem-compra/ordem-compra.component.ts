import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../model/pedido';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  public formulario: FormGroup = new FormGroup(
    {
      "endereco": new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(120)]),
      "numero": new FormControl('', [Validators.required]),
      "complemento": new FormControl(''),
      "formaPagamento": new FormControl('', Validators.required)
    }
  )

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {

  }

  public confirmarCompra(): void {
    let pedido: Pedido = new Pedido (
      this.formulario.get('numero').value,
      this.formulario.get('endereco').value,
      this.formulario.get('formaPagamento').value,
      this.formulario.get('complemento').value
    )
    this.ordemCompraService.efetivarCompra(pedido).subscribe((id)=>{
      console.log(id)
    });
  }
}
