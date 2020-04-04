import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'descricaoReduzida'
})
export class DescricaoReduzidaPipe implements PipeTransform {

    transform(text: string): string {
        if (text.length > 15) {
            text = text.substr(0, 15).concat('...')
        }
        return text;
    }

}