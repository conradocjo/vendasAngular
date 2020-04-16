import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../model/pedido';

@Component({
  selector: 'vnd-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  public numero: string = "";
  public endereco: string = "";
  public complemento: string = "";
  public formaPagamento: string = "";
  public pedido: Pedido;

  public numeroIsValid: boolean;
  public enderecoIsValid: boolean;
  public complementoIsValid: boolean;
  public formaPagamentoIsValid: boolean;

  public estadoInicialNumero: boolean;
  public estadoIncialEndereco: boolean;
  public estadoInicialComplemento: boolean;
  public estadoInicialFormaPagamento: boolean;

  public idPedido: number;

  public estadoBotao: string;

  constructor(
    public ordemCompraService: OrdemCompraService
  ) {
    this.iniciarVariaveis();
  }

  ngOnInit() {
  }

  atualizaEndereco(ender) {
    this.estadoIncialEndereco = false;
    this.endereco = ender;
    if (this.endereco.length > 3) {
      this.enderecoIsValid = true;
    } else {
      this.enderecoIsValid = false;
    }
    this.habilitaForm();
  }

  atualizaNumero(nmr) {
    this.estadoInicialNumero = false;
    var cnt = 0;
    var continua = true;
    nmr.split('').forEach(e => {
      var nm = parseInt(e);
      if (isNaN(nm)) {
        cnt += 1;
      }
    });
    if (cnt > 0) {
      continua = false;
    }

    if (continua) {
      this.numero = nmr;
      if (nmr != null) {
        this.numeroIsValid = true;
      } else {
        this.numeroIsValid = false;
      }
      cnt = 0;
    } else {
      nmr = "";
      this.numero = "";
      this.numeroIsValid = false;
      cnt = 0;
    }
    this.habilitaForm();
  }

  atualizaComplemento(compl) {
    this.estadoInicialComplemento = false;
    this.complemento = compl
    if (this.complemento != null && this.complemento.length > 3) {
      this.complementoIsValid = true;
    } else {
      this.complementoIsValid = false;
    }
    this.habilitaForm();
  }

  atualizarFormaPagamento(frmPgmt: string) {
    this.estadoInicialFormaPagamento = false;
    this.formaPagamento = frmPgmt
    if (this.formaPagamento != null && this.formaPagamento != "") {
      this.formaPagamentoIsValid = true;
    } else {
      this.formaPagamentoIsValid = false;
    }
    this.habilitaForm();
  }

  iniciarVariaveis(): void {
    this.estadoBotao = "disabled";

    this.numeroIsValid = false;
    this.enderecoIsValid = false;
    this.complementoIsValid = false;
    this.formaPagamentoIsValid = false;

    this.estadoIncialEndereco = true;
    this.estadoInicialComplemento = true;
    this.estadoInicialFormaPagamento = true;
    this.estadoInicialNumero = true;
  }

  habilitaForm(): void {
    if (this.numeroIsValid == true &&
      this.enderecoIsValid == true &&
      this.formaPagamentoIsValid == true) {
      this.estadoBotao = "";
    } else {
      this.estadoBotao = "disabled";
    }
  }

  confirmarCompra(): void {
    this.pedido = new Pedido(this.numero, this.endereco, this.complemento, this.formaPagamento);
    this.ordemCompraService.efetivarCompra(this.pedido).subscribe((retorno) => {
      this.idPedido = retorno;
    });
  }

}
