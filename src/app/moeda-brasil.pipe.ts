import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moedaBrasil'
})
export class MoedaBrasilPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return new Intl.NumberFormat('pt-BR',{style: 'currency', currency:'BRL'}).format(value);
  }

}
