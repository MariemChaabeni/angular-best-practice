import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipes-functions',
  templateUrl: './pipes-functions.component.html',
  styleUrls: ['./pipes-functions.component.scss'],
})
export class PipesFunctionsComponent implements OnInit {
  products = [
    {
      name: 'product 1',
      price: 236,
    },
    {
      name: 'product 2',
      price: 25,
    },
    {
      name: 'product 3',
      price: 108,
    },
  ];
  newproduct: any = {
    name: '',
    price: null,
  };
  constructor() {}

  ngOnInit(): void {}

  getTotalPrice(price: number) {
    console.log('addtax pipe called');
    let total = price + price * 0.08;
    return total;
  }
  
  add() {
    this.products.push(this.newproduct);
    this.newproduct = { name: '', price: null };
  }
}
