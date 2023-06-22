import { products } from "../products";
import { Iproducts } from '../Iproducts';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  products: Iproducts[] = products;

  constructor() { }

  ngOnInit(): void {
  }
}
