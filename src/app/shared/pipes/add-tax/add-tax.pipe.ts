import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addTax',
  // pure:false
})
export class AddTaxPipe implements PipeTransform {
  transform(price: number): number {
    return price ? this.getTotalPrice(price) : price;
  }
  getTotalPrice(price: number) {
    console.log('addtax pipe called');
    let total = price + price * 0.08;
    return total;
  }
}
