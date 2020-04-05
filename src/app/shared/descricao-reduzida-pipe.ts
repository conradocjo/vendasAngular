import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'descricaoReduzida'
})
export class DescricaoReduzidaPipe implements PipeTransform {

    transform(text: string, iniciaEm: number, tamanho:number): string {
        if (text.length > tamanho) {
            text = text.substr(iniciaEm, tamanho).concat('...')
        }
        return text;
    }

}