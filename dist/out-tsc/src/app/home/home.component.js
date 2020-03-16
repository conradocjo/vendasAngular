import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { OfertasService } from '../ofertas.service';
let HomeComponent = class HomeComponent {
    constructor(ofertaService) {
        this.ofertaService = ofertaService;
    }
    ngOnInit() {
        this.ofertaService.getOfertas()
            .then((ofertas) => { this.ofertas = ofertas; })
            .catch((parametros) => { console.log(parametros); });
    }
};
HomeComponent = tslib_1.__decorate([
    Component({
        selector: 'vnd-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css'],
        providers: [OfertasService]
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map