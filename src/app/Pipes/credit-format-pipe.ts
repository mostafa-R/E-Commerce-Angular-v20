
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditFormat',
})
export class CreditFormatPipe implements PipeTransform {
  transform(plainCreditCard: string): string {
    let cardNumber = '';
    for (let i = 0; i + 4 <= plainCreditCard.length; i += 4) {
      cardNumber += plainCreditCard.slice(i, i + 4) + ' - ';
    }
    return cardNumber.slice(0, -3);
  }
}
