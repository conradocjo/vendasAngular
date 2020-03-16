import { Ofertas } from './shared/ofertas';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class OfertasService {

  constructor(private http: Http) { }

  private error: any = { codigo: 0, mensagem: "Default", tipoErro: [{ codigo: 0, descricao: "Erro Aleatório" }] };

  private ofertas: Array<Ofertas> = [
    {
      id: 1,
      categoria: "restaurante",
      titulo: "Super Burger",
      descricaoOferta: "Rodízio de Mini-hambúrger com opção de entrada.",
      anunciante: "Original Burger",
      valor: 29.90,
      destaque: true,
      imagens: [
        { url: "/assets/ofertas/1/img1.jpg" },
        { url: "/assets/ofertas/1/img2.jpg" },
        { url: "/assets/ofertas/1/img3.jpg" },
        { url: "/assets/ofertas/1/img4.jpg" }
      ]
    },
    {
      id: 2,
      categoria: "restaurante",
      titulo: "Cozinha Mexicana",
      descricaoOferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
      anunciante: "Mexicana",
      valor: 32.90,
      destaque: true,
      imagens: [
        { url: "/assets/ofertas/2/img1.jpg" },
        { url: "/assets/ofertas/2/img2.jpg" },
        { url: "/assets/ofertas/2/img3.jpg" },
        { url: "/assets/ofertas/2/img4.jpg" }
      ]

    },
    // {
    //   id: 3,
    //   categoria: "diversao",
    //   titulo: "Estância das águas",
    //   descricaoOferta: "Diversão garantida com piscinas, trilhas e muito mais.",
    //   anunciante: "Estância das águas",
    //   valor: 31.95,
    //   destaque: true,
    //   imagens: [
    //     { url: "/assets/ofertas/3/img1.jpg" },
    //     { url: "/assets/ofertas/3/img2.jpg" },
    //     { url: "/assets/ofertas/3/img3.jpg" },
    //     { url: "/assets/ofertas/3/img4.jpg" },
    //     { url: "/assets/ofertas/3/img5.jpg" },
    //     { url: "/assets/ofertas/3/img6.jpg" }
    //   ]
    // },
    {
      id: 4,
      categoria: "diversao",
      titulo: "Estância das águas",
      descricaoOferta: "Diversão garantida com piscinas, trilhas e muito mais.",
      anunciante: "Estância das águas",
      valor: 31.90,
      destaque: true,
      imagens: [
        { url: "/assets/ofertas/3/img1.jpg" },
        { url: "/assets/ofertas/3/img2.jpg" },
        { url: "/assets/ofertas/3/img3.jpg" },
        { url: "/assets/ofertas/3/img4.jpg" },
        { url: "/assets/ofertas/3/img5.jpg" },
        { url: "/assets/ofertas/3/img6.jpg" }
      ]
    }
  ]


  public getOfertas(): Promise<Ofertas[]> {
    return new Promise((resolve, reject) => {
      let requisicaoSucesso = true;
      if (requisicaoSucesso) {
        setTimeout(() => {
          console.log('executado primeira promise dentro de 1 segundo')
          return resolve(this.ofertas);
        }, 1000);
      } else {
        console.log('Erro')
      }
    }).then((ofertas: Ofertas[]) => {
      return new Promise((resolva, rejeita) => {
        setTimeout(() => {
          console.log('executado segunda promise dentro do then')
        }, 1000);
        setTimeout(() => {
          resolva(ofertas);
        }, 10000);
      })
    })
  }
}
