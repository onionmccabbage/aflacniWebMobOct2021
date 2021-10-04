import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // we declare the data model for this component
  items = [{name:'pot', price:3.99},
           {name:'dot', price:2.99},
           {name:'spot', price:1.99}]

  constructor() { }

  ngOnInit(): void {
  }

}
