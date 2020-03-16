import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let OfertasService = class OfertasService {
    constructor() {
        this.error = { codigo: 0, mensagem: "Default", tipoErro: [{ codigo: 0, descricao: "Erro Aleatório" }] };
        this.ofertas = [
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
        ];
    }
    getOfertas() {
        return new Promise((resolve, reject) => {
            let requisicaoSucesso = true;
            if (requisicaoSucesso) {
                setTimeout(() => {
                    console.log('executado primeira promise dentro de 1 segundo');
                    return resolve(this.ofertas);
                }, 1000);
            }
            else {
                console.log('Erro');
            }
        }).then((ofertas) => {
            return new Promise((resolva, rejeita) => {
                setTimeout(() => {
                    console.log('executado segunda promise dentro do then');
                }, 1000);
                setTimeout(() => {
                    resolva(ofertas);
                }, 10000);
            });
        });
    }
};
OfertasService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], OfertasService);
export { OfertasService };
//# sourceMappingURL=ofertas.service.js.map