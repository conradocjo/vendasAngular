import { ItemCarrinho } from './itemCarrinho';

export class Pedido {

    constructor(
        public numero: string,
        public endereco: string,
        public complemento: string,
        public formaPagamento: string,
        public ItensDoCarrinho: ItemCarrinho[]
    ) {
    }

}
