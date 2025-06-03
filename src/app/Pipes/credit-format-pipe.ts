// Make a custom pipe, that formats the credit card number given in format like “0000000000000000” to this format “0000 – 0000 – 0000 – 0000”.

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditFormat',
})
export class CreditFormatPipe implements PipeTransform {
  transform(plainCreditCard: string): string {
    let cardNumber = '';
    for (let i = 0; i + 4 <= plainCreditCard.toString().length; i += 4) {
      cardNumber =
        cardNumber + plainCreditCard.toString().slice(i, i + 4) + ' ';
    }
    return cardNumber.trim();
  }
}
